<script>
    import CardTitle from "../atoms/CardTitle.svelte";
    import ActionButton from "../atoms/ActionButton.svelte";

    export let title = "Enterprise Innovation";
    
    export let sections = [
        {
            subtitle: "Corporate & Family Enterprise Innovation (CFEI)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
            buttonText: "Our Solutions",
            buttonLink: "/solutions"
        },
        {
            subtitle: "Venture Innovation Solutions (VIS)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
            buttonText: "Our Solutions",
            buttonLink: "/solutions"
        }
    ];
</script>

<section class="py-12 bg-[#F8F8F8] relative" id="innovation">
    <section class="py-8 md:py-12 lg:py-16 max-w-8xl mx-auto px-8">
        <!-- Title and Description -->
        <h2 class="text-customBlack text-center text-[2rem] font-[800] mb-6 md:mb-8 lg:mb-10">{title}</h2>

        <!-- Sections -->
        {#each sections as section}
            <div class="mb-8 md:mb-10 lg:mb-12 py-4">
                <CardTitle text={section.subtitle} size="text-[1.563rem]" align="text-left" weight="font-[600]" />
                <p class="text-[1rem] text-left md:text-justify font-[400] mt-4 md:mt-6 lg:mt-8 mb-4 md:mb-6 lg:mb-8 leading-relaxed">{section.description}</p>
                <div class="mt-4 flex justify-end">
                    <ActionButton text={section.buttonText} href={section.buttonLink} theme="transparent" variant="secondary" bordersize="px-4 py-2 md:px-5 md:py-3" size="text-[1rem]" fontWeight="font-[500]" />
                </div>
            </div>
        {/each}
    </section>
</section>
