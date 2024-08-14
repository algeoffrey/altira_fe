<script>
    import AltiraLogo from '$lib/atoms/AltiraLogo.svelte';
    import SocialIconsGroup from '$lib/molecules/SocialIconsGroup.svelte';
    import FooterLinksGroup from '$lib/molecules/FooterLinksGroup.svelte';

    const socialIcons = [
        { iconSrc: "/images/instagram_icon.svg", altText: "Instagram", link: "#" },
        { iconSrc: "/images/linkedin_icon.svg", altText: "LinkedIn", link: "#" },
        { iconSrc: "/images/email_icon.svg", altText: "Email", link: "#" }
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

<footer class="bg-customBlack text-white py-8 mt-16">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
        <div class="flex flex-col items-start space-y-5">
            <AltiraLogo />
            <SocialIconsGroup icons={socialIcons} class="space-x-4" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FooterLinksGroup links={column1Links} />
            <FooterLinksGroup links={column2Links} />
            <FooterLinksGroup links={column3Links} />
        </div>
    </div>
    <div class="text-center mt-6">
        <p class="text-xs md:text-sm">ALTIRA Group & Advisory</p>
        <p class="text-xs md:text-sm">Copyright © 2023</p>
    </div>
</footer>
