<script>
  import SponsorSectionTitle from "../atoms/CardTitle.svelte";
  import Subtitle from "../atoms/SubTitle.svelte";
  import Paragraph from "../atoms/Paragraph.svelte";
  import LogoGrid from "../molecules/LogoGrid.svelte";
  import LinkButton from "../atoms/LearnMoreLink.svelte";

  export let logos = [];
  export let maxColumns = 5;
  export let maxRows = 1;
  export let rowGap = 12;
  export let columnGap = 8;
  export let width = 211;
  export let height = 211;
  export let title = "";
  export let subtitle = "";
  export let paragraph = "";
  export let seeMoreLink = "/ecosystem-profile";
  export let linkText = "See More >";
  export let showAll = false;
</script>

<section class="bg-white relative py-8 md:py-12">
  <div class="max-w-7xl mx-auto">
    <!-- Title and Subtitle -->
    <div class="text-center">
      {#if title}
        <SponsorSectionTitle 
          text={title} 
          size="text-lg md:text-2xl lg:text-[2rem] font-[800] text-customBlack" 
        />
      {/if}
  
      {#if subtitle}
        <Subtitle 
          text={subtitle} 
          size="text-base md:text-lg lg:text-[1.563rem] font-[600] text-customBlack pt-4 md:pt-6 lg:pt-8" 
        />
      {/if}
  
      <!-- Paragraph -->
      {#if paragraph}
        <div class="text-[0.9rem] sm:text-[1rem] font-[400] mb-6 mt-8 sm:mb-8 px-2 max-w-sm sm:max-w-xl md:max-w-5xl lg:max-w-6xl mx-auto leading-relaxed text-left">
          <Paragraph
            text={paragraph}
            fontStyle="font-light"
            textAlign="text-left"
          />
        </div>
      {/if}
    </div>
  
    <!-- Logo Grid -->
    <div class="relative flex justify-center items-center pb-6 md:pb-8">
      <LogoGrid {logos} {maxColumns} {maxRows} {rowGap} {columnGap} {width} {height} />
      
      <!-- "See More" Button -->
      {#if showAll}
        <div class="absolute bottom-0 right-0">
          <LinkButton href={seeMoreLink} text={linkText} />
        </div>
      {/if}
    </div>
  </div>
</section>
