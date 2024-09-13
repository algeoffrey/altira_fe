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
  <HomeBG src={backgroundImage} altText="Header Background" />

  <!-- Header Text and Buttons -->
  <div
    class={`relative text-left max-w-full md:max-w-2xl lg:max-w-2xl px-4 md:px-8 lg:px-8 lg:ml-12 lg:pl-12 lg:pr-5 py-8 md:py-24 lg:pt-8 lg:mb-12 lg:pb-18 ${menuOpen ? "hidden" : "block"}`}
  >
    <HomeHeader {title} {description} />

    <div class="mt-6 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-5 md:space-x-4">
    <!-- "Become an Investor" Button -->
    <ActionButton
        href="{buttonLink}"
        text="Become an Investor"
        theme="custom"
        variant="secondary"
        size="text-[1.1rem]"
        fontWeight= "font-md"
        bordersize = "py-2 px-4"
    />

    <!-- "For founders, please click here" Message -->
    <HomeMsg
        message="For founders, please"
        linkText="click here"
        linkHref="/founder-main"
    />

    </div>
  </div>
</section>
