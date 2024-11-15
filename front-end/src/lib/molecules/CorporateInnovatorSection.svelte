<script>
    import CardTitle from "../atoms/CardTitle.svelte";
    import ActionButton from "../atoms/ActionButton.svelte";

    export let title = "Corporate Innovators";
    export let mainDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in.";
    export let sections = [
        {
            subtitle: "Corporate & Family Enterprise Innovation (CFEI)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
            buttonText: "Learn more",
            buttonLink: "#"
        },
        {
            subtitle: "Venture Innovation Solutions (VIS)",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
            subSections: [
                {
                    subtitle: "Venture Innovation Leadership Program (VILP)",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
                    buttonText: "Learn more",
                    buttonLink: "#"
                },
                {
                    subtitle: "Venture Management Services (VMS)",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
                    buttonText: "Learn more",
                    buttonLink: "#"
                }
            ]
        }
    ];
</script>

<section class="py-12 px-6 bg-white" id="corporates">

    <!-- Title and Description -->
    <h2 class="text-center text-2xl md:text-3xl font-semibold mb-6">{title}</h2>
    <p class="text-center text-[1rem] md:text-base font-light mb-12 py-6 max-w-8xl mx-auto px-8 leading-relaxed">{mainDescription}</p>

    <!-- Sections -->
    {#each sections as section}
        <div class="mb-12 py-4 max-w-8xl mx-auto px-8">
            <CardTitle text={section.subtitle} size="text-2xl" align="text-left" weight="font-thin-bold" />
            <p class="text-base font-light mt-6 mb-6 leading-relaxed">{section.description}</p>
            
            <!-- Subsections -->
            {#if section.subSections}
                {#each section.subSections as subSection, i}
                    <div class="ml-8 mb-12 pl-1">
                        <CardTitle text={subSection.subtitle} size="text-xl" align="text-left" weight="font-light-bold" />
                        <p class="text-base font-light mt-4 mb-6 leading-relaxed">{subSection.description}</p>

                        <!-- Only display button for the last subsection -->
                        {#if i === section.subSections.length - 1}
                            <div class="mt-8 flex justify-end">
                                <ActionButton text={subSection.buttonText} href={subSection.buttonLink} theme="transparent" variant="secondary" bordersize="px-5 py-1" size="text-md md:text-lg" fontWeight="font-light-bold" />
                            </div>
                        {/if}
                    </div>
                {/each}
            {:else}
                <!-- Only show the button if there are no sub-sections -->
                <div class="mt-6 flex justify-end">
                    <ActionButton text={section.buttonText} href={section.buttonLink} theme="transparent" variant="secondary" bordersize="px-5 py-1" size="text-md md:text-lg" fontWeight="font-light-bold" />
                </div>
            {/if}
        </div>
    {/each}
</section>
