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

<section class="py-8 md:py-12 bg-gray-100">
    <div class="mx-auto px-4 md:px-4 lg:px-6 text-center">
        <h3 class="text-customBlack text-[2rem] font-[800] pb-6">Innovation Platform</h3>
        <p class="text-[1rem] font-[400] mb-6 md:mb-8 max-w-lg md:max-w-4xl lg:max-w-5xl mx-auto font-light">
            Empower investors and asset owners to invest in the future they dream of. Groundbreaking ideas are nurtured in this innovation ecosystem. Learn more about how to contribute to this elite mission.
        </p>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 max-w-lg sm:max-w-4xl md:max-w-5xl mx-auto">
            {#each cards as {title, content, buttonText, buttonLink}}
                <InfoCard {title} {content} {buttonText} {buttonLink} />
            {/each}
        </div>
    </div>
</section>

