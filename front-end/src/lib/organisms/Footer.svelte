<script>
  import AltiraLogo from "../atoms/AltiraLogo.svelte";
  import SocialIconsGroup from "../molecules/SocialIconsGroup.svelte";
  import FooterLinksGroup from "../molecules/FooterLinksGroup.svelte";

  const socialIcons = [
    { iconSrc: "/images/instagram_icon.svg", altText: "Instagram", link: "https://www.instagram.com/altira.sea/?hl=en" },
    { iconSrc: "/images/linkedin_icon.svg", altText: "LinkedIn", link: "https://www.linkedin.com/company/altira/" },
    { iconSrc: "/images/email_icon.svg", altText: "Email", link: "#" },
  ];

  const column1Links = [
    { text: "People", href: "/our-people" },
    { text: "Story & Mission", href: "/about#mission" },
    { text: "Track Records", href: "/ecosystem-profile#Track-Record" },
    { text: "Ecosystem Profile", href: "/ecosystem-profile" },
    { text: "Glossary", href: "/glossary" },
  ];

  const column2Links = [
    { text: "Become an Investor", href: "/alt-c-investor-network" },
    { text: "Investor Education", href: "/investor-learn-hub" },
    { text: "Wealth Solutions", href: "/asset-owners-&-investors#wealth" },
    { text: "Enterprise Innovation", href: "/asset-owners-&-investors#innovation" },
  ];

  const column3Links = [
    { text: "Raise Capital", href: "/founder-main#advisory" },
    { text: "FoundrX Hub", href: "/founder-main" },
    { text: "Founders Learn-Hub", href: "/founder-main#masterclasses" },
    { text: "Founders Programs", href: "/founder-main#events-pitches" },
  ];

  const column1Mobile = [
    { text: "People", href: "/our-people" },
    { text: "Story & Mission", href: "/about#mission" },
    { text: "Track Records", href: "/ecosystem-profile#Track-Record" },
    { text: "Ecosystem Profile", href: "/ecosystem-profile" },
    { text: "Glossary", href: "/glossary" },
    { text: "Become an Investor", href: "/alt-c-investor-network" },
    { text: "Investor Education", href: "/investor-learn-hub" },
  ];

  const column2Mobile = [
    { text: "Wealth Solutions", href: "/asset-owners-&-investors#wealth" },
    { text: "Enterprise Innovation", href: "/asset-owners-&-investors#innovation" },
    { text: "Raise Capital", href: "/founder-main#advisory" },
    { text: "FoundrX Hub", href: "/founder-main" },
    { text: "Founders Learn-Hub", href: "/founder-main#masterclasses" },
    { text: "Founders Programs", href: "/founder-main#events-pitches" },
  ];
</script>

<footer class="bg-customBlack text-white py-8 px-4 sm:px-8 md:px-14">
  <!-- Desktop/Tablet Layout -->
  <div class="hidden md:flex md:flex-col">
    <div class="container flex flex-col md:flex-row justify-between items-start md:space-y-0 space-y-8">
      <!-- Logo and Social Icons -->
      <div class="flex flex-col items-center md:items-start space-y-6">
        <!-- Logo -->
        <AltiraLogo size="h-10" />

        <!-- Social Icons -->
        <SocialIconsGroup icons={socialIcons} class="flex space-x-4" />
      </div>

      <!-- Footer Links -->
      <div class="grid grid-cols-3 gap-2 w-3/4 text-center">
        <ul class="flex flex-col font-light space-y-2">
          {#each column1Links as { text, href }}
            <li>
              <a href={href} class="hover:underline">{text}</a>
            </li>
          {/each}
        </ul>
        <ul class="flex flex-col font-light space-y-2">
          {#each column2Links as { text, href }}
            <li>
              <a href={href} class="hover:underline">{text}</a>
            </li>
          {/each}
        </ul>
        <ul class="flex flex-col font-light space-y-2">
          {#each column3Links as { text, href }}
            <li>
              <a href={href} class="hover:underline">{text}</a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center mt-10 md:mt-12">
      <p class="text-sm font-light mb-1">ALTIRA Group & Advisory</p>
      <p class="text-xs font-light">Copyright © 2023</p>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="md:hidden flex flex-col items-center space-y-8">
    <!-- Logo -->
    <AltiraLogo size="h-10" />

    <!-- Footer Links -->
    <div class="grid grid-cols-2 gap-6 w-full text-center">
      <ul class="flex flex-col font-light space-y-2">
        {#each column1Mobile as { text, href }}
          <li>
            <a href={href} class="hover:underline">{text}</a>
          </li>
        {/each}
      </ul>
      <ul class="flex flex-col font-light space-y-2">
        {#each column2Mobile as { text, href }}
          <li>
            <a href={href} class="hover:underline">{text}</a>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Social Icons -->
    <SocialIconsGroup icons={socialIcons} class="flex space-x-6" />

    <!-- Copyright -->
    <div class="text-center">
      <p class="text-sm font-light mb-1">ALTIRA Group & Advisory</p>
      <p class="text-xs font-light">Copyright © 2023</p>
    </div>
  </div>
</footer>

