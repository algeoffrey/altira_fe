<script>
    export let logos = [];
    export let maxColumns = 5;
    export let maxRows = 2;
    export let title = "Networking";
    export let seeMoreLink = "#";

    const maxItems = maxColumns * maxRows;
    const displayedLogos = logos.slice(0, maxItems);
</script>

<section class="py-12 bg-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-center">{title}</h2>
        <div class="flex justify-center items-center py-8">
            <div class="grid gap-2" style="grid-template-columns: repeat({maxColumns}, 1fr); max-w-4xl mx-auto">
                {#each displayedLogos as { imgSrc, altText, link }}
                    <div class="flex justify-center items-center p-4">
                        {#if link}
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={imgSrc} alt={altText} class="max-h-12 max-w-full" />
                            </a>
                        {:else}
                            <img src={imgSrc} alt={altText} class="max-h-12 max-w-full" />
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
        <div class="text-right mt-8 max-w-4xl mx-auto">
            <a href={seeMoreLink} class="text-sm font-thin hover:underline">See More ></a>
        </div>
    </div>
</section>
