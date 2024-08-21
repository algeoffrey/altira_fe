<script>

    import Subtitle from "../atoms/CardTitle.svelte";
    import Button from "../atoms/ActionButton.svelte";

    export let subtitle = "Asset Owners & Investors";
    export let points = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Praesent nec nibh eu sapien luctus porta quis in dolor.",
        "Aenean a quam fermentum, scelerisque leo sollicitudin, rutrum ligula."
    ];
    export let buttonText = "Learn more";
    export let buttonLink = "#";
</script>

<div class="flex flex-col items-center p-6 px-8  w-10/12">
    <Subtitle text={subtitle} size = "text-2xl" weight="font-light-bold"/>
    <ul class="text-left list-disc list-outside text-sm list-inside my-4 font-thin">
        {#each points as point}
            <li>{point}</li>
        {/each}
    </ul>
    <Button text={buttonText} href={buttonLink} />
</div>
