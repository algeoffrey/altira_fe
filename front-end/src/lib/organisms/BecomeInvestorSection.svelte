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
  
  <section class="py-20 bg-gray-100">
    <div class="container px-12 md:px-28 md:mx-24 flex flex-col text-left">
      <h2 class="text-center md:text-left px-12 md:px-28 mb-8 text-xl md:text-[2rem] font-semibold">{title}</h2>
      <p class="md:text-left px-14 md:px-28 mb-8 text-sm md:text-base font-light mb-8 max-w-5xl">{description}</p>
      <div class="md:px-28 md:text-left text-center">
        <ActionButton {text} {theme} {variant} {href} {fontWeight} {size} {bordersize}/>
      </div>
    </div>
  </section>
  