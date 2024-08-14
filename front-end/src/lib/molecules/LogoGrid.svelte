<script>
    import LogoImage from '$lib/atoms/LogoImage.svelte';

    export let logos = [];
    export let maxColumns = 5;
    export let maxRows = 2;

    const maxItems = maxColumns * maxRows;
    const displayedLogos = logos.slice(0, maxItems);
</script>

<div class="grid gap-4 max-w-5xl mx-auto" style="grid-template-columns: repeat({maxColumns}, 1fr);">
    {#each displayedLogos as logo}
        <div class="flex justify-center items-center p-4" style="height: calc(100% / {maxRows});">
            <LogoImage imgSrc={logo.imgSrc} altText={logo.altText} class="max-w-full h-auto" />
        </div>
    {/each}
</div>
