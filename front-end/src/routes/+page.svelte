<script>
    import Navbar from '../lib/Navbar.svelte';
    import Header from '../lib/HeaderHome.svelte';
    import HeroQuote from '../lib/HeroQuote.svelte';
    import InfoCard from '../lib/InfoCard.svelte';
    import CourseCard from '../lib/CourseCard.svelte';
    import LogoHolder from '../lib/LogoHolder.svelte';
  </script>
  
  <!-- Navbar -->
  <Navbar theme="transparent" />
  
  <!-- Header Section -->
  <Header 
    backgroundImage="/images/header-home-bg.svg" 
    title="Invest early in the future you believe in, today" 
    description="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    buttonText="Become an Investor" 
  />

  <HeroQuote/>

  <section class="py-16 bg-gray-100">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">Innovation Platform</h2>
      <p class="text-base mb-12 max-w-4xl mx-auto font-light"> <!-- Adjust max-width to match the cards -->
        Empower investors and asset owners to invest in the future they dream of. Groundbreaking ideas are nurtured in this innovation ecosystem. Learn more how to contribute to this elite mission.
      </p>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"> <!-- Apply the same max-width to the cards container -->
        <InfoCard 
          title="Wealth Solutions" 
          content="<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Praesent nec nibh eu sapien luctus porta quis in dolor.</li><li>Aenean a quam fermentum, scelerisque leo sollicitudin.</li>"
          buttonText="More Info"
          buttonLink="/solutions"
        />
        <InfoCard 
          title="Investor Network" 
          content="<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Praesent nec nibh eu sapien luctus porta quis in dolor.</li><li>Aenean a quam fermentum, scelerisque leo sollicitudin.</li>"
          buttonText="More Info"
          buttonLink="/investor-network"
        />
        <InfoCard 
          title="Enterprise Innovation" 
          content="<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Praesent nec nibh eu sapien luctus porta quis in dolor.</li><li>Aenean a quam fermentum, scelerisque leo sollicitudin.</li>"
          buttonText="More Info"
          buttonLink="#"
        />
      </div>
    </div>
  </section>

  <section class="py-12 bg-gray-50">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-semibold text-center mb-6">Asset Owner & Investor Education</h2>
      <p class="text-center text-sm md:text-base mb-12 max-w-3xl mx-auto font-thin">
        Becoming a pioneer sounds intimidating, but we are here to guide you to make your ambition come true. Whether you are an investor who is looking for a new asset class for your investment or an asset owner who wants to be part of innovation, we provide a comprehensive learning program to master investing in early-stage ventures.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <CourseCard 
          title="Early Stage & Startup Investing"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate."
          courseType="Full Module Course (Certification Available)"
          backgroundColor="#D0E1ED"
          buttonLink="#"
        />
        <CourseCard 
          title="Wealth Planning Fundamentals"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate."
          courseType="Investor Masterclass"
          backgroundColor="#CFC9EF"
          buttonLink="#"
        />
      </div>
      <div class="text-right mt-8 max-w-4xl mx-auto">
        <a href="/investor-learn-hub" class="text-sm font-thin hover:underline">Learn More ></a>
      </div>
    </div>
  </section>
  
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

  