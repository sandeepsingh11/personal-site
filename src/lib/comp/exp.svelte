<script>
    export let experience;
    export let tech;
</script>

<div class="py-16 bg-primary-800 text-white" id="experience">
    <div class="relative w-fit mx-auto">
        <span class="block absolute w-40 h-[3px] bg-accent-500 left-0 -bottom-3.5 rounded-full"></span>
        <h2 class="text-5xl font-medium mb-16 lg:mb-20 text-center">Experience</h2>
    </div>

    <div class="flex flex-wrap">
        <!-- timeline -->
        <div class="relative mx-auto xl:mr-12 mb-16">
            <!-- timeline line -->
            <div class="absolute top-0 left-0 w-[5px] h-full bg-white ml-[10px] rounded"></div>

            <div class="ml-[10px]">
                <!-- exp entry -->
                {#each experience as exp}    
                    <div class="ml-[32px] mb-8 mr-6 p-2 border-2 border-white rounded relative before:absolute before:top-[50%] before:left-[-32px] before:w-[32px] before:h-[5px] before:bg-white">
                        <h3 class="text-4xl">{ exp.title }</h3>
                        <p class="mb-2 text-sm">{ exp.date_range }</p>
                        <ul>
                            {#each exp.desc as desc}
                                <li class="before:content-['-'] before:mr-[3px]">{ desc }</li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </div>

        <!-- tech and resumes -->
        <div class="mx-auto xl:ml-12">
            <!-- tech used -->
            <div class="mb-4">
                <h3 class="text-4xl text-center mb-8">Tech used</h3>
                {#each tech as tech}    
                    <div class="w-4/5 md:w-full mx-auto mb-4">
                        <h4 class="text-3xl mb-1">{ tech.name }</h4>
                        <p>{ tech.desc }</p>
                    </div>
                {/each}
            </div>

            <!-- resumes -->
            <div class="w-4/5 md:w-full mx-auto">
                <a href="/files/Sandeep-Singh-Tech-Resume.pdf" class="block md:inline-block px-3 py-2 text-sm font-medium text-center text-accent-500 bg-transparent rounded border-2 border-accent-500 hover:bg-accent-500 hover:text-black focus:ring-2 focus:outline-none focus:ring-secondary-300 mb-4">Tech resume</a>

                <a href="/files/Sandeep-Singh-Resume.pdf" class="block md:inline-block px-3 py-2 text-sm font-medium text-center text-accent-500 bg-transparent rounded border-2 border-accent-500 hover:bg-accent-500 hover:text-black focus:ring-2 focus:outline-none focus:ring-secondary-300">General resume</a>
            </div>
        </div>
    </div>
</div>