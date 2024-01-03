<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
    import TextOverBackgrounds from '$lib/components/TextOverBackgrounds.svelte';
    import SpiralSvg from '$lib/components/SpiralSvg.svelte';
    import { intersectionEvent } from '$lib/components/actions/intersectionEvent';
    import Portfolio from '$lib/components/Portfolio.svelte';
    import Skills from './Skills.svelte';
    import { fade, fly, slide } from 'svelte/transition';
    import RevealContainer from '$lib/components/RevealContainer.svelte';
    import Games from './Games.svelte';
    const bgGlob = import.meta.glob('$lib/images/backgrounds/*', {eager: true});
</script>

<svelte:head>
	<title>James Hamann</title>
	<meta name="description" content="James Hamann's web developer portfolio" />
</svelte:head>

<div class="bg-black flex flex-col gap-y-12">
    <section>
        <div class="flex bg-black width-vw flex-1 h-screen justify-end items-end">
            <TextOverBackgrounds text='James Hamann' backgrounds={Object.keys(bgGlob)}/>
        </div>
        <RevealContainer theTransition={fly} className="text-center mt-8">
            <h2 transition:fly={{y: '20vh'}} class="text-4xl">Developer. Designer. Friend.</h2>
        </RevealContainer>
    </section>

    <SpiralSvg id={0} />
    
    <Portfolio />

    <SpiralSvg id={1} />

    <Skills />

    <SpiralSvg id={2} />

    <Games />
</div>

