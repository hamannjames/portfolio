<script>
    import RevealContainer from "$lib/components/RevealContainer.svelte";
    import { intersectionEvent } from "$lib/components/actions/intersectionEvent";
    import { fly } from "svelte/transition";



</script>

<footer class="bg-black p-4">
    <RevealContainer>
        <div transition:fly={{y: '20vh'}} class="text-center space-y-8">
            <p class="text-5xl">I'd love to help you with a project!</p>
            <p class="text-xl">Please reach out. Lets grab a coffee, make a plan, and build cool stuff.</p>
            <p class="text-xl">Email me at <a class="text-red-300" href="mailto:hamannjames87@gmail.com">hamannjames87@gmail.com</a>.</p>
            <p class="text-xl">Call me (and probably leave a message) at <a class="text-red-300" href="tel:2064967825">206-496-7825</a>.</p>
        </div>
    </RevealContainer>
</footer>

<style>
    footer {
        min-height: 24rem;
    }
</style>