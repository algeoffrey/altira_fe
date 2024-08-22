<script>
  import TitleWithSubtitle from "../molecules/TitlewithSubtitle.svelte";
  import Navigation from "../molecules/SubHeadingNav.svelte";
  import ExtraText from "../atoms/ExtraText.svelte";

  export let title = "Page Title";
  export let titleWeight = "bold";
  export let customTitle = null;
  export let subtitle = "";
  export let backgroundColor = "#f8f9fa";
  export let secondaryColor = "#6c757d";
  export let subHeaderLinks = [];
  export let titleColor = "#FFFFFF";
  export let subHeaderTextColor = "#FFFFFF";
  export let extraText = "";

  const displayTitle = customTitle || title;
</script>

<section class="relative w-full" style="background-color: {backgroundColor};">
  <div
    class="container mx-auto py-14 px-4 md:lg:px-12 flex justify-between items-center"
  >
    <TitleWithSubtitle
      title={displayTitle}
      titleWeight= {titleWeight}
      {subtitle}
      {titleColor}
      subtitleColor={titleColor}
    />
  </div>

  <script>
    export let secondaryColor = "#f8f8f8";
    export let subHeaderLinks = [];
    export let subHeaderTextColor = "#000";
    export let extraText = "";
</script>

<div
    class="w-full h-12 flex justify-between items-center"
    style="background-color: {secondaryColor};"
>
    <!-- Navigation Links -->
    <div class={"px-6 mx-6 md:px-16 lg:px-16 md:mx-16 lg:mx-16"}>
        <Navigation links={subHeaderLinks} color={subHeaderTextColor} />
    </div>

    <!-- Extra Text -->
    {#if extraText}
        <div class="ml-auto text-right px-12 md:px-20 md:mx-16 lg:px-16 lg:px-16">
            <ExtraText text={extraText} color={subHeaderTextColor} />
        </div>
    {/if}
</div>

</section>

