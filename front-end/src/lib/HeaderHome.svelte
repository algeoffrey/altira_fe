<script>
    export let backgroundImage = "/images/header-home-bg.svg";
    export let description = "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
  </script>
  
  <section class="relative h-screen flex flex-col items-start justify-center">
    <!-- Header Background Image -->
    <div class="absolute inset-0 z-0">
      <img src={backgroundImage} alt="Header Background" class="w-full h-full object-cover" />
    </div>
  
    <!-- Header Text and Buttons -->
    <div class="relative z-10 text-left max-w-full md:max-w-xl lg:max-w-2xl px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32">
      <h1 class="text-3xl md:text-5xl leading-tight">
        <span class="font-bold">Invest early</span> in the future you believe in, <span class="font-bold">today</span>
      </h1>
      <p class="mt-4 text-base md:text-lg">{description}</p>
      
      <!-- Button and For Founders Message -->
      <div class="mt-8 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <!-- "Become an Investor" Button -->
        <a href="/asset-owners" class="px-6 py-3 text-white rounded w-full md:w-auto text-center" style="background-color: #363338;">
          Become an Investor
        </a>
        
        <!-- "For founders, click here" Message -->
        <p class="text-base md:text-lg">
          For founders, please <a href="/foundrx-main" class="text-black hover:underline"><u>click here</u></a>
        </p>
      </div>
    </div>
  </section>
  