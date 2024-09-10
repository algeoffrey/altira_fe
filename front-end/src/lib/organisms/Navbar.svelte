<script>
    import { NavLogo, NavLink, HamburgerButton } from '/src/lib/atoms'; 
    import { createEventDispatcher, onMount, onDestroy } from 'svelte';

    export let links = [
        { name: "About", href: "/about" },
        { name: "Solutions", href: "/solutions" },
        { name: "Investors", href: "/asset-owners-&-investors" },
        { name: "Learn Hub", href: "/investor-learn-hub" }
    ];

    export let theme = 'transparent'; // Default theme is 'transparent'
    let isMenuOpen = false;
    const dispatch = createEventDispatcher();

    let currentTheme = theme;
    let isSticky = false;  // Add a flag for sticky state

    // Handle toggle of the menu
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        dispatch('toggleMenu', { isMenuOpen });
    }

    // Handle scroll and toggle navbar position from absolute to fixed
    function handleScroll() {
        if (window && window.scrollY > 0) { // Adjust the value to when you want the navbar to become sticky
            isSticky = true;
            currentTheme = 'black';  // You can also adjust the theme when sticky
        } else {
            isSticky = false;
            currentTheme = theme;
        }
    }

    // Set up scroll event listener
    onMount(() => {
        if (typeof window !== 'undefined') { // Check if window is defined (client-side only)
            window.addEventListener('scroll', handleScroll);
        }
    });

    // Clean up event listener when component is destroyed
    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', handleScroll);
        }
    });
</script>

<!-- The sticky behavior will switch between absolute and fixed -->
<nav class={`${isSticky ? 'fixed top-0' : 'absolute top-0'} left-0 w-full flex items-center justify-start p-4 transition-all duration-500 z-50 ${currentTheme === 'transparent' 
    ? 'bg-transparent' 
    : currentTheme === 'white' 
        ? 'bg-white shadow-md' 
        : currentTheme === 'custom' 
            ? 'bg-[#5CE1E6] shadow-md' 
            : 'bg-black shadow-md'}`}>
    
    <!-- Logo -->
    <div class="md:lg:pl-9">
        <NavLogo logoSrc={currentTheme === 'black' ? '/images/altira-logo-white.svg' : '/images/altira-logo-black.svg'} href="/" theme={currentTheme} />
    </div>

    <!-- Navigation Links -->
    <ul class="flex items-center gap-12 font-light lg:md:ml-10 hidden md:flex text-md">
        {#each links as { name, href }}
            <li>
                <a href={href} 
                   class={`nav-link transition-all duration-300 ${currentTheme === 'black' ? 'text-white' : 'text-black'}`}>
                    {name}
                </a>
            </li>
        {/each}
    </ul>

    <!-- Hamburger Menu Button -->
    <HamburgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} ariaLabel="Toggle Menu" />

    <!-- Action Buttons (Desktop) -->
    <div class="hidden md:flex items-center space-x-6 lg:md:pr-8 ml-auto">
        <!-- Primary Button -->
        <a href="/alt-c-investor-network" 
           class={`transition-all duration-300 px-5 py-1.5 text-md border rounded-md 
                  ${currentTheme === 'black' ? 'bg-black text-white' : `bg-[#363338] text-white`} 
                  ${currentTheme === 'black' ? 'border-white' : 'border-black'}`}>
            Investor Track
        </a>

        <!-- Secondary Button -->
        <a href="/founder-main" 
           class={`transition-all duration-300 px-5 py-1.5 text-md border rounded-md 
                  ${currentTheme === 'black' ? 'border-white bg-white text-[#363338]' : 'border-black bg-transparent text-black'} 
                  ${currentTheme === 'black' ? 'border-white' : 'border-black'}`}>
            Raise Capital
        </a>
    </div>

    <!-- Mobile Menu (Visible when Menu is Open) -->
    {#if isMenuOpen}
        <div class="fixed inset-0 w-full h-full bg-white z-50 p-8 flex flex-col space-y-8 items-center justify-center">
            <!-- Close Button -->
            <button type="button" class="absolute top-4 right-4 text-3xl" on:click={toggleMenu} aria-label="Close Menu">&times;</button>
            
            <!-- Mobile Navigation Links -->
            <ul class="flex flex-col space-y-8 text-center text-xl">
                {#each links as { name, href }}
                    <li><a href={href} class="text-black hover:text-gray-600" on:click={toggleMenu}>{name}</a></li>
                {/each}
            </ul>

            <!-- Mobile Action Buttons -->
            <div class="flex flex-col space-y-4 w-full items-center">
                <!-- Primary Button -->
                <a href="/alt-c-investor-network" class="transition-all duration-300 px-5 py-1.5 text-md border bg-black text-white rounded-md">
                    Investor Track
                </a>

                <!-- Secondary Button -->
                <a href="/founder-main" class="transition-all duration-300 px-5 py-1.5 text-md border bg-transparent text-black rounded-md">
                    Raise Capital
                </a>
            </div>
        </div>
    {/if}
</nav>
