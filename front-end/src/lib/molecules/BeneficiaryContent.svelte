<script>
    import Title from "../atoms/Title.svelte";
    import Paragraph from "../atoms/Paragraph.svelte";
    import BenefitCard from "../molecules/BeneficiaryCard.svelte";

    export let title = "Solutions Beneficiary";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit...";
    export let cards = [
        {
            subtitle: "Asset Owners & Investors",
            points: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Praesent nec nibh eu sapien luctus porta quis in dolor.",
                "Aenean a quam fermentum, scelerisque leo sollicitudin, rutrum ligula."
            ],
            buttonText: "Learn more",
            buttonLink: "#"
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

<section class="py-12">
    <Title text={title} />
    <Paragraph text={description} />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each cards as card}
            <BenefitCard 
                subtitle={card.subtitle} 
                points={card.points} 
                buttonText={card.buttonText} 
                buttonLink={card.buttonLink} 
            />
        {/each}
    </div>
</section>
