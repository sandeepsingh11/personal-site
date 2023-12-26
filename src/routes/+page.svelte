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

<div class="relative bg-gradient-to-b from-black to-primary-900 text-white">
    <!-- hero -->
    <Hero />
    
    <!-- about -->
    <About />

    <!-- section transition -->
    <div class="absolute -bottom-[100px] left-0 w-full h-[100px] bg-no-repeat">
        <img src="/bottom-semi-circle.png" alt="bottom semi circle" class="w-full h-full">
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