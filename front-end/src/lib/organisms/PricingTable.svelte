<script>
    import PlanHeader from '../molecules/PlanHeader.svelte';
    import FeatureRow from '../molecules/FeatureRow.svelte';
    import ActionButton from '../atoms/ActionButton.svelte';

    export let features = [
        { name: "Essentials", isHeader: true },
        { name: "Events", inspire: "unlimited", invest: "unlimited", innovate: "unlimited" },
        { name: "Max. joined participants per event", inspire: "100", invest: "200", innovate: "1000", highlight: true },
        { name: "Additional participants", inspire: "-", invest: "-", innovate: "-" },
        { name: "30-day money-back guarantee", inspire: "-", invest: "✔", innovate: "✔", highlight: true },
        { name: "Audience Q&A", isHeader: true },
        { name: "Crowdsource questions", inspire: "✔", invest: "✔", innovate: "✔" },
        { name: "Moderation", inspire: "-", invest: "-", innovate: "✔", highlight: true },
        { name: "Advanced Q&A settings", inspire: "-", invest: "-", innovate: "✔" },
        { name: "Replies", inspire: "-", invest: "-", innovate: "✔", highlight: true },
        { name: "Labels", inspire: "-", invest: "-", innovate: "✔" }
    ];

    export let plans = [
        { title: "Inspire", price: "0", description: "Free forever\nSingle user", details: "Basic interaction features to get started with Slido.", buttonText: "Join Now", buttonHref: "#", translated: true, originalCurrency: "USD" },
        { title: "Invest", price: "0", description: "Per month billed annually\n1 user", details: "Unlimited engagement for virtual meetings and training sessions.", buttonText: "Get Started", buttonHref: "#", translated: true, originalCurrency: "USD" },
        { title: "Innovate", price: "0", description: "Per month billed annually\n2 users", details: "Advanced settings and control for professional events.", buttonText: "Get Started", buttonHref: "#", translated: true, originalCurrency: "USD" },
    ];
</script>

<section class="bg-white py-16 my-12 max-w-10xl mx-32 relative">
    <!-- Highlight Box -->
    <div class="highlight-box"></div>
    
    <div class="grid grid-cols-4 gap-4 text-center items-center mb-6 pl-4">
        <!-- Left-aligned title -->
        <div class="text-left col-span-1 pb-2 mb-16">
            <h2 class="text-2xl font-bold">Edition Comparison</h2>
            <p class="text-sm text-gray-500">All prices excl. VAT</p>
        </div>
        {#each plans as plan, index}
            <div class={index === 0 ? 'relative z-20' : ''}>
                <div class="p-4">
                    <PlanHeader 
                        title={plan.title} 
                        price={plan.price} 
                        description={plan.description}
                        translated={plan.translated}
                        originalCurrency={plan.originalCurrency}
                    />
                </div>
            </div>
        {/each}
    </div>

    <hr class="my-4 border-gray-300" />
    
    <!-- Plan details below the header -->
    <div class="grid grid-cols-4 gap-4 text-center items-center mb-8">
        <div></div>
        {#each plans as plan, index}
            <div class={index === 0 ? 'relative z-20' : ''}>
                <div class="text-center px-4">
                    <p class="text-sm text-black font-thin">{plan.details}</p>
                </div>
            </div>
        {/each}
    </div>

    <!-- Feature rows -->
    <div class="grid gap-4">
        {#each features as feature, index}
            {#if feature.isHeader}
                <!-- Render feature section headers -->
                <div class="grid grid-cols-4 gap-4 text-left text-xl font-semibold bg-white py-2 pl-4">
                    <div class="col-span-4">{feature.name}</div>
                </div>
            {:else}
                <div class={feature.highlight ? 'relative z-10' : ''}>
                    <FeatureRow
                        feature={feature.name}
                        inspireAvailable={feature.inspire}
                        investAvailable={feature.invest}
                        innovateAvailable={feature.innovate}
                        highlight={feature.highlight}
                    />
                </div>
            {/if}
        {/each}
    </div>

    <!-- Buttons at the bottom of each plan -->
    <div class="grid grid-cols-4 gap-4 mt-8">
        <div></div> <!-- Empty cell for the features -->
        {#each plans as plan, index}
            <div class={index === 0 ? 'relative z-20' : ''}>
                <div class="text-center px-8">
                    <ActionButton 
                        text={plan.buttonText} 
                        href={plan.buttonHref} 
                        variant="primary" 
                        theme="transparent"
                        fontWeight="font-semibold" 
                        size="text-md" 
                        bordersize="px-10 py-2"
                        fullWidth={true} 
                    />
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .highlight-box {
        position: absolute;
        top: 5%;
        left: 25%;
        width: 25%;
        height: 92%;
        background-color: #E8E8E81A; /* Tailwind gray-100 with opacity */
        border: 1px solid #d7cbcb; /* Tailwind gray-300 */
        border-radius: 0.5rem; /* Tailwind rounded-lg */
        z-index: 20;
    }
</style>
