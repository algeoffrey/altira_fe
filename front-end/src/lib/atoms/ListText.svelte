<script>
    export let items = [];
    export let textSize = "text-sm"
    export let weight = "font-light"
</script>

<ul class="text-left {textSize} list-disc mb-4 leading-relaxed {weight}}">
    {#each items as item}
        <li>{item}</li>
    {/each}
</ul>
