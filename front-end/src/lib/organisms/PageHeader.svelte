<script>
  import TitleWithSubtitle from "../molecules/TitlewithSubtitle.svelte";
  import Navigation from "../molecules/SubHeadingNav.svelte";
  import ExtraText from "../atoms/ExtraText.svelte";
  import HamburgerButton from "../atoms/HamburgerButton.svelte";
  import NavLogo from "../atoms/AltiraLogo.svelte";
  import { onMount } from "svelte";

  export let title = "Page Title";
  export let titleWeight = "bold";
  export let customTitle = null;
  export let subtitle = "";  // This will be conditionally rendered
  export let backgroundColor = "#f8f9fa";
  export let secondaryColor = "#6c757d";
  export let subHeaderLinks = [];
  export let titleColor = "#FFFFFF";
  export let subHeaderTextColor = "#FFFFFF";
  export let extraText = "";
  export let coursePage = false;
  export let subtitleMarginLeft = "ml-auto";
  export let subtitleMarginRight = "";

  // Define the main navbar links for both desktop and mobile views
  export let links = [
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Investors", href: "/asset-owners-&-investors" },
    { name: "Learn Hub", href: "/investor-learn-hub" }
  ];

  const displayTitle = customTitle || title;
  let isMobile = false;
  let isMenuOpen = false;

  // Efficiently handle screen size changes
  onMount(() => {
    const updateIsMobile = () => {
      isMobile = window.innerWidth < 768;
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    // Cleanup the event listener on component destroy
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  });

  // Function to handle hamburger menu toggle for mobile
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }
</script>

<!-- Page Header Section -->
<section class="relative w-full" style="background-color: {backgroundColor};">
  <div class="container pt-8 pb-8 md:pt-32 md:pb-12 px-4 mx-auto flex justify-between items-center">
    <TitleWithSubtitle
      title={displayTitle}
      titleWeight={titleWeight}
      {titleColor}
      subtitle={isMobile ? "" : subtitle} 
      subtitleColor={titleColor}
      {subtitleMarginLeft}
      {subtitleMarginRight}
    />

    {#if isMobile}
      <!-- Mobile Hamburger Menu Button -->
      <HamburgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} ariaLabel="Toggle Menu" />
    {/if}
  </div>
</section>

{#if !isMobile}
  <!-- Sticky Sub-header Navigation for Desktop and Tablet -->
  <section class="sticky top-16 z-40">
    <div class="w-full h-14 flex justify-between items-center" style="background-color: {secondaryColor};">
      <!-- Navigation Links -->
      <div class="px-6 md:px-16">
        <Navigation links={subHeaderLinks} color={subHeaderTextColor} coursePage={coursePage} />
      </div>

      <!-- Extra Text (Visible only on desktop) -->
      {#if extraText}
        <div class="text-right px-4">
          <ExtraText text={extraText} color={subHeaderTextColor} />
        </div>
      {/if}
    </div>
  </section>
{:else if isMenuOpen}
  <!-- Mobile Menu Overlay -->
  <div class="fixed inset-0 w-full h-full bg-customBlack z-50 p-8 flex flex-col space-y-8 items-center justify-center">
    <!-- Close Button for Mobile Menu -->
    <button type="button" class="absolute top-6 right-6 z-50 text-3xl" on:click={toggleMenu} aria-label="Close Menu">
      <img width="25px" src="/images/icon/close_icon.svg" alt="Close menu" />
    </button>

    <!-- Mobile Logo -->
    <div>
      <NavLogo logoSrc='/images/altira-logo-white.svg' href="/" size={12} />
    </div>

    <!-- Mobile Action Buttons -->
    <div class="flex flex-col space-y-8 w-full items-center text-sm">
      <a href="/founder-main" class="transition duration-300 px-5 py-1.5 text-md border bg-white text-customBlack rounded-md">
        Raise Capital
      </a>
      <a href="/alt-c-investor-network" class="transition duration-300 px-5 py-1.5 text-md border bg-transparent text-white rounded-md">
        Investor Track
      </a>
    </div>

    <!-- Navigation Links (Mobile) -->
    <ul class="flex flex-col space-y-8 text-center text-sm text-white">
      {#each links as { name, href }}
        <li><a href={href} on:click={toggleMenu}>{name}</a></li>
      {/each}
    </ul>
  </div>
{/if}
