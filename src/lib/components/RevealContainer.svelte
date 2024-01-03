<script>
    import { fade } from "svelte/transition";
    import { intersectionEvent } from "./actions/intersectionEvent";
    import { onMount } from "svelte";

    export let id = 0;
    export let className = '';
    export let containerClass = '';
    export let theTransition = fade;
    export let options = {};

    let node;
    let show = false;

    onMount(() => {
        const handleShow = () => show = true;
        node.addEventListener(`${id}-enter`, handleShow);

        return () => {
            node.removeEventListener(`${id}-enter`, handleShow);
        }
    })
</script>

<div 
    class="{className}"
    use:intersectionEvent={{id: id.toString()}}
    bind:this={node}
>
{#if show}
<slot />
{/if}
</div>