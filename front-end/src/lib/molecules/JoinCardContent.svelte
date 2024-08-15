<script>
    import CardTitle from '$lib/atoms/CourseCardTitle.svelte';
    import CardDesc from '$lib/atoms/CourseCardDesc.svelte';
    import ActionButton from '$lib/atoms/ActionButton.svelte';

    export let title = "Course Title";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit.";
    export let buttonText = "Apply Here";
    export let buttonLink = "#";
    export let ButtonTheme = "transparent";
    export let ButtonVariant = "primary"
</script>

<div class="flex flex-col items-start text-left">
    <CardTitle text={title} />
    <CardDesc text={description} />
    <ActionButton text={buttonText} href={buttonLink} theme = {ButtonTheme} variant = {ButtonVariant}/>
</div>
