<script>
    import Navbar from '../lib/Navbar.svelte';
    import Header from '../lib/HeaderHome.svelte';
    import HeroQuote from '../lib/HeroQuote.svelte';
    import InfoCard from '../lib/InfoCard.svelte';
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
      <p class="text-base mb-12 max-w-5xl mx-auto font-light"> <!-- Adjust max-width to match the cards -->
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
  


  