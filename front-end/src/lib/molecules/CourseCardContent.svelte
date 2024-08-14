<script>
    import CourseCardTitle from '$lib/atoms/CourseCardTitle.svelte';
    import CourseCardDesc from '$lib/atoms/CourseCardDesc.svelte';
    import CourseCardBadge from '$lib/atoms/CourseCardBadge.svelte';
    import ActionButton from '$lib/atoms/ActionButton.svelte';

    export let title = "Course Title";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit.";
    export let courseType = "Full Module Course (Certification Available)";
    export let buttonText = "Apply Here";
    export let buttonLink = "#";
</script>

<div class="flex flex-col items-start text-left">
    <CourseCardTitle text={title} />
    <CourseCardBadge text={courseType} />
    <CourseCardDesc text={description} />
    <ActionButton text={buttonText} href={buttonLink} />
</div>
