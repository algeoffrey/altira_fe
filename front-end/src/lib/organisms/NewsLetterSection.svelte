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
    <div class="max-w-4xl mx-auto px-6 text-left">
        <!-- Title -->
        <h2 class="text-black text-2xl md:text-3xl font-extrabold mb-6">
            {title}
        </h2>
        
        <!-- Description -->
        <p class="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
            {description}
        </p>

        <!-- Form -->
        <form 
            on:submit|preventDefault={handleSubmit} 
            class="flex flex-col md:flex-row items-stretch md:items-center gap-4"
        >
            <!-- Input Container -->
            <div class="flex items-center border rounded-lg overflow-hidden w-full md:w-auto border-gray-300 bg-white">
                <div class="p-3">
                    <img src="/images/mail.png" alt="Mail Icon" class="h-5 w-5" />
                </div>
                <input 
                    type="email" 
                    placeholder={placeholder} 
                    bind:value={email} 
                    required 
                    class="w-full h-12 md:h-14 focus:outline-none border-0 text-gray-600 placeholder-gray-400 px-3"
                />
            </div>

            <!-- Button -->
            <button 
                type="submit" 
                class=" w-full md:w-auto text-left md:text-center bg-customBlack text-white px-6 py-4 rounded-lg shadow hover:bg-gray-800 transition font-semibold"
            >
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
