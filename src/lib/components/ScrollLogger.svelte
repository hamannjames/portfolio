<script>
    import { onDestroy, onMount } from "svelte";
    import { intersectionEvent } from "./actions/intersectionEvent";

    export let eventId = 'scroll-logger';
    export let ifIntersecting = false;
    export let fromBottom = true;
    const thisY = this.getBoundingClientRect().top;

    let intersecting;
    let offset;

    const logOffset = () => {
        const scrollPos = window.scrollY;
        offset = scrollPos - offset;
    }

    onMount(() => {
        this.addEventListener('scroll', logOffset);
    })

    onDestroy(() => {
        this.removeEventListener('scroll', logOffset);
    })
</script>

<div use:intersectionEvent={{id: eventId}} on:{`${eventId}-enter`}={() => {}}>
    Test
</div>