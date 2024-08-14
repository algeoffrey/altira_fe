<script>
    import { Navbar, HeaderHero, InnovationPlatform, InvestorEducation} from '$lib/organisms';
    import { HeroQuote } from '$lib/molecules';
    import LogoHolder from '../lib/LogoHolder.svelte';


  </script>
  
  <!-- Navbar -->
  <Navbar theme="transparent" />

  
  <!-- Header Section -->
  <HeaderHero
    backgroundImage="/images/header-home-bg.svg" 
    title="Invest early in the future you believe in, today" 
    description="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    buttonText="Become an Investor" 
  />

  <!-- Quote Section -->
  <HeroQuote/>

  <InnovationPlatform/>

  <InvestorEducation 
    learnMoreHref="/investor-learn-hub" 
    courses={[
        {
            title: "Early Stage & Startup Investing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Full Module Course (Certification Available)",
            backgroundColor: "#D0E1ED",
            buttonLink: "#"
        },
        {
            title: "Wealth Planning Fundamentals",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Investor Masterclass",
            backgroundColor: "#CFC9EF",
            buttonLink: "#"
        }
    ]}
/>
  
  <LogoHolder 
  logos={[
      { imgSrc: "/images/kfw_deg.svg", altText: "kfw deg"},
      { imgSrc: "/images/triple_jump.svg", altText: "triple jump"},
      { imgSrc: "/images/ministry_education_netherland.svg", altText: "ministry education netherland"},
      { imgSrc: "/images/aavishkar_capital_group.svg", altText: "aavishkar capital group"},
      { imgSrc: "/images/aavishkaar_group.svg", altText: "aavishkaar group"},
  ]}
  maxColumns={5}
  maxRows={1}
  title = "Institutional Supporters"
  seeMoreLink = "#"
/>

  