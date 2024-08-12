<script>
    export let links = [
      { name: "About", href: "/about" },
      { name: "Solutions", href: "/solutions" },
      { name: "Investors", href: "/asset-owners" },
      { name: "Learn Hub", href: "/investor-learn-hub" }
    ];
  
    export let theme = 'transparent'; // default to 'transparent'
  
    // Determine the logo based on the theme
    let logoSrc = theme === 'black' ? '/images/altira-logo-white.svg' : '/images/altira-logo-black.svg';
  
    // Determine the navbar background based on the theme
    let navbarClasses = theme === 'transparent' 
      ? 'bg-transparent absolute top-0 left-0 w-full z-10' 
      : theme === 'white' 
        ? 'bg-white shadow-md' 
        : theme === 'custom' 
          ? 'bg-[#5CE1E6] shadow-md'
          : 'bg-[#363338] shadow-md'; // Black theme background color
  </script>
  
  <nav class={`flex items-center justify-start p-4 ${navbarClasses}`}>
    <!-- Logo -->
    <a href="/" class={`text-xl font-bold ${theme === 'transparent' ? 'text-black' : 'text-white'} mr-10`}>
      <img src={logoSrc} alt="Altira Logo" class="h-8" />
    </a>
  
    <!-- Navigation Links -->
    <ul class="flex items-center gap-8">
      {#each links as { name, href }}
        <li><a href={href} class={`${theme === 'transparent' ? 'text-black' : theme === 'custom' ? 'text-black' : 'text-white'} hover:text-gray-300`}>{name}</a></li>
      {/each}
    </ul>
  
    <!-- Action Buttons -->
    <div class="flex items-center ml-auto space-x-4">
      <!-- Investor Track Button -->
      <button class={`px-4 py-2 rounded ${
        theme === 'transparent'
          ? 'bg-black text-white'
          : theme === 'black'
            ? 'bg-transparent text-white border border-white'
            : 'bg-transparent border border-black text-black'
      }`}>
        Investor Track
      </button>
  
      <!-- Raise Capital Button -->
      <button class={`px-4 py-2 rounded ${
        theme === 'transparent'
          ? 'border border-black text-black bg-transparent'
          : theme === 'black'
            ? 'bg-white text-black border border-black'
            : 'border-black bg-black text-white'
      }`}>
        Raise Capital
      </button>
    </div>
  </nav>
  
  