<script>
    import About from "$lib/comp/about.svelte";
    import Benefits from "$lib/comp/benefits.svelte";
    import Contact from "$lib/comp/contact.svelte";
    import Exp from "$lib/comp/exp.svelte";
    import Footer from "$lib/comp/footer.svelte";
    import Hero from "$lib/comp/hero.svelte";
    import Projects from "$lib/comp/projects.svelte";

    export let data;
</script>

<div class="bg-gradient-to-b from-black to-primary-900" id="hero-container">
    <!-- hero -->
    <Hero />
    
    <!-- about -->
    <About />

    <!-- section transition -->
    <div id="transition-1">
        <img src="/bottom-semi-circle.png" alt="bottom semi circle">
    </div>
</div>

<!-- project showcase -->
<Projects projects={data.projects} />

<!-- website benefits -->
<Benefits benefits={data.benefits} />

<!-- experience -->
<Exp experience={data.experience} tech={data.tech} />

<!-- contact -->
<Contact />

<!-- footer -->
<Footer socials={data.socials} />

<style lang="scss">
    #hero-container {
        position: relative;
        background: rgb(34,51,59);
        background: linear-gradient(180deg, rgba(34,51,59,1) 0%, rgba(14,56,84,1) 100%);
    }

    #transition-1 {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-repeat: no-repeat;

        img {
            width: 100%;
            border-radius: 0;
        }
    }
</style>