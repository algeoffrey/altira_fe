<script>
    import Navbar from '../lib/Navbar.svelte';
    import Header from '../lib/HeaderHome.svelte';
    import HeroQuote from '../lib/HeroQuote.svelte';
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
  