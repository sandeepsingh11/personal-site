<script>
    export let projects;
</script>

<div class="pt-[200px] pb-24 bg-secondary-500" id="showcase">
    <div class="relative w-fit mx-auto">
        <span class="block absolute w-40 h-[3px] bg-accent-500 left-0 -bottom-3.5 rounded-full"></span>
        <h2 class="text-5xl text-white font-medium mb-16 text-center">Project showcase</h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 lg:mx-20">
        {#each projects as project}  
            <div class="bg-white text-black border border-black rounded shadow">
                <a href="{ project.url }">
                    <img src="/{ project.image }" alt="{ project.image } thumbnail" class="w-full object-center rounded-t ">
                </a>

                <div class="p-4">
                    <a href="{ project.url }">
                        <h4 class="text-2xl font-bold mb-2 tracking-light">{ project.name }</h4>
                    </a>

                    <p class="mb-3 leading-relaxed">{ project.desc }</p>
                    <a href="{ project.url }" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary-500 bg-transparent rounded border-2 border-primary-500 hover:bg-primary-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-primary-300">
                        Visit project
                        <i data-feather="arrow-right" stroke="currentColor" stroke-width="2" class="mx-auto"></i>
                        <!-- <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg> -->
                    </a>
                </div>
            </div>
        {/each}
    </div>
</div>