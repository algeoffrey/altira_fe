<script>
    export let title = "I would like to stay informed";
    export let description = "Receive investor’s digest on programs, events, deal trends in your inbox (We only send out relevant information occasionally. We don’t like spam either.)";
    export let placeholder = "you@example.com";
    export let buttonText = "Let’s Connect!";
    let email = "";

    function handleSubmit() {
        console.log(`Email submitted: ${email}`);

        fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you for subscribing!');
            } else {
                alert('There was an issue with your subscription. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an issue with your subscription. Please try again.');
        });
    }
</script>

<section class="bg-gray-100 py-16 px-4">
    <div class="max-w-8xl mx-32 text-left">
        <h2 class="text-customBlack text-[1.875rem] font-[800] mb-6">{title}</h2>
        <p class="max-w-2xl text-customBlack text-[1.125rem] font-[400] mb-8">{description}</p>
        <form on:submit|preventDefault={handleSubmit} class="flex flex-col md:flex-row items-center justify-start space-y-4 md:space-y-0 md:space-x-4">
            <div class="flex items-center border rounded-lg overflow-hidden w-full md:w-auto border border-gray">
                <div class="p-4 bg-white">
                    <img src="/images/mail.png" alt="Mail Icon" class="h-6 w-6" />
                </div>
                <input 
                    type="email" 
                    placeholder={placeholder} 
                    bind:value={email} 
                    required 
                    class="w-full h-[3.5rem] md:w-[30rem] focus:outline-none border-0 text-left placeholder-gray-400" 
                />
            </div>
            <button type="submit" class="w-full md:w-auto bg-white text-customBlack px-6 py-4 rounded-lg shadow hover:bg-customBlack hover:text-white transition-colors font-semibold">
                {buttonText}
            </button>
        </form>
    </div>
</section>

<style>
    input::-webkit-input-placeholder {
        text-align: left;
        color: #9CA3AF; 
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        form {
            flex-direction: column;
            align-items: stretch;
        }

        input {
            width: 100%;
        }

        button {
            width: 100%;
        }
    }

    @media (min-width: 768px) {
        input {
            width: 30rem; /* Fixed width for larger screens */
        }

        button {
            width: auto; /* Adjust button width accordingly */
        }
    }
</style>
