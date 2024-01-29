<script>
	import Header from './Header.svelte';
	import './styles.css';
    import '../app.css';
  	import Footer from './Footer.svelte';
  	import SpiralSvg from '$lib/components/SpiralSvg.svelte';
	import { MetaTags } from 'svelte-meta-tags';
    import { page } from '$app/stores';

	export let data;

	$: metaTags = {
        titleTemplate: '%s - James Hamann, Developer',
        description: 'Developer, designer, friend. Want to build a cool app? Hit me up, let\'s build it.',
        canonical: `${$page.url.href}`,
        ...$page.data.metaTagsChild,
        openGraph: {
            url: `${$page.url.href}`,
            locale: 'en-US',
            siteName: 'James Hamann, Developer',
            images: [{url: 'https://jameshamann.me/og_image.jpg', width: 600, height: 397, alt: 'Kinder Painting'}],
            ...$page.data.metaTagsChild.openGraph
        }
    }
</script>

<MetaTags {...metaTags} />

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-KC1C1F9DDL"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-KC1C1F9DDL');
	</script>
</svelte:head>

<div class="app overflow-x-hidden">
	<Header />

	<main>
		<slot />
	</main>

	<SpiralSvg id={20} />

	<Footer />
</div>