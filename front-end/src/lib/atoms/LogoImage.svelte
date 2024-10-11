<script>
    export let imgSrc = '';
    export let altText = '';
    export let link = '';
    export let width = 211;
    export let height = 211; 
</script>

{#if link}
    <a href={link} target="_blank" rel="noopener noreferrer" class="block">
        <img src={imgSrc} alt={altText} style="width: {width}px; height: {height}px;" class="logo-image object-contain" />
    </a>
{:else}
    <img src={imgSrc} alt={altText} style="width: {width}px; height: {height}px;" class="logo-image object-contain" />
{/if}

<style>
    .logo-image {
        object-fit: contain;
    }
</style>
