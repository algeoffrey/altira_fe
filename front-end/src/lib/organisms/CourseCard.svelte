<script>
  import CourseCardContent from "../molecules/CourseCardContent.svelte";

  export let title = "Course Title";
  export let description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit.";
  export let courseType = "Full Module Course (Certification Available)";
  export let buttonText = "Apply Here";
  export let backgroundColor = "#D1E7F9";
  export let buttonLink = "#";
  export let buttonTheme = "transparent";
  export let buttonVariant = "primary";
  export let buttonTextSize = "text-md";
  export let buttonSize = "px-3 py-2";
</script>

<div
  class="rounded-sm shadow-md py-12 px-6 border border-gray-200"
  style="background-color: {backgroundColor};"
>
  <CourseCardContent
    {title}
    {courseType}
    {description}
    {buttonText}
    {buttonLink}
    {buttonTheme}
    {buttonVariant}
    {buttonTextSize}
    {buttonSize}
  />
</div>
