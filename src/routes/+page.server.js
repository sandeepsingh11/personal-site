import benefits from "$lib/server/benefits.json";
import projects from "$lib/server/projects.json";
import experience from "$lib/server/exp.json";
import tech from "$lib/server/tech.json";
import socials from "$lib/server/socials.json";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        benefits,
        projects,
        experience,
        tech,
        socials
    }
}