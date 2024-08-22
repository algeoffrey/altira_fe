<script>
    export let title = "Page Title";
    export let titleWeight = "bold";
    export let titleSize = "4xl";
    export let subtitle = "";
    export let titleColor = "#FFFFFF";
    export let subtitleColor = "#FFFFFF";
  </script>
  
  <div class="flex justify-between items-center w-full">
    <!-- Title on the left -->
    <h1 class= ' text-{titleSize} font-{titleWeight}' style="color: {titleColor};">
      {@html title}
    </h1>
    
    {#if subtitle}
      <p class="text-lg font-light text-right ml-auto" style="color: {subtitleColor};">
        {subtitle}
      </p>
    {/if}
  </div>
  