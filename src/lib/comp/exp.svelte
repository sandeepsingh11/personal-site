<script>
    import { Code, FileText } from "lucide-svelte";

    export let experience;
    export let tech;
</script>

<section class="bg-primary-800" id="exp">
    <div id="exp-heading">
        <span class="bg-accent-500"></span>
        <h2>Experience</h2>
    </div>

    <div id="exp-container">
        <!-- timeline -->
        <div id="timeline">
            <!-- timeline line -->
            <div id="timeline-line"></div>

            <div id="timeline-container">
                <!-- exp entry -->
                {#each experience as exp}    
                    <div>
                        <hgroup>
                            <h3>{ exp.title }</h3>
                            <p class="mb-2 text-sm">{ exp.date_range }</p>
                        </hgroup>
                        <ul>
                            {#each exp.desc as desc}
                                <li>{ desc }</li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </div>

        <!-- tech and resumes -->
        <div id="tech-resume">
            <!-- tech used -->
            <div id="tech-container">
                <h3 class="mb-8">Tech used</h3>
                {#each tech as tech}    
                    <hgroup>
                        <h4 class="text-3xl mb-1">{ tech.name }</h4>
                        <p>{ tech.desc }</p>
                    </hgroup>
                {/each}
            </div>

            <!-- resumes -->
            <div id="resume-container" class="grid">
                <!-- <a href="/files/Sandeep-Singh-Tech-Resume.pdf" class="block md:inline-block px-3 py-2 text-sm font-medium text-center text-accent-500 bg-transparent rounded border-2 border-accent-500 hover:bg-accent-500 hover:text-black focus:ring-2 focus:outline-none focus:ring-secondary-300 mb-4">Tech resume</a> -->
                <a href="/files/Sandeep-Singh-Tech-Resume.pdf" role="button" class="outline">Tech resume <Code size=16 /></a>

                <!-- <a href="/files/Sandeep-Singh-Resume.pdf" class="block md:inline-block px-3 py-2 text-sm font-medium text-center text-accent-500 bg-transparent rounded border-2 border-accent-500 hover:bg-accent-500 hover:text-black focus:ring-2 focus:outline-none focus:ring-secondary-300">General resume</a> -->
                <a href="/files/Sandeep-Singh-Resume.pdf" role="button" class="outline">General resume <FileText size=16 /></a>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    #exp {
        background-color: var(--secondary);
        padding: 4rem 1rem;

        @media screen and (min-width: 768px) {
            padding: 4rem 0;
        }
    }

    #exp-heading {
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

    #exp-container {
        display: flex;
        flex-wrap: wrap;

        #timeline {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 4rem;
    
            @media screen and (min-width: 1440px) {
                margin-right: 3rem;
                margin-bottom: 0;
            }
    
            #timeline-line {
                position: absolute;
                top: 0;
                left: 0;
                width: 5px;
                height: 100%;
                background-color: #F7F7FF;
                margin-left: 10px;
                border-radius: 0.25rem;
            }

            #timeline-container {
                margin-left: 10px;

                div {
                    position: relative;
                    margin-left: 32px;
                    margin-right: 2.5rem;
                    margin-bottom: 2rem;
                    padding: 1rem;
                    border: 2px solid #F7F7FF;
                    border-radius: 0.25rem;

                    ::before {
                        position: absolute;
                        top: 50%;
                        left: -32px;
                        width: 32px;
                        height: 5px;
                        background-color: #F7F7FF;
                    }

                    ul {
                        margin-bottom: 0;

                        li::before {
                            margin-right: 3px;
                            content: '';
                        }
                    }
                }
            }
        }

        #tech-resume {
            margin-left: auto;
            margin-right: auto;

            @media screen and (min-width: 1440px) {
                margin-left: 3rem;
            }

            #tech-container {
                margin-bottom: 1rem;

                h3 {
                    text-align: center;
                }

                hgroup {
                    margin-left: auto;
                    margin-right: auto;
                    margin-bottom: 1rem;
                }
            }

            #resume-container {
                a {
                    width: 100%;
                    margin-bottom: 1rem;
                }
            }
        }
    }
</style>