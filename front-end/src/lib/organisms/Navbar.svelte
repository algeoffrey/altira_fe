<script>
    import { NavLogo, HamburgerButton } from '/src/lib/atoms';
    import { createEventDispatcher, onMount, onDestroy } from 'svelte';
    import { afterNavigate } from '$app/navigation';
    import { page } from '$app/stores';
  
    export let links = [
      { name: "About", href: "/about" },
      { name: "Solutions", href: "/solutions" },
      { name: "Investors", href: "/asset-owners-&-investors" },
      { name: "Learn Hub", href: "/investor-learn-hub" }
    ];
  
    export let theme = 'transparent';
    let isMenuOpen = false;
    const dispatch = createEventDispatcher();
    let currentTheme = theme;
    let isSticky = false;
  
    // Reactive statement to update `isHomepage` when `$page` changes
    $: isHomepage = $page.url.pathname === "/";
  
    // Toggle the mobile menu open and close
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
      if (typeof document !== 'undefined') {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
      }
      dispatch('toggleMenu', { isMenuOpen });
    }
  
    // Manage sticky navigation on scroll
    function handleScroll() {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 0) {
          isSticky = true;
          currentTheme = 'black';
        } else {
          isSticky = false;
          currentTheme = theme;
        }
      }
    }
  
    // Set up scroll listener
    onMount(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
      }
    });
  
    // Clean up listeners when component is destroyed
    onDestroy(() => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    });
  
    // Update `isHomepage` after navigation
    afterNavigate(() => {
      isMenuOpen = false;
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    });
  </script>
  
  
  <!-- Desktop and Tablet Navbar -->
  <nav class={`${isSticky ? 'fixed top-0' : 'absolute top-0'} left-0 w-full hidden md:flex items-center justify-start p-4 transition-all duration-500 z-50 ${
    currentTheme === 'transparent'
      ? 'bg-transparent'
      : currentTheme === 'white'
      ? 'bg-white shadow-md'
      : currentTheme === 'custom'
      ? 'bg-[#5CE1E6] shadow-md'
      : 'bg-black shadow-md'
  }`}>
    <!-- Logo -->
    <div class="md:pl-9">
      <NavLogo
        logoSrc={
          currentTheme === 'black'
            ? '/images/altira-logo-white.svg'
            : '/images/altira-logo-black.svg'
        }
        href="/"
        theme={currentTheme}
      />
    </div>
  
    <!-- Navigation Links (Desktop) -->
    <ul class="flex items-center gap-12 font-light lg:ml-10 text-md">
      {#each links as { name, href }}
        <li>
          <a
            href={href}
            class={`nav-link transition-all duration-300 ${
              currentTheme === 'black' ? 'text-white' : 'text-black'
            }`}
          >
            {name}
          </a>
        </li>
      {/each}
    </ul>
  
    <!-- Action Buttons (Desktop) -->
    <div class="flex items-center space-x-6 lg:pr-12 ml-auto">
      <!-- Primary Button -->
      <a
        href="/alt-c-investor-network"
        class={`transition-all duration-300 px-4 py-1.5 text-md border rounded-md font-[400] ${
          currentTheme === 'black' ? 'bg-black text-white' : 'bg-[#363338] text-white'
        } ${currentTheme === 'black' ? 'border-white' : 'border-black'}`}
      >
        Investor Track
      </a>
  
      <!-- Secondary Button -->
      <a
        href="/founder-main"
        class={`transition-all duration-300 px-4 py-1.5 text-md border rounded-md font-[600] ${
          currentTheme === 'black'
            ? 'border-white bg-white text-[#363338]'
            : 'border-black bg-transparent text-black'
        } ${currentTheme === 'black' ? 'border-white' : 'border-black'}`}
      >
        Raise Capital
      </a>
    </div>
  </nav>
  
  <!-- Mobile Navbar (Only on Homepage) -->
  {#if isHomepage}
    <nav class={`${isSticky ? 'fixed top-0' : 'absolute top-0'} left-0 w-full flex md:hidden items-center justify-between p-4 transition-all duration-500 z-50 ${
      currentTheme === 'transparent'
        ? 'bg-transparent'
        : currentTheme === 'white'
        ? 'bg-white shadow-md'
        : currentTheme === 'custom'
        ? 'bg-[#5CE1E6] shadow-md'
        : 'bg-black shadow-md'
    }`}>
      <!-- Logo -->
      <div>
        <NavLogo
          logoSrc={
            currentTheme === 'black'
              ? '/images/altira-logo-white.svg'
              : '/images/altira-logo-black.svg'
          }
          href="/"
          theme={currentTheme}
        />
      </div>
  
      <!-- Hamburger Menu Button -->
      <HamburgerButton
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        ariaLabel="Toggle Menu"
      />
  
      <!-- Mobile Menu Overlay (Visible when Menu is Open) -->
      {#if isMenuOpen}
        <div class="fixed inset-0 w-full h-full bg-customBlack z-50 p-8 flex flex-col space-y-8 items-center justify-center">
          <!-- Close Button for Mobile Menu -->
          <button
            type="button"
            class="absolute top-6 right-6 z-50 text-3xl"
            on:click={toggleMenu}
            aria-label="Close Menu"
          >
            <img width="25px" src="/images/icon/close_icon.svg" alt="Close menu" />
          </button>
  
          <!-- Mobile Logo -->
          <div>
            <NavLogo logoSrc="/images/altira-logo-white.svg" href="/" size={12} />
          </div>
  
          <!-- Mobile Action Buttons -->
          <div class="flex flex-col space-y-8 w-full items-center text-sm">
            <a
              href="/founder-main"
              class="transition-all duration-300 px-5 py-1.5 text-md border bg-white text-customBlack rounded-md"
            >
              Raise Capital
            </a>
            <a
              href="/alt-c-investor-network"
              class="transition-all duration-300 px-5 py-1.5 text-md border bg-transparent text-white rounded-md"
            >
              Investor Track
            </a>
          </div>
  
          <!-- Navigation Links (Mobile) -->
          <ul class="flex flex-col space-y-8 text-center text-sm text-white">
            {#each links as { name, href }}
              <li>
                <a href={href} class="text-white hover:text-gray-600" on:click={toggleMenu}>
                  {name}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </nav>
  {/if}
  