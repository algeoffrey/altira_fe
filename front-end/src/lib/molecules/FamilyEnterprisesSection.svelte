<script>
    import CardTitle from "../atoms/CardTitle.svelte";
    import ActionButton from "../atoms/ActionButton.svelte";

    export let title = "Family Enterprises";
    export let mainDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in.";
    export let sections = [
        {
            subtitle: "Wealth Planning Solutions (WPS)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
            buttonText: "Learn more",
            buttonLink: "#"
        },
        {
            subtitle: "Family Enterprise Innovation Solutions",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
            buttonText: "Learn more",
            buttonLink: "#"
        }
    ];
</script>

<section class="py-12 px-6 bg-[#F8F8F8]" id="family-enterprises">
    <!-- Title and Description -->
    <h2 class="text-center text-2xl md:text-3xl font-semibold mb-6">{title}</h2>
    <p class="text-center text-sm md:text-base font-light mb-12 py-6 max-w-8xl mx-32">{mainDescription}</p>

    <!-- Sections -->
    {#each sections as section}
        <div class="mb-12 py-2 max-w-8xl mx-32">
            <CardTitle text={section.subtitle} size="text-2xl" align="text-left" weight="font-thin-bold" />
            <p class="text-base font-light mt-4 mb-4 leading-relaxed">{section.description}</p>
            
            <!-- Button placed at the end of each section -->
            <div class="mt-4 flex justify-end">
                <ActionButton text={section.buttonText} href={section.buttonLink} theme="transparent" variant="secondary" bordersize="px-5 py-1" size="text-md md:text-lg" fontWeight="font-medium" />
            </div>
        </div>
    {/each}
</section>
