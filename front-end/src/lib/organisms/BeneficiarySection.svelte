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

    <!-- Responsive Grid Layout -->
    <div class="relative hidden md:grid md:grid-cols-[1fr_20px_1fr] items-center gap-8 md:gap-16 max-w-7xl mx-auto px-8">
        <!-- Left Column -->
        <div class="flex flex-col items-end space-y-16">
            <BenefitCard {...cards[0]} class="p-4 md:p-6" />
            <div class="w-full h-[1px] bg-black"></div>
            <BenefitCard {...cards[2]} class="p-4 md:p-6" />
        </div>

        <!-- Middle Column: Vertical Line -->
        <div class="hidden md:flex flex-col items-center">
            <div class="w-[1px] h-[70%] bg-black"></div>
            <div class="w-16 h-16 rounded-full bg-[#363338] flex items-center justify-center my-8">
                <div class="w-10 h-10 rounded-full bg-[#D9D9D9] flex items-center justify-center">
                    <div class="w-6 h-6 rounded-full bg-[#363338]"></div>
                </div>
            </div>
            <div class="w-[1px] h-[70%] bg-black"></div>
        </div>

        <!-- Right Column -->
        <div class="flex flex-col items-start space-y-16">
            <BenefitCard {...cards[1]} class="p-4 md:p-6" />
            <div class="w-full h-[1px] bg-black"></div>
            <BenefitCard {...cards[3]} class="p-4 md:p-6" />
        </div>
    </div>

    <!-- Mobile View -->
    <div class="md:hidden flex flex-col items-center space-y-12">
        <div class="flex items-center">
            <span class="w-28 sm:w-40 h-[1px] bg-black"></span>
            <span class="w-8 h-8 rounded-full bg-[#363338] flex items-center justify-center mx-6">
                <span class="w-4 h-4 rounded-full bg-[#D9D9D9] flex items-center justify-center">
                    <span class="w-2 h-2 rounded-full bg-[#363338]"></span>
                </span>
            </span>
            <span class="w-28 sm:w-40 h-[1px] bg-black"></span>
        </div>
        {#each cards as card, index}
            <BenefitCard {...card} class="p-4" />
            {#if index < cards.length - 1}
                <div class="flex items-center">
                    <span class="w-28 sm:w-40 h-[1px] bg-black"></span>
                    <span class="w-8 h-8 rounded-full bg-[#363338] flex items-center justify-center mx-6">
                        <span class="w-4 h-4 rounded-full bg-[#D9D9D9] flex items-center justify-center">
                            <span class="w-2 h-2 rounded-full bg-[#363338]"></span>
                        </span>
                    </span>
                    <span class="w-28 sm:w-40 h-[1px] bg-black"></span>
                </div>
            {/if}
        {/each}
    </div>
</section>

<style>
    /* Desktop and Tablet Layout */
    @media (min-width: 768px) {
        .grid {
            gap: 2rem;
        }
    }

    /* Prevent Cards from Being Too Far Apart on Large Screens */
    @media (min-width: 1024px) {
        .grid {
            max-width: 1100px;
            margin: 0 auto;
        }
    }
</style>
