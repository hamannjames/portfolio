<script>
    import RevealingList from "$lib/components/RevealingList.svelte";
    import Laravel from "$lib/icons/Laravel.svelte";
    import { fly } from "svelte/transition";
    import wordpress from "$lib/icons/wordpress.webp";
    import wordpressp from "$lib/icons/wordpress.png";
    import mongodb from "$lib/icons/mongodb.webp";
    import mongodbp from "$lib/icons/mongodb.png";
    import nodejs from "$lib/icons/nodejs.webp";
    import nodejsp from "$lib/icons/nodejs.png";
    import laravel from "$lib/icons/laravel.webp";
    import laravelp from "$lib/icons/laravel.png";
    import react from "$lib/icons/react.webp";
    import reactp from "$lib/icons/react.png";
    import reactNative from "$lib/icons/react_native.webp";
    import reactNativep from "$lib/icons/react_native.png";
    import mySql from "$lib/icons/mysql.webp";
    import mySqlp from "$lib/icons/mysql.png";
    import vue from "$lib/icons/vue.webp";
    import vuep from "$lib/icons/vue.png";
    import xcode from "$lib/icons/xcode.webp";
    import xcodep from "$lib/icons/xcode.png";
    import dotnet from "$lib/icons/dot_net.webp";
    import dotnetp from "$lib/icons/dot_net.png";
    import php from "$lib/icons/php.webp";
    import phpp from "$lib/icons/php.png";
    import javascript from "$lib/icons/javascript.webp";
    import javascriptp from "$lib/icons/javascript.png";
    import java from "$lib/icons/java.webp";
    import javap from "$lib/icons/java.png";
    import html from "$lib/icons/html.webp";
    import htmlp from "$lib/icons/html.png";
    import css from "$lib/icons/css.webp";
    import cssp from "$lib/icons/css.png";
    import csharp from "$lib/icons/csharp.webp";
    import csharpp from "$lib/icons/csharp.png";
    import python from "$lib/icons/python.webp";
    import pythonp from "$lib/icons/python.png";
</script>

<section class="p-4">
    <div class="text-5xl text-right">To make things, you need the right tools, and you need to know the right language. I dig these tools. I know these languages.</div>
    <div class="flex wrap justify-center gap-12 mt-8">
        <RevealingList
            id={10}
            items={[
                ['Laravel', laravel, laravelp],
                ['React', react, reactp],
                ['React Native', reactNative, reactNativep],
                ['Vue', vue, vuep],
                ['NodeJS', nodejs, nodejsp],
                ['Wordpress', wordpress, wordpressp],
                ['MySql', mySql, mySqlp],
                ['Mongo', mongodb, mongodbp],
                ['Xcode', xcode, xcodep],
                ['.NET', dotnet, dotnetp]
            ]}
            let:item
            theTransition={fly}
            options={{y: '20vw', duration: 400}}
            spacing={100}
            itemClass="text-lg flex items-center gap-4"
        >
            <figure class="inline-block w-6">
                <picture>
                    <source srcset="{item[1]}" />
                    <img src="{item[2]}" alt="icon" />
                </picture>
            </figure>
            {item[0]}
        </RevealingList>
        <RevealingList
            id={20}
            let:item
            theTransition={fly}
            options={{y: '20vw', duration: 400}}
            spacing={100}
            itemClass="text-lg flex items-center gap-4"
            items={[
                ['Javascript', javascript, javascriptp],
                ['PHP', php, phpp],
                ['Python', python, pythonp],
                ['C#', csharp, csharpp],
                ['Java', java, javap],
                ['HTML', html, htmlp],
                ['CSS', css, cssp]
            ]}
        >
            <figure class="inline-block w-6">
                <picture>
                    <source srcset="{item[1]}" />
                    <img src="{item[2]}" alt="icon" />
                </picture>
            </figure>
            {item[0]}
        </RevealingList>
    </div>
</section>