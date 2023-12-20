<script>
    export let benefits;
</script>

<div class="py-16" id="benefits">
    <div class="relative w-fit mx-auto">
        <span class="block absolute w-40 h-[3px] bg-accent-500 left-0 -bottom-3.5 rounded-full"></span>
        <h2 class="text-5xl text-secondary-500 font-medium mb-16 text-center">Website benefits</h2>
    </div>

    <ul class="grid grid-cols-2 md:grid-cols-3 justify-items-center leading-relaxed">
        {#each benefits as benefit}
            <li class="text-center mb-12 p-2 w-4/5">
                <img src="/icons/{benefit.icon}.svg" alt="{benefit.icon}" class="w-[100px] h-[100px] mx-auto mb-1">
                <h4 class="mb-3 text-xl md:text-2xl font-medium">{ benefit.title }</h4>
                <p>{ benefit.desc }</p>
            </li>
        {/each}
    </ul>
</div>