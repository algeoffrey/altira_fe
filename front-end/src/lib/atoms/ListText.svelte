<script>
    export let items = [];
</script>

<ul class="text-left text-sm list-disc pl-5 mb-4 font-light">
    {#each items as item}
        <li>{item}</li>
    {/each}
</ul>
