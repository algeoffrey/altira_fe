<script>
    import LogoImage from '$lib/atoms/LogoImage.svelte';

    export let logos = [];
    export let maxColumns = 5;
    export let maxRows = 2;

    const maxItems = maxColumns * maxRows;
    const displayedLogos = logos.slice(0, maxItems);
</script>

<div class="grid gap-2" style="grid-template-columns: repeat({maxColumns}, 1fr);">
    {#each displayedLogos as logo}
        <div class="flex justify-center items-center p-4">
            <LogoImage imgSrc={logo.imgSrc} altText={logo.altText} link={logo.link} />
        </div>
    {/each}
</div>
