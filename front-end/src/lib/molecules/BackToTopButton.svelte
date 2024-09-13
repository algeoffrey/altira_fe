<script>
    import { onMount, onDestroy } from 'svelte';

    let isVisible = false;
    let footerInView = false; // Track if the footer is in view

    // Scroll to the top of the page smoothly when the button is clicked
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Scroll handling logic (only runs on client side)
    function handleScroll() {
        if (window.scrollY > 0 && !footerInView) {
            isVisible = true;
        } else {
            isVisible = false;
        }
    }

    // Use the IntersectionObserver to detect when the footer is visible
    function observeFooter() {
        const footer = document.querySelector('footer');
        if (footer) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        footerInView = entry.isIntersecting; // Check if the footer is intersecting
                        handleScroll(); // Call the scroll handler to adjust the button visibility
                    });
                },
                { threshold: 0.1 } // Trigger when 10% of the footer is visible
            );
            observer.observe(footer);
        }
    }

    // Set up scroll event listener and observe footer
    onMount(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            observeFooter(); // Start observing the footer
        }
    });

    // Cleanup the scroll event listener on destroy
    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', handleScroll);
        }
    });
</script>

<!-- Render the Back to Top button when it is visible -->
<button
    on:click={scrollToTop}
    class="back-to-top-button fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-2 text-customBlack font-semibold rounded-full shadow-lg focus:outline-none transition-all duration-300 transform hover:scale-110"
    style="opacity: {isVisible ? 1 : 0}; visibility: {isVisible ? 'visible' : 'hidden'};"
    aria-label="Back to top"
>
    BACK TO TOP
</button>

<style>
    /* Back to Top button styling */
    .back-to-top-button {
        background-color: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        font-weight: 600; /* Semibold font */
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 1000; /* Ensure it's on top */
    }

    /* Button hover effect */
    .back-to-top-button:hover {
        transform: translate(-50%, 0) scale(1.1); /* Center the button and scale it without shifting */
    }
</style>
