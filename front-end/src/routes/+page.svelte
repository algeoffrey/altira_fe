<script>
    import { Navbar, HeaderHero, InnovationPlatform, InvestorEducation, SponsorSection, AllSponsorSection, Footer} from '/src/lib/organisms';
    import { HeroQuote } from '/src/lib/molecules';


  </script>
  
  <Navbar theme="transparent" />

  
  <HeaderHero
    backgroundImage="/images/header-home-bg.svg" 
    title="Invest early in the future you believe in, today" 
    description="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    buttonText="Become an Investor" 
  />

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
            buttonLink: "/investor-course-early-stage-investing-in-emerging-companies"
        },
        {
            title: "Wealth Planning Fundamentals",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Investor Masterclass",
            backgroundColor: "#CFC9EF",
            buttonLink: "/investor-course-wealth-planning-fundamentals"
        }
    ]}
/>

<AllSponsorSection/>


<Footer />