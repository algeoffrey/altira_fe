<script>
  export let title = "Page Title";
  export let customTitle = null;  
  export let subtitle = "";  // Subtitle for the right side
  export let backgroundColor = "#f8f9fa"; 
  export let secondaryColor = "#6c757d"; 
  export let subHeaderLinks = [];
  export let titleColor = "#FFFFFF";  
  export let subHeaderTextColor = "#FFFFFF";  
  export let extraText = "";  
  export let subtitleMarginLeft = "ml-auto"; // Add a prop for subtitle left margin
  export let subtitleMarginRight = ""; // Add a prop for subtitle right margin

  const displayTitle = customTitle || title;
</script>

<section class="relative w-full" style="background-color: {backgroundColor};">
  <div class="container mx-auto py-12 px-4 md:px-2 lg:px-18 flex justify-between items-center">
    <h1 class="text-4xl font-light-bold" style="color: {titleColor};">
      {@html displayTitle}
    </h1>
    {#if subtitle}
      <p class={`text-lg font-light ${subtitleMarginLeft} ${subtitleMarginRight}`} style="color: {titleColor};">
        {subtitle}
      </p>
    {/if}
  </div>
  <div class="w-full px-4 md:px-8 lg:px-20 h-8 flex justify-between items-center" style="background-color: {secondaryColor};">
    <nav class="flex items-center space-x-8" style="color: {subHeaderTextColor};">
      {#each subHeaderLinks as { name, href }}
        <li class="list-none"><a href={href} class="hover:underline font-light" style="color: {subHeaderTextColor};">{name}</a></li>
      {/each}
    </nav>
    {#if extraText}
      <div class="font-light" style="color: {subHeaderTextColor};">
        {@html extraText}
      </div>
    {/if}
  </div>
</section>
