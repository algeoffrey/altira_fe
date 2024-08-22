<script>
    export let items = [];
</script>

<ul class="text-left text-base list-disc pl-5 mb-4 leading-relaxed font-light">
    {#each items as item}
        <li>{item}</li>
    {/each}
</ul>
