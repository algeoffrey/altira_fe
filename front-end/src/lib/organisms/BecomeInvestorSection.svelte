<script>
    import ActionButton from "../atoms/ActionButton.svelte";

    export let title = "Become an Investor";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in.";

    export let text = "Learn More";
    export let theme = "transparent";
    export let variant = "primary";
    export let href = "/";
    export let fontWeight = "font-normal";
    export let size = "text-md";
    export let bordersize = "px-12 py-2 md:px-28 md:py-2"
</script>

<section class="py-20 bg-gray-100 relative">
  <div class="w-full max-w-4xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col items-center md:items-start text-center md:text-left">
    <!-- Title -->
    <h2 class="mb-8 text-xl md:text-[2rem] font-semibold">
      {title}
    </h2>

    <!-- Description -->
    <p class="mb-8 text-sm md:text-base font-light">
      {description}
    </p>

    <!-- Button -->
    <div>
      <ActionButton {text} {theme} {variant} {href} {fontWeight} {size} {bordersize} />
    </div>
  </div>
</section>

