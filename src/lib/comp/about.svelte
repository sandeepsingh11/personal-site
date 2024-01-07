<section class="container" id="about">
    <div class="grid">
        <div class="w-[333px] max-w-[227px] md:max-w-[100%]">
            <img src="/sandeep_portrait_min.jpg" alt="portrait of Sandeep" id="portrait-img">
        </div>
        <div>
            <p class="leading-loose mb-4">Need a website but don't know who to go to? Have an existing site but want an overhaul? Message me to get started!<br><br>I believe the simple things in life are the most valuable. The same goes for websites. Simple technology and a clean design will have the strongest impression towards your visitors. I take this approach as it saves development time, reduces hosting costs, outputs a lighter website, and dramatically speeds up page load time. Work with me to make the internet great again!</p>

            <!-- <a href="#contact" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-transparent hover:bg-accent-500 text-accent-500 hover:text-black rounded border-2 border-accent-500 focus:ring-2 focus:outline-none focus:ring-accent-300">Get started!</a> -->
            <a href="#contact" role="button" class="outline">Get started!</a>
        </div>
    </div>
</section>

<style lang="scss">
    #about {
        padding: 4rem var(--spacing);

        div div:nth-child(1) {
            width: 227px;
            margin: 0 auto 2rem auto;

            @media screen and (min-width: 768px) {
                width: 333px;
            }

            #portrait-img {
                border-radius: 3px;
            }
        }

        div div:nth-child(2) {
            line-height: 1.75;
        }
    }
    
</style>