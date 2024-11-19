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
        { title: "Inspire", price: "0", description: "Free forever\nSingle user", details: "Basic interaction features to get started with Slido.", buttonText: "Join Now", buttonHref: "#", translated: false, originalCurrency: "USD" },
        { title: "Invest", price: "0", description: "Per month billed annually\n1 user", details: "Unlimited engagement for virtual meetings and training sessions.", buttonText: "Get Started", buttonHref: "#", translated: false, originalCurrency: "USD" },
        { title: "Innovate", price: "0", description: "Per month billed annually\n2 users", details: "Advanced settings and control for professional events.", buttonText: "Get Started", buttonHref: "#", translated: false, originalCurrency: "USD" },
    ];
</script>

<section class="bg-white py-12 my-8 max-w-full mx-auto relative px-6 md:px-8 lg:px-16">
    <!-- Table Container (with horizontal scrolling) -->
    <div class="overflow-x-auto px-4">
        <!-- Comparison Header -->
        <div class="grid grid-cols-4 gap-4 text-center items-center mb-4 min-w-[600px] max-w-full">
            <!-- Left-aligned title -->
            <div class="text-left col-span-1 pb-2 mb-8">
                <h2 class="text-lg md:text-xl lg:text-2xl font-bold pb-2">Edition Comparison</h2>
                <p class="text-xs md:text-sm text-gray-500">All prices are <u>annual</u> excl. VAT</p>
            </div>
            {#each plans as plan, index}
                <div class={index === 0 ? 'relative z-20' : ''}>
                    <div class="p-2 md:p-4">
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

        <hr class="my-2 border-gray-300" />

        <!-- Plan details below the header -->
        <div class="grid grid-cols-4 gap-4 text-center items-center mb-4 min-w-[600px] max-w-full">
            <div></div>
            {#each plans as plan, index}
                <div class={index === 0 ? 'relative z-20' : ''}>
                    <div class="text-center px-2 md:px-4">
                        <p class="text-xs md:text-sm lg:text-base text-black font-thin">{plan.details}</p>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Feature rows -->
        <div class="grid gap-2 min-w-[600px] max-w-full">
            {#each features as feature, index}
                {#if feature.isHeader}
                    <!-- Render feature section headers -->
                    <div class="grid grid-cols-4 gap-4 text-left text-sm md:text-base lg:text-lg font-semibold bg-white py-1 md:py-2 pl-2 md:pl-4">
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
        <div class="grid grid-cols-4 gap-4 mt-4 min-w-[600px] max-w-full">
            <div></div> <!-- Empty cell for the features -->
            {#each plans as plan, index}
                <div class={index === 0 ? 'relative z-20' : ''}>
                    <div class="text-center px-4">
                        <ActionButton 
                            text={plan.buttonText} 
                            href={plan.buttonHref} 
                            variant="primary" 
                            theme="transparent"
                            fontWeight="font-semibold" 
                            size="text-sm md:text-md" 
                            bordersize="px-4 py-1 md:px-8 md:py-2"
                            fullWidth={true} 
                        />
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>



<!-- <style>
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
</style> -->


