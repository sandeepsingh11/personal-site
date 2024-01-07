<script>
    import { Feather, Smartphone, Zap, Pen, Code, Wrench } from "lucide-svelte";

    /** @type {import('$lib/server/benefits.json')} */
    export let benefits;
</script>

<section id="benefits">
    <div id="benefits-heading">
        <span></span>
        <h2>Your website could be</h2>
    </div>

    <ul class="grid leading-relaxed" id="benefits-grid">
        {#each benefits as benefit}
            <li class="bg-primary-600 w-4/5 mb-12 py-4 px-2 border-2 border-black rounded text-center text-white">
                {#if benefit.icon === 'feather'}
                    <Feather size=100 strokeWidth=1 style="margin-bottom: 0.25rem" />
                {:else if benefit.icon === 'smartphone'}
                    <Smartphone size=100 strokeWidth=1 style="margin-bottom: 0.25rem" />
                {:else if benefit.icon === 'zap'}
                    <Zap size=100 strokeWidth=1 style="margin-bottom: 0.25rem" />
                {:else if benefit.icon === 'pen'}
                    <Pen size=100 strokeWidth=1 style="margin-bottom: 0.25rem" />
                {:else if benefit.icon === 'code'}
                    <Code size=100 strokeWidth=1 style="margin-bottom: 0.25rem" />
                {:else if benefit.icon === 'wrench'}
                    <Wrench size=100 strokeWidth=1 style="margin-bottom: 0.25rem" />
                {/if}
                <hgroup>
                    <h4 class="mb-3 text-xl md:text-2xl font-medium">{ benefit.title }</h4>
                    <p>{ benefit.desc }</p>
                </hgroup>
            </li>
        {/each}
    </ul>
</section>

<style lang="scss">
    #benefits {
        background-color: #F7F7FF;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    #benefits-heading {
        position: relative;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;

        span {
            display: block;
            position: absolute;
            bottom: -0.875rem;
            left: 0;
            width: 10rem;
            height: 3px;
            border-radius: 9999px;
        }

        h2 {
            text-align: center;
            color: #22333b;
        }
    }

    #benefits-grid {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 1rem;
        padding: 0 1rem;
        color: #22333b;
        text-align: center;

        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            width: 80%;
            margin-left: auto;
            margin-right: auto;
            padding: 0;
        }

        li {
            list-style: none;
    
            h4 {
                color: inherit;
            }
        }
    }
</style>