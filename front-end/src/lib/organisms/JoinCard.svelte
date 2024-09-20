<script>
    import CourseCardContent from '/src/lib/molecules/JoinCardContent.svelte';

    export let title = "Course Title";
    export let subtitle = ""
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit.";
    export let buttonText = "Apply Here";
    export let backgroundColor = "#D1E7F9";
    export let buttonLink = "#";
    export let buttonTheme = "transparent";
    export let buttonVariant = "primary";
    export let buttonTextSize = "text-lg";
    export let buttonSize = "py-3 px-2"
</script>

<div class="rounded-sm shadow-md p-8 border border-gray-200" style="background-color: {backgroundColor};">
    <CourseCardContent 
        {title}
        {subtitle}
        {description}
        buttonText={buttonText}
        buttonLink={buttonLink}
        buttonTheme={buttonTheme}
        buttonVariant = {buttonVariant}
        buttonTextSize = {buttonTextSize}
        buttonSize = {buttonSize}
    />
</div>
