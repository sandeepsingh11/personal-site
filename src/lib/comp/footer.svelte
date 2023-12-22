<script>
    import { onMount } from 'svelte';

    export let socials;

    onMount(() => {
        // copyright year
        document.getElementById('year').innerText = String(new Date().getFullYear());
    })
</script>

<footer class="bg-black text-white flex justify-between px-4 md:px-8 py-2">
    <div>
        <p>&copy <span id="year"></span> Coded by <a href="https://github.com/sandeepsingh11/" target="_blank" rel="noopener noreferrer">Sandeep</a></p>
    </div>

    <div class="grid grid-cols-3 gap-4">
        {#each socials as social}
            <a href="{ social.url }" target="_blank" rel="noopener noreferrer"><img src="/icons/{social.icon}.svg" alt="{social.icon}"></a>
        {/each}
    </div>
</footer>