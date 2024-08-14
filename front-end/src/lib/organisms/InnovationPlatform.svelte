<script>
    import InfoCard from '$lib/molecules/InfoCard.svelte';
    import CardTitle from '$lib/atoms/CardTitle.svelte';

    export let cards = [
        {
            title: "Wealth Solutions",
            content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Praesent nec nibh eu sapien luctus porta quis in dolor.", "Aenean a quam fermentum, scelerisque leo sollicitudin."],
            buttonText: "More Info",
            buttonLink: "/solutions"
        },
        {
            title: "Investor Network",
            content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Praesent nec nibh eu sapien luctus porta quis in dolor.", "Aenean a quam fermentum, scelerisque leo sollicitudin."],
            buttonText: "More Info",
            buttonLink: "/investor-network"
        },
        {
            title: "Enterprise Innovation",
            content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Praesent nec nibh eu sapien luctus porta quis in dolor.", "Aenean a quam fermentum, scelerisque leo sollicitudin."],
            buttonText: "More Info",
            buttonLink: "#"
        }
    ];
</script>

<section class="py-8 md:py-12 bg-gray-100">
    <div class="container mx-auto px-4 md:px-4 lg:px-6 text-center">
        <CardTitle text="Innovation Platform" size="text-xl md:text-2xl font-bold" />
        <p class="text-sm md:text-base mb-6 md:mb-8 max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto font-light">
            Empower investors and asset owners to invest in the future they dream of. Groundbreaking ideas are nurtured in this innovation ecosystem. Learn more about how to contribute to this elite mission.
        </p>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-xs sm:max-w-md md:max-w-full mx-auto">
            {#each cards as {title, content, buttonText, buttonLink}}
                <InfoCard {title} {content} {buttonText} {buttonLink} />
            {/each}
        </div>
    </div>
</section>
