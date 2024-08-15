<script>
  import TitleWithSubtitle from "../molecules/TitlewithSubtitle.svelte";
  import Navigation from "../molecules/SubHeadingNav.svelte";
  import ExtraText from "../atoms/ExtraText.svelte";

  export let title = "Page Title";
  export let customTitle = null;
  export let subtitle = "";
  export let backgroundColor = "#f8f9fa";
  export let secondaryColor = "#6c757d";
  export let subHeaderLinks = [];
  export let titleColor = "#FFFFFF";
  export let subHeaderTextColor = "#FFFFFF";
  export let extraText = "";
  export let subtitleMarginLeft = "ml-auto";
  export let subtitleMarginRight = "";

  const displayTitle = customTitle || title;
</script>

<section class="relative w-full" style="background-color: {backgroundColor};">
  <div
    class="container mx-auto py-12 px-4 md:px-2 lg:px-18 flex justify-between items-center"
  >
    <TitleWithSubtitle
      title={displayTitle}
      {subtitle}
      {titleColor}
      subtitleColor={titleColor}
      {subtitleMarginLeft}
      {subtitleMarginRight}
    />
  </div>
  <div
    class="w-full px-4 md:px-8 lg:px-20 h-8 flex justify-between items-center"
    style="background-color: {secondaryColor};"
  >
    <Navigation links={subHeaderLinks} color={subHeaderTextColor} />
    {#if extraText}
      <ExtraText text={extraText} color={subHeaderTextColor} />
    {/if}
  </div>
</section>

