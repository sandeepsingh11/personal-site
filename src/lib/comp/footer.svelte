<script>
    import { Mail, Github, Linkedin } from "lucide-svelte";

    /** @type {import('$lib/server/socials.json')} */
    export let socials;

    export const year = new Date().getFullYear();
</script>

<footer class="bg-black text-white flex justify-between px-4 md:px-8 py-2">
    <div>
        <p>&copy { (year) ? year : '2024' } Coded by <a href="https://github.com/sandeepsingh11/" target="_blank" rel="noopener noreferrer">Sandeep</a></p>
    </div>

    <div class="grid grid-cols-3 gap-4">
        {#each socials as social}
            <a href="{ social.url }" target="_blank" rel="noopener noreferrer">
                <!-- <img src="/icons/{social.icon}.svg" alt="{social.icon}"> -->
                {#if social.icon === 'mail'}
                    <Mail />
                {:else if social.icon === 'github'}
                    <Github />
                {:else if social.icon === 'linkedin'}
                    <Linkedin />
                {/if}
            </a>
        {/each}
    </div>
</footer>