<script>
    import BenefitCard from "../molecules/BeneficiaryCard.svelte";

    export let title = "Solutions Beneficiary";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in.";
    export let introParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt. Etiam laoreet consequat ligula, eu tempus eros convallis porta. Etiam vel auctor metus. Praesent nec scelerisque nisi, nec rhoncus justo. Vivamus mollis lobortis suscipit. Aenean consectetur, felis in gravida accumsan, nunc ex tempus lacus, in ultrices dolor tellus ut augue. Mauris non purus et sapien sollicitudin rutrum nec facilisis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum posuere nisl, eu ornare nulla maximus ac.";
    export let cards = [
        {
            subtitle: "Asset Owners & Investors",
            points: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Praesent nec nibh eu sapien luctus porta quis in dolor.",
                "Aenean a quam fermentum, scelerisque leo sollicitudin, rutrum ligula."
            ],
            buttonText: "Learn more",
            buttonLink: "/asset-owners-&-investors"
        },
        {
            subtitle: "Corporate Innovators",
            points: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Praesent nec nibh eu sapien luctus porta quis in dolor.",
                "Aenean a quam fermentum, scelerisque leo sollicitudin, rutrum ligula."
            ],
            buttonText: "Learn more",
            buttonLink: "#"
        },
        {
            subtitle: "Family Enterprises",
            points: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Praesent nec nibh eu sapien luctus porta quis in dolor.",
                "Aenean a quam fermentum, scelerisque leo sollicitudin, rutrum ligula."
            ],
            buttonText: "Learn more",
            buttonLink: "#"
        },
        {
            subtitle: "Partner & Builders",
            points: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Praesent nec nibh eu sapien luctus porta quis in dolor.",
                "Aenean a quam fermentum, scelerisque leo sollicitudin, rutrum ligula."
            ],
            buttonText: "Learn more",
            buttonLink: "#"
        }
    ];
</script>

<section class="py-12 bg-white relative">
    <!-- Introductory Paragraph -->
    <p class="text-left text-[1rem] md:text-base font-light mb-12 py-6 max-w-8xl mx-auto px-8 leading-6">
        {introParagraph}
    </p>

    <!-- Title and Description -->
    <h2 class="text-center text-2xl md:text-3xl font-semibold mb-6">{title}</h2>
    <p class="text-center text-[1rem] md:text-base font-light mb-12 max-w-5xl mx-auto px-8 leading-6">{description}</p>

    <!-- Three Column Layout for Desktop/Tablet and Single Column for Mobile -->
    <div class="desktop-grid md:grid md:grid-cols-[auto_20px_auto] md:justify-center md:items-center relative mobile-column">
        <!-- Desktop/Tablet View -->
        <div class="desktop-view md:flex md:justify-center md:items-center">
            <!-- First Column -->
            <div class="flex flex-col justify-between space-y-8 items-end">
                <BenefitCard {...cards[0]} class="p-4 md:p-6" />
                <div class="h-[1px] w-[50%] mx-20 bg-black"></div>
                <BenefitCard {...cards[2]} class="p-4 md:p-6" />
            </div>

            <!-- Middle Column - Circle with Vertical Lines -->
            <div class="flex flex-col justify-between items-center w-full h-full relative">
                <div class="h-[80%] w-[1px] bg-black mt-20"></div>
                <div class="flex justify-center items-center my-8">
                    <div class="w-16 h-16 rounded-full bg-[#363338] flex justify-center items-center">
                        <div class="w-10 h-10 rounded-full bg-[#D9D9D9] flex justify-center items-center">
                            <div class="w-6 h-6 rounded-full bg-[#363338]"></div>
                        </div>
                    </div>
                </div>
                <div class="h-[80%] w-[1px] mb-20 bg-black"></div>
            </div>


            <div class="flex flex-col justify-between space-y-8 items-start">
                <BenefitCard {...cards[1]} class="p-4 md:p-6" />
                <div class="h-[1px] w-[50%] mx-20 bg-black"></div>
                <BenefitCard {...cards[3]} class="p-4 md:p-6" />
            </div>
        </div>

        <div class="mobile-view md:hidden flex flex-col items-center space-y-12">
            {#each cards as card, index}
                <BenefitCard {...card} class="p-4" />
                {#if index < cards.length - 1}
                    <span class="flex flex-row justify-center items-center">
                        <span class="h-[2px] w-32 bg-black mr-6"></span>
                        <span class="w-8 h-8 rounded-full bg-[#363338] flex justify-center items-center">
                            <span class="w-4 h-4 rounded-full bg-[#D9D9D9] flex justify-center items-center">
                                <span class="w-2 h-2 rounded-full bg-[#363338]"></span>
                            </span>
                        </span>
                        <span class="h-[2px] w-32 bg-black ml-6"></span>
                    </span>
                {/if}
            {/each}
        </div>
    </div>
</section>

<style>
    /* Hide mobile view for desktop/tablet */
    .mobile-view {
        display: none;
    }

    /* Show desktop layout by default */
    .desktop-view {
        display: flex;
    }

    /* Media query for mobile: show single-column layout */
    @media (max-width: 768px) {
        .desktop-view {
            display: none;
        }

        .mobile-view {
            display: flex;
        }
    }
</style>
