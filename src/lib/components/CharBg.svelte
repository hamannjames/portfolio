<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

    export let initial = '';
    export let available = [];
    export let char = '';
    export let seconds = 0;

    let show = false;

    onMount(() => {
        setTimeout(() => show = true, seconds * 100)
        setInterval(() => {
            initial = available[Math.floor(Math.random() * (available.length - 1))]
        }, 5000 + seconds * 100)
    })
</script>

<div class="inline-block relative" role="presentation">
    {#if show}
        <div transition:fade={{duration: 1000}} class="image absolute top-0 left-0 z-0 w-full h-full" style="background-image: url('{initial}')"></div>
    {/if}
    <div class="bg-black relative mix-blend-darken">{char}</div>
</div>

<style>
    div {
        background-size: cover;
    }

    .image {
        transition: background-image ease 3s
    }
</style>