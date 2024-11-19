<script>
    import FeatureSection from "./FeatureSection.svelte";
    import StatisticSection from "./StatisticSection.svelte";
      'poj'
    export let introParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt. Etiam laoreet consequat ligula, eu tempus eros convallis porta. Etiam vel auctor metus. Praesent nec scelerisque nisi, nec rhoncus justo. Vivamus mollis lobortis suscipit. Aenean consectetur, felis in gravida accumsan, nunc ex tempus lacus, in ultrices dolor tellus ut augue. Mauris non purus et sapien sollicitudin rutrum nec facilisis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum posuere nisl, eu ornare nulla maximus ac.";
</script>

<section class="py-12 px-8 md:px-8 lg:px-32 bg-white">
    <div class="max-w-8xl mx-auto text-justify justify-left">
        <p class="text-[1rem] my-5 leading-relaxed font-[400]">{introParagraph}</p>
    </div>
    <div class="mt-12 max-w-8xl mx-auto">
        <FeatureSection />
    </div>
    <div class="mt-12 max-w-8xl mx-auto">
        <StatisticSection />
    </div>
</section>
