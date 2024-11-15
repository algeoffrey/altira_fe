    <script>
        import CardTitle from "../atoms/CardTitle.svelte";
        import ActionButton from "../atoms/ActionButton.svelte";

        export let title = "Partners & Builders";
        export let mainDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.";
        export let buttonText = "Learn more";
        export let buttonLink = "#";

        export let sections = [
            {
                subtitle: "Partnership & Collaboration",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
            },
            {
                subtitle: "Education & Capacity Development",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",

            }
        ];
    </script>

    <section class="py-14 mb-8 px-6 bg-white" id="partners-builders">

        <!-- Title and Description -->
        <h2 class="text-center text-2xl md:text-3xl font-semibold mb-6">{title}</h2>
        <p class="text-center text-[1rem] md:text-base font-light mb-4 py-4 max-w-8xl mx-auto px-8 leading-relaxed">{mainDescription}</p>
        <div class="mt-8 flex justify-end mb-2 py-4 max-w-8xl mx-auto px-8">
            <ActionButton text={buttonText} href={buttonLink} theme="transparent" variant="secondary" bordersize="px-5 py-1" size="text-md md:text-lg" fontWeight="font-medium" />
        </div>

        <!-- Sections -->
        {#each sections as section, i}
            <div class="mb-2 py-4 max-w-8xl mx-auto px-8">
                <CardTitle text={section.subtitle} size="text-2xl" align="text-left" weight="font-thin-bold" />
                <p class="text-base font-light mt-6 mb-6 leading-relaxed">{section.description}</p>
            </div>
        {/each}
    </section>
