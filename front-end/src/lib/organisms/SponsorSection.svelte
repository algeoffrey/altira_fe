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

<section class="py-4 bg-white">
  <div class="container mx-auto px-4 md:px-6 lg:px-8 text-center">
    <!-- Title -->
    {#if title}
      <SponsorSectionTitle text={title} size="text-2xl md:text-3xl font-bold" />
    {/if}

    <!-- Subtitle -->
    {#if subtitle}
      <Subtitle text={subtitle} size="text-xl md:text-2xl" />
    {/if}

    <!-- Paragraph -->
    <Paragraph
      text={paragraph}
      size="text-base md:text-lg"
      fontStyle="font-light"
      textAlign="text-center"
    />

    <!-- Logo Grid -->
    <div class="flex justify-center items-center py-8">
      <LogoGrid {logos} {maxColumns} {maxRows} />
    </div>

    <!-- See More Link -->
    <div class="text-right mt-8 max-w-5xl mx-auto">
      <LinkButton href={seeMoreLink} text={linkText} />
    </div>
  </div>
</section>
