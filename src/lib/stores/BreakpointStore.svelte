<script>
    import { browser } from '$app/environment';
    import { readable } from 'svelte/store';

    let breakpoints;

    if (browser) {
        breakpoints = {

        }
    }

    export const breakpoint = readable(null, function start(set) {
        if (browser) {
            
        }
    })
</script>