<script>
    export let isOpen = false;
    export let toggleMenu;
    export let ariaLabel = "Toggle Menu";
</script>

<button type="button" class="ml-auto md:hidden" on:click={toggleMenu} aria-label={ariaLabel}>
    {#if isOpen}
        <!-- Close Icon -->
        <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    {:else}
        <!-- Hamburger Icon -->
        <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
    {/if}
</button>
