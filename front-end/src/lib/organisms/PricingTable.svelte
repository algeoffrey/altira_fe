<script>
    import PlanHeader from '../molecules/PlanHeader.svelte';
    import FeatureRow from '../molecules/FeatureRow.svelte';

    export let features = [
        { name: "Events", inspire: true, invest: true, innovate: true },
        { name: "Max. joined participants per event", inspire: 100, invest: 200, innovate: 1000 },
        { name: "Additional participants", inspire: false, invest: false, innovate: true },
        { name: "30-day money-back guarantee", inspire: false, invest: true, innovate: true },
        { name: "Crowdsource questions", inspire: true, invest: true, innovate: true },
        { name: "Moderation", inspire: false, invest: false, innovate: true },
    ];

    export let plans = [
        { title: "Inspire", price: "0", description: "Free forever\nSingle user" },
        { title: "Invest", price: "0", description: "Per month billed annually\n1 user" },
        { title: "Innovate", price: "0", description: "Per month billed annually\n2 users" },
    ];
</script>

<section class="bg-white py-12 max-w-7xl mx-auto">
    <div class="text-center mb-8">
        <h2 class="text-3xl font-bold">Edition Comparison</h2>
        <p class="text-sm text-gray-500">All prices excl. VAT</p>
    </div>
    <div class="grid grid-cols-4 gap-4 text-center">
        <div></div> <!-- Empty cell for the features -->
        {#each plans as plan}
            <PlanHeader title={plan.title} price={plan.price} description={plan.description} />
        {/each}
    </div>
    <div class="grid gap-4">
        {#each features as feature}
            <FeatureRow
                feature={feature.name}
                inspireAvailable={feature.inspire}
                investAvailable={feature.invest}
                innovateAvailable={feature.innovate}
            />
        {/each}
    </div>
</section>
