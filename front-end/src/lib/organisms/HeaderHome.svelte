<script>
    import { HomeBG, HomeHeader, HomeMsg, ActionButton } from '$lib/atoms';

    export let backgroundImage = "/images/header-home-bg.svg";
    export let title = "Invest early in the future you believe in, today";
    export let description = "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }
</script>

<section class="relative flex flex-col items-start justify-center" style="min-height: 75vh;">
    <!-- Header Background Image -->
    <HomeBG src={backgroundImage} altText="Header Background" />

    <!-- Header Text and Buttons -->
    <div class={`relative text-left max-w-full md:max-w-xl lg:max-w-2xl px-4 md:px-8 lg:px-16 py-8 md:py-24 lg:py-32 ${menuOpen ? 'hidden' : 'block'}`}>
        <HomeHeader title={title} description={description} />
    
        <!-- Button and For Founders Message -->
        <div class="mt-8 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <!-- "Become an Investor" Button -->
            <ActionButton href='/asset-owners' text="Become an Investor" theme="custom" variant="secondary" />

            <!-- "For founders, please click here" Message -->
            <HomeMsg message="For founders, please" linkText="click here" linkHref="/founder-main" />
        </div>
    </div>

</section>
