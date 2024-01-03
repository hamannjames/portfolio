<script>
    import { afterUpdate, onDestroy, onMount } from "svelte";
    import { intersectionEvent } from "./actions/intersectionEvent";
    import { browser } from "$app/environment";

    export let id = 0;

    let node;
    let intersecting = false;
    let length = 5;
    let offset = 100;
    const maxLength = 710;
    let path = getPath({x:400,y:400}, 0, 30, 0, length/60*360, 60);

    function lineIntersection (m1, b1, m2, b2) {
    if (m1 === m2) {
        throw new Error("parallel slopes");
    }
    const x = (b2 - b1) / (m1 - m2);
    return {x: x, y: m1 * x + b1};
}

    function pStr (point) {
    return `${point.x},${point.y} `;
    }

    function getPath (center, startRadius, spacePerLoop, startTheta, endTheta, thetaStep) {
        // Rename spiral parameters for the formula r = a + bθ
        const a = startRadius;  // start distance from center
        const b = spacePerLoop / Math.PI / 2; // space between each loop

        let newTheta = startTheta * Math.PI / 180;
        let oldTheta = newTheta;
        // convert angles to radians
        endTheta = endTheta * Math.PI / 180;
        thetaStep = thetaStep * Math.PI / 180;

        // radii
        let oldR,
            newR = a + b * newTheta;

        // start and end points
        const oldPoint = {x: 0, y: 0};
        const newPoint = {
            x: center.x + newR * Math.cos(newTheta), 
            y: center.y + newR * Math.sin(newTheta)
        };

        // slopes of tangents
        let newSlope = (b * Math.sin(oldTheta) + (a + b * newTheta) * Math.cos(oldTheta)) /
                    (b * Math.cos(oldTheta) - (a + b * newTheta) * Math.sin(oldTheta));

        let oldSlope;

        let path = "M " + pStr(newPoint);
        
        while (oldTheta < endTheta - thetaStep) {
            oldTheta = newTheta;
            newTheta += thetaStep;

            oldR = newR;
            newR = a + b * newTheta;

            oldPoint.x = newPoint.x;
            oldPoint.y = newPoint.y;
            newPoint.x = center.x + newR * Math.cos(newTheta);
            newPoint.y = center.y + newR * Math.sin(newTheta);

            // Slope calculation with the formula:
            // (b * sinΘ + (a + bΘ) * cosΘ) / (b * cosΘ - (a + bΘ) * sinΘ)
            const aPlusBTheta = a + b * newTheta;

            oldSlope = newSlope;
            newSlope = (b * Math.sin(newTheta) + aPlusBTheta * Math.cos(newTheta)) /
                    (b * Math.cos(newTheta) - aPlusBTheta * Math.sin(newTheta));

            const oldIntercept = -(oldSlope * oldR * Math.cos(oldTheta) - oldR * Math.sin(oldTheta));
            const newIntercept = -(newSlope * newR* Math.cos(newTheta) - newR * Math.sin(newTheta));

            const controlPoint = lineIntersection(oldSlope, oldIntercept, newSlope, newIntercept);

            // Offset the control point by the center offset.
            controlPoint.x += center.x;
            controlPoint.y += center.y;

            path += "Q " + pStr(controlPoint) + pStr(newPoint);
        }
        
        return path;
    }

    const updatePath = () => {
        if (intersecting) {
            path = getPath({x:400,y:400}, 0, 30, 0, length/60*360 - 450, 60);
        }
    }

    const updateLength = () => {
        if (intersecting) {
            const windowHeight = window.innerHeight;
            const thisOffset = node.getBoundingClientRect().top;
            length = Math.min(windowHeight - thisOffset - offset, maxLength);
            updatePath();
        }
    }

    const handleEnter = () => {
        intersecting = true;
    }

    const handleExit = () => {
        intersecting = false;
    }
</script>

<div class="flex items-center justify-center bg-black">
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 800 800" bind:this={node} on:spiral-enter={handleEnter} on:spiral-exit={handleExit} use:intersectionEvent={{id: 'spiral', threshold: '0.4'}}>
        <path stroke-linecap="round" id="spiral-{id}" d={path} fill="none" stroke="white" stroke-width="10"/>
    </svg>
</div>

<svelte:window on:scroll={updateLength} />