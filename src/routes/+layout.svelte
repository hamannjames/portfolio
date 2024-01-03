<script>
	import Header from './Header.svelte';
	import './styles.css';
    import '../app.css';
  import Footer from './Footer.svelte';
  import SpiralSvg from '$lib/components/SpiralSvg.svelte';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
</svelte:head>

<div class="app overflow-x-hidden">
	<Header />

	<main>
		<slot />
	</main>

	<SpiralSvg id={20} />

	<Footer />
</div>