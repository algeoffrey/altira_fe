<script>
  import AltiraLogo from "../atoms/AltiraLogo.svelte";
  import SocialIconsGroup from "../molecules/SocialIconsGroup.svelte";
  import FooterLinksGroup from "../molecules/FooterLinksGroup.svelte";

  const socialIcons = [
    { iconSrc: "/images/instagram_icon.svg", altText: "Instagram", link: "#" },
    { iconSrc: "/images/linkedin_icon.svg", altText: "LinkedIn", link: "#" },
    { iconSrc: "/images/email_icon.svg", altText: "Email", link: "#" },
  ];

  const column1Links = [
    { text: "People", href: "#" },
    { text: "Story & Mission", href: "#" },
    { text: "Track Records", href: "#" },
    { text: "Ecosystem Profile", href: "#" },
    { text: "Glossary", href: "#" },
  ];

  const column2Links = [
    { text: "Become an Investor", href: "#" },
    { text: "Investor Education", href: "#" },
    { text: "Wealth Solutions", href: "#" },
    { text: "Enterprise Innovation", href: "#" },
  ];

  const column3Links = [
    { text: "Raise Capital", href: "#" },
    { text: "FoundrX Hub", href: "#" },
    { text: "Founders Learn-Hub", href: "#" },
    { text: "Founders Programs", href: "#" },
  ];
</script>

<footer class="bg-customBlack text-white py-8">
  <div
    class="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-12 md:space-y-0"
  >
    <!-- Logo and Social Icons -->
    <div class="flex flex-col items-center md:items-start space-y-6">
      <div class="w-full flex justify-center md:justify-start">
        <AltiraLogo size="h-10" />
      </div>
      <div class="hidden md:block">
        <SocialIconsGroup icons={socialIcons} class="flex space-x-4" />
      </div>
    </div>

    <!-- Footer Links -->
    <div class="flex flex-col md:items-center mx-auto">
      <div class="grid grid-cols-3 md:grid-cols-3 gap-12 text-left">
        <FooterLinksGroup links={column1Links} />
        <FooterLinksGroup links={column2Links} />
        <FooterLinksGroup links={column3Links} />
      </div>
    </div>
  </div>

  <!-- Social Icons for Mobile View -->
  <div class="md:hidden flex justify-center mt-8 space-x-6">
    <SocialIconsGroup icons={socialIcons} class="flex space-x-4" />
  </div>

  <!-- Copyright -->
  <div class="text-center mt-10 md:mt-12">
    <p class="text-sm font-light mb-1">ALTIRA Group & Advisory</p>
    <p class="text-xs font-light">Copyright © 2023</p>
  </div>
</footer>
