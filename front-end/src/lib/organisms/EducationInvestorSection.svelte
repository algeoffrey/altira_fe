<script>
    import ActionButton from "../atoms/ActionButton.svelte";
  
    export let title = "Investor Education";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in.";
  
    export let text = "Register for a course";
    export let theme = "transparent";
    export let variant = "primary";
    export let href = "/investor-learn-hub";
    export let fontWeight = "font-normal";
    export let size = "text-md";
    export let bordersize = "px-6 py-2 md:px-28 md:py-2";
  </script>
  
  <section class="py-16 bg-[#F4F4F4]">
    <div class="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col items-center text-center">
      <!-- Title -->
      <h2 class="text-2xl md:text-3xl  font-semibold text-gray-900 mb-6">
        {title}
      </h2>
  
      <!-- Description -->
      <p class="text-sm md:text-base lg:text-lg font-light text-gray-700 mb-8">
        {description}
      </p>
  
      <!-- Action Button -->
      <div>
        <ActionButton
          {text}
          {theme}
          {variant}
          {href}
          {fontWeight}
          {size}
          {bordersize}
        />
      </div>
    </div>
  </section>
  