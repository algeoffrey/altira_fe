<script>
  import SponsorSectionTitle from "../atoms/CardTitle.svelte";
  import Subtitle from "../atoms/SubTitle.svelte";
  import Paragraph from "../atoms/Paragraph.svelte";
  import LogoGrid from "../molecules/LogoGrid.svelte";
  import LinkButton from "../atoms/LearnMoreLink.svelte";

  export let logos = [];
  export let maxColumns = 5;
  export let maxRows = 1;
  export let title = "";
  export let subtitle = "";
  export let paragraph = "";
  export let seeMoreLink = "#";
  export let linkText = "See More >";
</script>

<section class="py-6 bg-white">
  <div class="mx-auto px-2 md:px-4 lg:px-6 max-w-6xl text-center">
    <!-- Title -->
    {#if title}
      <SponsorSectionTitle text={title} size="text-2xl md:text-3xl font-bold" />
    {/if}

    <!-- Subtitle -->
    {#if subtitle}
      <Subtitle text={subtitle} size="text-xl md:text-2xl" />
    {/if}

    <div class="mx-auto max-w-4xl">
      <Paragraph
      text={paragraph}
      size="text-base md:text-lg"
      fontStyle="font-light"
      textAlign="text-center"
    />
    </div>


    <!-- Logo Grid -->
    <div class="flex justify-center items-center py-8 flex-wrap gap-6">
      <LogoGrid {logos} {maxColumns} {maxRows} />
    </div>

    <!-- See More Link -->
    <div class="text-right mt-2 max-w-5xl mx-auto">
      <LinkButton href={seeMoreLink} text={linkText} />
    </div>
  </div>
</section>
