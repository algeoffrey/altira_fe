<script>
  export let title = "Page Title";
  export let titleWeight = "bold";
  export let subtitle = "";
  export let titleColor = "#FFFFFF";
  export let subtitleColor = "#FFFFFF";
</script>

<div class="flex flex-row justify-between items-center w-full max-w-7xl">
  <!-- Title on the left -->
  <h1 class="font-{titleWeight} sm:text-4xl md:text-4xl text-customBlack" style="color: {titleColor};">
    {@html title}
  </h1>
  
  <div class="flex items-self-end">
    {#if subtitle}
    <p class="absolute top-12 right-24 sm:text-md md:text-lg lg:text-xl font-light text-right" style="color: {subtitleColor};">
      {subtitle}
    </p>
  {/if}
  </div>

</div>
