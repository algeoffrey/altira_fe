<script>
    export let items = [];
    export let textSize = "text-sm"
</script>

<ul class="text-left {textSize} list-disc mb-4 leading-relaxed font-light">
    {#each items as item}
        <li>{item}</li>
    {/each}
</ul>
