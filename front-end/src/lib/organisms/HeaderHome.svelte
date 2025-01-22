<script>
  import { HomeBG, HomeHeader, HomeMsg, ActionButton } from "../atoms/";

  export let backgroundImage = "/images/header-home-bg.svg";
  export let title = "Invest early in the future you believe in, today";
  export let description =
    "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
  
  export let buttonLink = "/investor-learn-hub"
  
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<section
  class="relative flex flex-col items-start justify-center overflow-hidden bg-[#F8F8F8]"
  style="min-height: 100vh;"
>
  <!-- Header Background Image -->
  <HomeBG src={backgroundImage} altText="Header Background" class="absolute inset-0 w-full h-full object-cover" />

  <!-- Header Text and Buttons -->
  <div
    class={`relative text-left max-w-full md:max-w-2xl lg:max-w-3xl px-8 sm:px-14 py-8 sm:py-16 md:py-24 ${menuOpen ? "hidden" : "block"} lg:ml-8`}
  >
    <!-- Header Text -->
    <HomeHeader 
      {title} 
      {description} 
      class="text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-bold leading-snug"
    />

    <!-- Buttons and Message -->
    <div class="mt-6 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <!-- "Become an Investor" Button -->
      <ActionButton
        href="{buttonLink}"
        text="Become an Investor"
        theme="custom"
        variant="secondary"
        size="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem]"
        fontWeight="font-medium"
        bordersize="py-2 px-4"
        class="w-full sm:w-auto"
      />

      <!-- Founders Message -->
      <HomeMsg
        message="For founders, please"
        linkText="click here"
        linkHref="/founder-main"
        class="text-sm sm:text-base md:text-lg"
      />
    </div>
  </div>
</section>


