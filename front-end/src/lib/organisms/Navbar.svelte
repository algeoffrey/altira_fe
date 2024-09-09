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
    let customBlack = '#363338'; // Correctly declare custom black color
    $: logoSrc = currentTheme === 'black' ? '/images/altira-logo-white.svg' : '/images/altira-logo-black.svg';

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        dispatch('toggleMenu', { isMenuOpen });
    }

    function handleScroll() {
        if (typeof window !== 'undefined' && window.scrollY > 50) {
            currentTheme = 'black'; // Change to black when scrolled past hero
        } else {
            currentTheme = theme; // Return to the original theme (transparent)
        }
    }

    // Set up scroll event listener
    onMount(() => {
        if (typeof window !== 'undefined') {
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

<nav class={`sticky top-0 flex items-center justify-start p-2 transition-all duration-500 ${currentTheme === 'transparent' 
    ? 'bg-transparent left-0 w-full z-10' 
    : currentTheme === 'white' 
        ? 'bg-white shadow-md z-10' 
        : currentTheme === 'custom' 
            ? 'bg-[#5CE1E6] shadow-md z-10' 
            : 'bg-black shadow-md z-10'}`}>
    
    <!-- Logo -->
    <div class="md:lg:pl-9">
        <NavLogo logoSrc={logoSrc} href="/" theme={currentTheme} />
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
                  ${currentTheme === 'black' ? 'bg-black text-white' : `bg-[${customBlack}] text-white`} 
                  ${currentTheme === 'black' ? 'border-white' : 'border-black'}`}>
            Investor Track
        </a>

        <!-- Secondary Button -->
        <a href="/founder-main" 
           class={`transition-all duration-300 px-5 py-1.5 text-md border rounded-md 
                  ${currentTheme === 'black' ? 'border-white bg-white text-[${customBlack}]' : 'border-black bg-transparent text-black'} 
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
