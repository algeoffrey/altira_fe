<script>
    import InfoCard from '/src/lib/molecules/InfoCard.svelte';
    import CardTitle from '/src/lib/atoms/CardTitle.svelte';

    export let cards = [
        {
            title: "Wealth Solutions",
            content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Praesent nec nibh eu sapien luctus porta quis in dolor.", "Aenean a quam fermentum, scelerisque leo sollicitudin."],
            buttonText: "More Info",
            buttonLink: "/asset-owners-&-investors"
        },
        {
            title: "Investor Network",
            content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Praesent nec nibh eu sapien luctus porta quis in dolor.", "Aenean a quam fermentum, scelerisque leo sollicitudin."],
            buttonText: "More Info",
            buttonLink: "/alt-c-investor-network"
        },
        {
            title: "Enterprise Innovation",
            content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Praesent nec nibh eu sapien luctus porta quis in dolor.", "Aenean a quam fermentum, scelerisque leo sollicitudin."],
            buttonText: "More Info",
            buttonLink: "/solutions"
        }
    ];
</script>

<section class="py-10 sm:py-12 bg-gray-100">
    <div class="mx-auto px-7 sm:px-6 md:px-8 lg:px-12 text-center">
        <!-- Section Title -->
        <h3 class="text-customBlack text-[1.5rem] sm:text-[2rem] font-[800] pb-4 sm:pb-6">
            Innovation Platform
        </h3>
        
        <!-- Section Description -->
        <p class="text-[0.9rem] sm:text-[1rem] font-[400] mb-6 sm:mb-8 max-w-sm sm:max-w-lg md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed">
            Empower investors and asset owners to invest in the future they dream of. Groundbreaking ideas are nurtured in this innovation ecosystem. Learn more about how to contribute to this elite mission.
        </p>
  
        <!-- Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 lg:gap-12 xl:gap-14 max-w-xs sm:max-w-3xl md:max-w-5xl mx-auto">
            {#each cards as {title, content, buttonText, buttonLink}}
                <InfoCard {title} {content} {buttonText} {buttonLink} />
            {/each}
        </div>
    </div>
</section>



