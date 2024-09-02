<script>
    export let text;
    export let type = "p";
    export let align = "text-center";
    export let size = "text-lg";
    export let weight = "font-light";
</script>

<svelte:element this={type} class="{align} {size} {weight} mb-4">
    {text}
</svelte:element>
