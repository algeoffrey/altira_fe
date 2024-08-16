<script>
    import CardTitle from '/src/lib/atoms/CardTitle.svelte';
    import ListText from '/src/lib/atoms/ListText.svelte';
    import ActionButton from '/src/lib/atoms/ActionButton.svelte';

    export let title = "Card Title";
    export let content = [];
    export let buttonText = "More Info";
    export let buttonLink = "#";
</script>

<div class="bg-white shadow-md rounded-lg p-8 md:p-10 m-5 text-center border border-gray-200 flex flex-col items-center">
    <CardTitle text={title} size="text-lg" />
    <ListText items={content} />
    <ActionButton text={buttonText} href={buttonLink} fontWeight="font-light" />
</div>
