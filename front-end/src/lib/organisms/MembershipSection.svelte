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
    <div class="text-center mb-8 max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-4">Membership Edition</h2>
        <p class="text-base font-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto px-12">
        {#each cards as card}
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
        {/each}
    </div>
</section>
