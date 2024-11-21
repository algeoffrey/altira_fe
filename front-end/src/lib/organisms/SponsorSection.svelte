<script>
  import SponsorSectionTitle from "../atoms/CardTitle.svelte";
  import Subtitle from "../atoms/SubTitle.svelte";
  import Paragraph from "../atoms/Paragraph.svelte";
  import LogoGrid from "../molecules/LogoGrid.svelte";
  import LinkButton from "../atoms/LearnMoreLink.svelte";

  export let logos = [];
  export let maxColumns = 5;
  export let maxRows = 1;
  export let gap = 15;
  export let width = 211;
  export let height = 211;
  export let title = "";
  export let subtitle = "";
  export let paragraph = "";
  export let seeMoreLink = "/ecosystem-profile";
  export let linkText = "See More >";
  export let showmore = "Y";

</script>

<section class="bg-white relative py-8 md:py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
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
        <div class="max-w-4xl mx-auto mt-4 md:mt-6">
          <Paragraph
            text={paragraph}
            size="text-sm md:text-base lg:text-[1rem] font-[400]"
            fontStyle="font-light"
            textAlign="text-center"
          />
        </div>
      {/if}
    </div>
  
    <!-- Logo Grid -->
    <div class="flex justify-center items-center pb-6 md:pb-8">
      <LogoGrid {logos} {maxColumns} {maxRows} {gap} {width} {height} />
    </div>
  
    <!-- Link Button -->
    {#if showmore === "Y"}
      <div class="text-center md:text-right mt-6 md:mt-8">
        <LinkButton href={seeMoreLink} text={linkText} />
      </div>
    {/if}
  </div>
</section>

