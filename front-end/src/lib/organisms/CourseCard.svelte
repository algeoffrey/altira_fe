<script>
    import CourseCardContent from '$lib/molecules/CourseCardContent.svelte';

    export let title = "Course Title";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit.";
    export let courseType = "Full Module Course (Certification Available)";
    export let buttonText = "Apply Here";
    export let backgroundColor = "#D1E7F9";
    export let buttonLink = "#";
</script>

<div class="rounded-sm shadow-md p-8 border border-gray-200" style="background-color: {backgroundColor};">
    <CourseCardContent 
        {title}
        {courseType}
        {description}
        buttonText={buttonText}
        buttonLink={buttonLink}
    />
</div>
