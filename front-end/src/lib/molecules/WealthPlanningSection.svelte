<script>
    import CardTitle from "../atoms/CardTitle.svelte";
    import ActionButton from "../atoms/ActionButton.svelte";

    export let title = "Wealth Planning & Solutions";
    
    export let sections = [
        {
            subtitle: "Wealth Planning Knowledge",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
            buttonText: "Our Solutions",
            buttonLink: "/solutions"
        },
        {
            subtitle: "Wealth Management Solutions (WMS)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
            buttonText: "Our Solutions",
            buttonLink: "/solutions"
        }
    ];
</script>

<section class="bg-white py-12 md:py-16 relative" id = "wealth">
    <section class="max-w-8xl mx-auto px-8">
        <!-- Title and Description -->
        <h2 class="text-center text-2xl md:text-[2rem] font-semibold mb-6">{title}</h2>

        <!-- Sections -->
        {#each sections as section}
            <div class="mb-10 py-4 mx-auto">
                <CardTitle text={section.subtitle} size="text-xl md:text-[1.7rem]" align="text-left" weight="font-light-bold" />
                <p class="text-base text-left md:text-justify font-light mt-7 md:mt-9 mb-6 leading-relaxed">{section.description}</p>
                <div class="mt-4 flex justify-end">
                    <ActionButton text={section.buttonText} href={section.buttonLink} theme="transparent" variant="secondary" bordersize="px-5 py-1" size="text-sm md:text-lg" fontWeight="font-medium" />
                </div>
            </div>
        {/each}
    </section>
</section>
