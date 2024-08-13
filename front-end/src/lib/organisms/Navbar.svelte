<script>
    import {NavLogo , NavLink, ActionButton} from '$lib/atoms';

    export let links = [
        { name: "About", href: "/about" },
        { name: "Solutions", href: "/solutions" },
        { name: "Investors", href: "/asset-owners" },
        { name: "Learn Hub", href: "/investor-learn-hub" }
    ];

    export let theme = 'transparent'; // default to 'transparent'

    let logoSrc = theme === 'black' ? '/images/altira-logo-white.svg' : '/images/altira-logo-black.svg';
</script>

<nav class={`flex items-center justify-start p-4 ${theme === 'transparent' 
    ? 'bg-transparent absolute top-0 left-0 w-full z-10' 
    : theme === 'white' 
        ? 'bg-white shadow-md' 
        : theme === 'custom' 
            ? 'bg-[#5CE1E6] shadow-md' 
            : 'bg-[#363338] shadow-md'}`}>
    
    <!-- Logo -->
    <NavLogo logoSrc={logoSrc} href="/" theme={theme} />

    <!-- Navigation Links -->
    <ul class="flex items-center gap-8">
        {#each links as { name, href }}
            <li><NavLink href={href} text={name} theme={theme} /></li>
        {/each}
    </ul>

    <!-- Action Buttons -->
    <div class="flex items-center ml-auto space-x-4">
        <ActionButton text="Investor Track" theme={theme} variant="primary" />
        <ActionButton text="Raise Capital" theme={theme} variant="secondary" />
    </div>
</nav>
