<script>
    export let initial = '';
    export let available = [];
    export let char = '';

    let show = '';

    const getRandomBackground = () => {
        let path = available[Math.floor(Math.random() * available.length)];

        while (path === show) {
            path = available[Math.floor(Math.random() * available.length)];
        }

        show = available[Math.floor(Math.random() * available.length)];
    }

    show = initial || getRandomBackground();
</script>


<div class="inline-block relative" on:mouseenter={getRandomBackground} role="presentation">
    <div class="absolute top-0 left-0 z-0 w-full h-full background-center" style="background-image: url('{show}')"></div>
    <div class="bg-black relative mix-blend-darken">{char}</div>
</div>

<style>
    div {
        background-size: auto 100%;
    }
</style>