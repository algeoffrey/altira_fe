<script>
    import CardTitle from "../atoms/CardTitle.svelte";
    import ActionButton from "../atoms/ActionButton.svelte";

    export let introText = "Today’s competitive landscape demands fresh ideas and powerful forces to make a vision happen. Join our elite community to learn, launch, and champion groundbreaking solutions for a better tomorrow. Together, let’s unlock the powerful innovation while generating good returns for your investment.";
    export let title = "Investor Platform";
    export let mainDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in.";

    export let sections = [
        {
            subtitle: "Investor Network",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
            buttonText: "Alt-Collective",
            buttonLink: "#"
        },
        {
            subtitle: "Investor Education",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
            buttonText: "Learn Hub",
            buttonLink: "#"
        },
        {
            subtitle: "Investment Council",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
            buttonText: "Our People",
            buttonLink: "#"
        }
    ];
</script>

<section class="py-12 bg-white relative">

    <!-- Intro Text -->
    <p class="text-left text-sm md:text-base font-light mb-12 py-6 max-w-8xl mx-32">
        {introText}
    </p>

    <!-- Title and Description -->
    <h2 class="text-center text-2xl md:text-[2rem] font-semibold mb-6 max-w-8xl mx-32">
        {title}
    </h2>
    <p class="text-center text-sm md:text-base font-light mb-8 md:mb-12 max-w-8xl mx-32">
        {mainDescription}
    </p>

    <!-- Sections -->
    {#each sections as section}
        <div class="mb-4 md:mb-6 py-2 md:py-4 max-w-8xl mx-32">
            <CardTitle text={section.subtitle} size="text-lg md:text-[1.7rem]" align="text-left" weight="font-light-bold" />
            <p class="text-sm md:text-base text-left md:text-justify font-light mt-6 md:mt-8 mb-4 md:mb-6 leading-relaxed">
                {section.description}
            </p>
            <div class="mt-4 flex justify-start md:justify-end">
                <ActionButton text={section.buttonText} href={section.buttonLink} theme="transparent" variant="secondary" bordersize="px-3 md:px-5 py-1" size="text-sm md:text-md lg:text-lg" fontWeight="font-medium" />
            </div>
        </div>
    {/each}
</section>
