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

<!-- hero -->
<Hero />

<div class="bg-primary-500 text-secondary-500">
    <!-- about -->
    <About />

    <!-- website benefits -->
    <Benefits benefits={data.benefits} />

    <!-- project showcase -->
    <Projects projects={data.projects} />

    <!-- experience -->
    <Exp experience={data.experience} tech={data.tech} />

    <!-- contact -->
    <Contact />

    <!-- footer -->
    <Footer socials={data.socials} />
</div>