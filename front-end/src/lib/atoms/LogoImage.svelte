<script>
    export let imgSrc = '';
    export let altText = '';
    export let link = '';
</script>

{#if link}
    <a href={link} target="_blank" rel="noopener noreferrer" class="block">
        <img src={imgSrc} alt={altText} class="logo-image w-full h-full object-contain" />
    </a>
{:else}
    <img src={imgSrc} alt={altText} class="logo-image w-full h-full object-contain" />
{/if}

<style>
    .logo-image {
        max-width: 95%; /* Allow it to fill the width of its container */
        height: 95%; /* Allow it to fill the height of its container */
        object-fit:contain;
    }
</style>
