<script>
    import { Feather, Smartphone, Zap, Pen, Code, Wrench } from "lucide-svelte";

    /** @type {import('$lib/server/benefits.json')} */
    export let benefits;
</script>

<div class="py-16 bg-white" id="benefits">
    <div class="relative w-fit mx-auto">
        <span class="block absolute w-40 h-[3px] bg-accent-500 left-0 -bottom-3.5 rounded-full"></span>
        <h2 class="text-5xl text-black font-medium mb-16 text-center">Your website could be</h2>
    </div>

    <ul class="grid grid-cols-1 md:grid-cols-3 justify-items-center leading-relaxed">
        {#each benefits as benefit}
            <li class="bg-primary-600 w-4/5 mb-12 py-4 px-2 border-2 border-black rounded text-center text-white">
                {#if benefit.icon === 'feather'}
                    <Feather size=100 strokeWidth=1 class="mx-auto mb-1" />
                {:else if benefit.icon === 'smartphone'}
                    <Smartphone size=100 strokeWidth=1 class="mx-auto mb-1" />
                {:else if benefit.icon === 'zap'}
                    <Zap size=100 strokeWidth=1 class="mx-auto mb-1" />
                {:else if benefit.icon === 'pen'}
                    <Pen size=100 strokeWidth=1 class="mx-auto mb-1" />
                {:else if benefit.icon === 'code'}
                    <Code size=100 strokeWidth=1 class="mx-auto mb-1" />
                {:else if benefit.icon === 'wrench'}
                    <Wrench size=100 strokeWidth=1 class="mx-auto mb-1" />
                {/if}
                <h4 class="mb-3 text-xl md:text-2xl font-medium">{ benefit.title }</h4>
                <p>{ benefit.desc }</p>
            </li>
        {/each}
    </ul>
</div>