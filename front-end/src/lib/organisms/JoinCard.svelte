<script>
    import CourseCardContent from '$lib/molecules/JoinCardContent.svelte';

    export let title = "Course Title";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit.";
    export let buttonText = "Apply Here";
    export let backgroundColor = "#D1E7F9";
    export let buttonLink = "#";
    export let buttonTheme = "transparent";
    export let ButtonVariant = "primary";
</script>

<div class="rounded-sm shadow-md p-8 border border-gray-200" style="background-color: {backgroundColor};">
    <CourseCardContent 
        {title}
        {description}
        buttonText={buttonText}
        buttonLink={buttonLink}
        ButtonTheme={buttonTheme}
        ButtonVariant = {ButtonVariant}
    />
</div>
