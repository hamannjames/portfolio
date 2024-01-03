<script>
    import { fade } from "svelte/transition";
    import RevealContainer from "./RevealContainer.svelte";

    export let theTransition = fade;
    export let options = {};
    export let items = [];
    export let containerClass = '';
    export let listClass = '';
    export let itemClass = '';
    export let spacing = 100;
    export let id = 0;
</script>

<RevealContainer {id} className="{containerClass}">
    <ul class="{listClass}">
    {#each items as item, i}
        <li
            class="{itemClass}"
            transition:theTransition|global={{delay: i * spacing, ...options}}
        >
            <slot {item} />
        </li>
    {/each}
    </ul>
</RevealContainer>