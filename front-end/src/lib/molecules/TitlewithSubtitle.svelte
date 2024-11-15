<script>
  export let title = "Page Title";
  export let titleWeight = "bold";
  export let subtitle = "";
  export let titleColor = "#FFFFFF";
  export let subtitleColor = "#FFFFFF";
</script>

<div class="flex flex-row justify-between items-center w-full max-w-7xl">
  <!-- Title on the left -->
  <h1 class="font-{titleWeight} text-[22px] sm:text-4xl md:text-4xl text-customBlack" style="color: {titleColor};">
    {@html title}
  </h1>
  
  <div class="flex items-self-end">
    {#if subtitle}
    <p class="absolute bottom-[3.2rem] right-[8rem] text-lg text-right opacity-90" style="color: {subtitleColor}; font-weight: 100;">
      {subtitle}
    </p>
  {/if}
  </div>

</div>

