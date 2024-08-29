<script>
    import CardTitle from '/src/lib/atoms/CardTitle.svelte';
    import ListText from '/src/lib/atoms/ListText.svelte';
    import ActionButton from '/src/lib/atoms/ActionButton.svelte';

    export let title = "Card Title";
    export let content = [];
    export let buttonText = "More Info";
    export let buttonLink = "#";
</script>

<div class="bg-white shadow-md rounded-lg p-6 m-2 text-center border border-gray-200 flex flex-col items-center">
    <div class="pb-6">
        <CardTitle text={title} size="text-xl" />
    </div>
    <div class="pl-6">
        <ListText items={content} />
    </div>
    <ActionButton text={buttonText} href={buttonLink} fontWeight="font-light" />
</div>
