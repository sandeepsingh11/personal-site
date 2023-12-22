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

<div class="bg-gradient-to-b from-black to-primary-900 text-white">
    <!-- hero -->
    <Hero />
    
    <!-- about -->
    <About />
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