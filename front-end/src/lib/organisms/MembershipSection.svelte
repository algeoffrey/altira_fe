<script>
    import MembershipCardContent from '../molecules/MembershipCardContent.svelte';

    export let cards = [
        {
            title: "Inspire",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            buttonText: "Join Now",
            buttonHref: "#",
            features: [
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
            ],
            price: "0",
        },
        {
            title: "Invest",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            buttonText: "Get Started",
            buttonHref: "#",
            features: [
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
            ],
            price: "0",
        },
        {
            title: "Innovate",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            buttonText: "Get Started",
            buttonHref: "#",
            features: [
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
            ],
            price: "0",
        }
    ];
</script>

<section class="bg-gray-100 py-12">
    <div class="text-center mb-8 max-w-8xl mx-32 px-4">
        <h2 class="text-3xl font-bold mb-6">Membership Edition</h2>
        <p class="md:text-base lg:text-lg font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum.</p>
    </div>

    <!-- Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {#each cards as card}
            <div class="flex justify-center">
                <MembershipCardContent
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                    buttonHref={card.buttonHref}
                    buttonVariant="primary"
                    buttonTheme="transparent"
                    features={card.features}
                    price={card.price}
                />
            </div>
        {/each}
    </div>
</section>
