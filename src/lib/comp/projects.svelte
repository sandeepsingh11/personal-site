<script>
    import { MoveUpRight } from "lucide-svelte";

    export let projects;
</script>

<section id="projects">
    <div id="projects-heading">
        <span class="bg-accent-500"></span>
        <h2>Project showcase</h2>
    </div>
    
    <div class="grid" id="projects-grid">
        {#each projects as project}  
            <div class="shadow" id="projects-grid-item">
                <!-- project img -->
                <img src="/{ project.image }" alt="{ project.image } thumbnail">

                <!-- project body -->
                <div id="projects-grid-item-body">
                    <h4>{ project.name }</h4>
                    <p>{ project.desc }</p>

                    <a href="{ project.url }" role="button">Visit project <MoveUpRight size=16 /></a>
                    <!-- <a href="{ project.url }" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary-500 bg-transparent rounded border-2 border-primary-500 hover:bg-primary-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-primary-300">
                        Visit project <MoveUpRight size=16 />
                        <i data-feather="arrow-right" stroke="currentColor" stroke-width="2" class="mx-auto"></i>
                    </a> -->
                </div>
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
    #projects {
        background-color: var(--secondary);
        padding-top: calc(4rem + 100px);
        padding-bottom: 4rem;
    }

    #projects-heading {
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
        }
    }

    #projects-grid {
        gap: 1rem;
    }

    #projects-grid-item {
        background-color: #F7F7FF;
        color: #22333b;
        border: 1px solid #22333b;
        border-radius: 0.25rem;

        img {
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
        }
    }

    #projects-grid-item-body {
        padding: 1rem;

        h4 {
            color: #22333b;
            margin-bottom: 0.25rem;
        }

        p {
            margin-bottom: 0.75rem;
            line-height: 1.625;
            color: inherit;
        }
    }
</style>