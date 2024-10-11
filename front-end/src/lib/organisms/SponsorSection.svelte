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

<section class="bg-white relative py-12">
  <div class="max-w-10xl mx-32">
    <div class="text-center">
      {#if title}
        <SponsorSectionTitle text={title} size="text-[2rem] font-[800] text=customBlack" />
      {/if}
  
      {#if subtitle}
        <Subtitle text={subtitle} size="text-[1.563rem] font-[600] text-customBlack pt-6 md:pt-8" />
      {/if}
  
      <div class="max-w-4xl mx-auto mt-4">
        <Paragraph
          text={paragraph}
          size="text-[1rem] font-[400]"
          fontStyle="font-light"
          textAlign="text-center"
        />
      </div>
    </div>
  
    <!-- Logo Grid -->
    <div class="flex justify-center items-center pb-6">
      <LogoGrid {logos} {maxColumns} {maxRows} {gap} {width} {height} />
    </div>
  
    {#if showmore === "Y"}
      <div class="text-right mt-6 mr-16">
        <LinkButton href={seeMoreLink} text={linkText} />
      </div>
    {/if}

  </div>
</section>
