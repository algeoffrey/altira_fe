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
  export let coursePage = false;

  const displayTitle = customTitle || title;
</script>

<section class="relative w-full" style="background-color: {backgroundColor};">
  <div
    class="container py-[3.8rem] pl-6 ml-6 md:pl-16 md:ml-16 flex justify-between items-center"
  >
    <TitleWithSubtitle
      title={displayTitle}
      titleWeight= {titleWeight}
      {subtitle}
      {titleColor}
      subtitleColor={titleColor}
    />
  </div>

<div
    class="w-full h-11 flex justify-between items-center"
    style="background-color: {secondaryColor};"
>
    <!-- Navigation Links -->

    <div class={"px-6 mx-6 md:px-16 md:mx-16"}>
        <Navigation links={subHeaderLinks} color={subHeaderTextColor} coursePage={coursePage} />
    </div>


    <!-- Extra Text -->
    {#if extraText}
        <div class="ml-auto text-right px-12 md:px-20 md:mx-16 lg:px-16 lg:px-16">
            <ExtraText text={extraText} color={subHeaderTextColor} />
        </div>
    {/if}
</div>

</section>
