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
            (emailSuccessEle) ? emailSuccessEle.innerText = 'Email has been sent! I will get back to you shortly.' : '';
        }
    });
</script>

<section id="contact">
    <div id="contact-heading">
        <span class="bg-accent-500"></span>
        <h2>Contact</h2>
    </div>

    <div id="email_success"></div>

    <form action="https://api.staticforms.xyz/submit" method="post" class="container">
        <div class="grid">
            <div>
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" class="focus:ring-secondary-600 focus:ring-opacity-75 focus:border-transparent" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" class="focus:ring-secondary-600 focus:ring-opacity-75 focus:border-transparent" required>
            </div>
        </div>

        <div>
            <label for="subject">Subject:</label>
            <input type="text" name="subject" id="subject" class="focus:ring-secondary-600 focus:ring-opacity-75 focus:border-transparent" required>
        </div>

        <div>
            <label for="message">Message:</label>
            <textarea name="message" id="message" rows="4" class="focus:ring-secondary-600 focus:ring-opacity-75 focus:border-transparent" required></textarea>
        </div>

        <input type="text" name="honeypot" style="display: none;">

        
        <button type="submit" class="outline inline-flex items-center px-3 py-2 text-sm font-medium text-center text-accent-500 bg-transparent rounded border-2 border-accent-500 hover:bg-accent-500 hover:border-accent-500 hover:text-black focus:ring-2 focus:outline-none focus:ring-accent-300">Send! <Rocket size=16 /></button>
        

        <input type="hidden" name="accessKey" value="a43f5860-82f2-47c2-8563-794d1983682e">
        <input type="hidden" name="replyTo" value="@">
        <input type="hidden" name="redirectTo" value="https://sandeepdev.com/?type=contact_success#contact">
    </form>
</section>

<style lang="scss">
    #contact {
        background-color: #0e3854;
        
        #contact-heading {
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

        form {
            [type="submit"] {
                width: auto;
            }
        }
    }
</style>