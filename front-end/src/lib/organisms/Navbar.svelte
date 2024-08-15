<script>
    import { NavLogo, NavLink, ActionButton, HamburgerButton } from '/src/lib/atoms';
    import { createEventDispatcher } from 'svelte';

    export let links = [
        { name: "About", href: "/about" },
        { name: "Solutions", href: "/solutions" },
        { name: "Investors", href: "/asset-owners" },
        { name: "Learn Hub", href: "/investor-learn-hub" }
    ];

    export let theme = 'transparent';
    let isMenuOpen = false;
    const dispatch = createEventDispatcher();

    let logoSrc = theme === 'black' ? '/images/altira-logo-white.svg' : '/images/altira-logo-black.svg';

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        dispatch('toggleMenu', { isMenuOpen });
    }
</script>

<nav class={`flex items-center justify-start p-5 ${theme === 'transparent' 
    ? 'bg-transparent absolute top-0 left-0 w-full z-10' 
    : theme === 'white' 
        ? 'bg-white shadow-md' 
        : theme === 'custom' 
            ? 'bg-[#5CE1E6] shadow-md' 
            : 'bg-[#363338] shadow-md'}`}>
    
    <!-- Logo -->
    <div class="pl-10"><NavLogo logoSrc={logoSrc} href="/" theme={theme} /></div>
    

    <!-- Navigation Links -->
    <ul class="flex items-center gap-10 font-light ml-10 hidden md:flex">
        {#each links as { name, href }}
            <li><NavLink href={href} text={name} theme={theme} /></li>
        {/each}
    </ul>

    <!-- Hamburger Menu Button -->
    <HamburgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} ariaLabel="Toggle Menu" />

    <!-- Action Buttons (Desktop) -->
    <div class="hidden md:flex items-center space-x-4 ml-auto">
        <ActionButton text="Investor Track" theme={theme} variant="primary" />
        <ActionButton text="Raise Capital" theme={theme} variant="secondary" />
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
                <ActionButton text="Investor Track" theme={theme} variant="primary" />
                <ActionButton text="Raise Capital" theme={theme} variant="secondary" />
            </div>
        </div>
    {/if}
</nav>
