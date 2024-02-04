<script>
    import { onMount } from "svelte";
    import { intersectionEvent } from "./actions/intersectionEvent";
    import { fly, slide, blur } from "svelte/transition";

    let visible = false;
    let skillsVisible = false;

    const items = [
        ['❤️ United Way of King County (React, jQuery, Custom Wordpress Theme)', 'https://www.uwkc.org'],
        ['📍 Bartell Drugs Store Locator (jQuery, Google Maps)', 'https://www.bartelldrugs.com/store-locator'],
        ['🏦 Bank of Hawaii Hero and Navigation', 'https://boh.com'],
        ['📈 US Senate Stock Transaction Tracker (alpha, Next.js, Azure Cosmos DB, Python scraper)', 'https://www.stocksentinel.app'],
        ['🔨 Kinder Painting (Svelte)', 'https://www.kinderpainting.com'],
        ['🔍 Snohomish County Valley Search and Rescue (Custom Wordpress Theme)', 'https://scvsar.org/'],
        ['🛥️ Jacobsen\'s Marine (Custom Wordpress Theme)', 'https://www.jacobsensmarine.com/'],
        ['🫱🏽‍🫲🏾 UWKC Free Tax Site Locator (in season January - July, Custom Wordpress Theme, Leafbox, Bing Maps, vanilla JS)', 'https://www.uwkc.org/need-help/tax-help/'],
        ['🏋🏻 Gymbro weight lifting app (alpha, React Native)'],
    ]

    const handleEnter = () => {
        visible = true;
    }

    const handleSkillsEnter = () => {
        skillsVisible = true;
    }
</script>

<section class="flex flex-col lg:flex-row p-4 wrap gap-24" on:portfolio-enter={handleEnter} use:intersectionEvent={{id: 'portfolio', threshold: '.9'}}>
    {#if visible}
    <div class="text-8xl flex-1 text-right" transition:fly={{
        delay: 300,
        duration: 800,
        x: -100,
    }}
    >
        I love making things. I've worked on these (and many other) things.</div>
    <div on:portfolio-skills-enter={handleSkillsEnter} use:intersectionEvent={{id: 'portfolio-skills'}} class="flex-1 flex items-center">
        {#if skillsVisible}
        <ul class="text-lg space-y-4 text-right lg:text-left">
        {#each items as item, i}
            <li transition:fly|global={{
                delay: 300 + i * 100,
                duration: 400,
                y: '20vw'
            }}>
                {#if item[1]}
                <a target="_blank" class="text-red-300" href="{item[1] ?? '#'}">{item[0]}</a>
                {:else}
                {item[0]}
                {/if}
            </li>
        {/each}
        </ul>
        {/if}
    </div>
    {/if}
</section>

<section class="flex flex-col p-4 wrap gap-24">
    <div class="text-2xl text-center">
        Some cool things I've worked on I cannot share a link to. Privacy disclosures, private repos. Typical things. I can talk about some of them though! Feel free to ask me about:
    </div>

    <ul class="text-lg space-y-4 text-right lg:text-center">
        <li>A heavy cargo shipping order web app</li>
        <li>A money saver mobile phone app using plaid and solid, fintech</li>
        <li>A website for displaying and selling rare coins and jewelry</li>
        <li>An SEO auditing tool using Open AI! (not for skynet)</li>
    </ul>
</section>