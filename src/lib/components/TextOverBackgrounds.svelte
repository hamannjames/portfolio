<script>
    import CharBg from "./CharBg.svelte";
    export let text = '';
    export let backgrounds = [];

    const textArray = text.split(' ');
    let availableBgs = [...backgrounds];
    
    const getRandomBackground = () => {
        const index = Math.floor(Math.random() * (availableBgs.length));
        const path = availableBgs[index]
        availableBgs = [...availableBgs.slice(0, index), ...availableBgs.slice(index + 1)];
        if (availableBgs.length === 0) {
            availableBgs = [...backgrounds];
        }
        return path;
    }
</script>

<div class="text uppercase bg-black relative">
    {#each textArray as word }
        <div class="block">
        {#each word as char }
            {#if char.match(/[a-z]/i)}
                <CharBg initial={getRandomBackground()} available={backgrounds} char={char} />
            {:else}
                {char}
            {/if}
        {/each}
        </div>
    {/each}
</div>

<style>
    .text {
        font-size: clamp(4rem, 24vw + 1rem, 100rem);
        margin-bottom: clamp(0px, 45vh - 30vw, 45vh);
        color: #fff;
        text-align: right;
        line-height: 1;
        font-family: "Anton", sans-serif;
    }
</style>