<script>
    import { Mail, Github, Linkedin } from "lucide-svelte";

    /** @type {import('$lib/server/socials.json')} */
    export let socials;

    export const year = new Date().getFullYear();
</script>

<footer>
    <div>
        <span>&copy { (year) ? year : '2024' } Coded by <a href="https://github.com/sandeepsingh11/" target="_blank" rel="noopener noreferrer">Sandeep</a></span>
    </div>

    <div class="">
        {#each socials as social}
            <a href="{ social.url }" target="_blank" rel="noopener noreferrer">
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

<style lang="scss">
    footer {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 1rem;

        @media screen and (min-width: 768px) {
            padding: 0.5rem 2rem;
        }
    }
</style>