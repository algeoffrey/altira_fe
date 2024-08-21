<script>
    import CardTitle from "../atoms/CardTitle.svelte";
    import ActionButton from "../atoms/ActionButton.svelte";

    export let title = "Asset Owners & Investors";
    export let paragraphs = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt."
    ];
    export let buttonText = "Learn more";
    export let buttonLink = "#";
</script>

<section class="flex flex-col md:flex-col items-center justify-between py-12 px-6 bg-[#F8F8F8]">
    <h2 class="text-center text-2xl md:text-3xl font-semibold mb-6">{title}</h2>

    <!-- Text Content -->
    <div class="mb-8 md:mb-0 font-light mb-12 py-6 max-w-8xl mx-32">
        {#each paragraphs as paragraph}
            <p class="text-base font-light mb-6 leading-relaxed">{paragraph}</p>
        {/each}
        <div class="mt-10 flex justify-end">
            <ActionButton text={buttonText} href={buttonLink} theme="transparent" variant="secondary" bordersize="px-4 py-2" size="text-md md:text-lg" fontWeight="font-medium" />
        </div>
    </div>
</section>
