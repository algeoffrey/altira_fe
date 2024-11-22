<script>
  export let title = "Page Title";
  export let titleWeight = "bold";
  export let subtitle = "";
  export let titleColor = "#FFFFFF";
  export let subtitleColor = "#FFFFFF";
</script>

<div class="flex flex-row justify-between items-center w-full max-w-7xl">
  <!-- Title on the left -->
  <h1
    class="font-{titleWeight} text-[22px] sm:text-3xl md:text-4xl text-customBlack pl-7 md:pl-3"
    style="color: {titleColor}; font-weight: {titleWeight};"
  >
    {@html title}
  </h1>

  <!-- Subtitle hidden on mobile -->
  {#if subtitle}
    <p
      class="hidden md:block absolute text-lg text-right opacity-90"
      style="color: {subtitleColor}; font-weight: 100; right: 2rem; bottom: 3.2rem;"
    >
      {subtitle}
    </p>
  {/if}
</div>
