<script>
    import { Rocket } from "lucide-svelte";
    import { onMount } from "svelte";
    
    onMount(() => {
        // get url params
        const urlParams = new URLSearchParams(window.location.search);

        // display email success message
        const typeVal = urlParams.get('type');
        
        if (typeVal === 'contact_success') {
            const emailSuccessEle = document.getElementById('email_success');
            emailSuccessEle?.classList.add('bg-primary-500', 'text-white', 'mx-auto', 'mb-12', 'py-2', 'px-4', 'w-fit', 'rounded');
            emailSuccessEle.innerText = 'Email has been sent! I will get back to you shortly.';
        }
    });
</script>

<div class="py-16 bg-primary-900 text-white" id="contact">
    <div class="relative w-fit mx-auto">
        <span class="block absolute w-40 h-[3px] bg-accent-500 left-0 -bottom-3.5 rounded-full"></span>
        <h2 class="text-5xl font-medium mb-16 text-center">Contact</h2>
    </div>

    <div id="email_success"></div>

    <form action="https://api.staticforms.xyz/submit" method="post" class="grid grid-cols-1 md:grid-cols-2 gap-x-2 w-4/5 lg:w-1/2 mx-auto text-black">
        <div>
            <label for="name" class="block text-white">Name:</label>
            <input type="text" name="name" id="name" class="w-full mb-4 rounded shadow-sm focus:ring focus:ring-secondary-600 focus:ring-opacity-75 focus:border-transparent" required>
        </div>
        <div>
            <label for="email" class="block text-white">Email:</label>
            <input type="email" name="email" id="email" class="w-full mb-4 rounded shadow-sm focus:ring focus:ring-secondary-600 focus:ring-opacity-75 focus:border-transparent" required>
        </div>
        <div class="md:col-span-2">
            <label for="subject" class="block text-white">Subject:</label>
            <input type="text" name="subject" id="subject" class="w-full mb-4 rounded shadow-sm focus:ring focus:ring-secondary-600 focus:ring-opacity-75 focus:border-transparent" required>
        </div>
        <div class="md:col-span-2">
            <label for="message" class="block text-white">Message:</label>
            <textarea name="message" id="message" rows="4" class="w-full mb-4 rounded shadow-sm focus:ring focus:ring-secondary-600 focus:ring-opacity-75 focus:border-transparent" required></textarea>
        </div>

        <input type="text" name="honeypot" style="display: none;">

        <div>
            <button type="submit" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-accent-500 bg-transparent rounded border-2 border-accent-500 hover:bg-accent-500 hover:border-accent-500 hover:text-black focus:ring-2 focus:outline-none focus:ring-accent-300">Send! <Rocket size=16 /></button>
        </div>

        <input type="hidden" name="accessKey" value="a43f5860-82f2-47c2-8563-794d1983682e">
        <input type="hidden" name="replyTo" value="@">
        <input type="hidden" name="redirectTo" value="https://sandeepdev.com/?type=contact_success#contact">
    </form>
</div>