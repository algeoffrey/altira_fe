<script>
    export let imgSrc = '';
    export let altText = '';
    export let link = '';
</script>

{#if link}
    <a href={link} target="_blank" rel="noopener noreferrer" class="block">
        <img src={imgSrc} alt={altText} class="max-w-full mx-auto h-auto" />
    </a>
{:else}
    <img src={imgSrc} alt={altText} class="max-w-full mx-auto h-auto" />
{/if}
