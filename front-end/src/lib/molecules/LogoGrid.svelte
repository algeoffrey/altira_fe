<script>
    import LogoImage from '/src/lib/atoms/LogoImage.svelte';

    export let logos = [
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+1', altText: 'Logo 1' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+2', altText: 'Logo 2' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo 3', altText: 'Logo 3' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+4', altText: 'Logo 4' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+5', altText: 'Logo 5' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+6', altText: 'Logo 6' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+7', altText: 'Logo 7' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+8', altText: 'Logo 8' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+9', altText: 'Logo 9' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+10', altText: 'Logo 10' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+11', altText: 'Logo 11' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+12', altText: 'Logo 12' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+13', altText: 'Logo 13' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+14', altText: 'Logo 14' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+15', altText: 'Logo 15' },
        { imgSrc: 'https://via.placeholder.com/100x50?text=Logo+16', altText: 'Logo 16' }
    ];

    export let maxColumns = 4;
    export let maxRows = 2;

    let currentIndex = 0;

    // Calculate max visible logos based on columns and rows
    const maxItems = maxColumns * maxRows;

    // Calculate the maximum index based on the total number of logos
    const maxIndex = Math.ceil(logos.length / maxItems) - 1;

    // Determine if buttons should be displayed
    $: showButtons = logos.length > maxItems;

    // Calculate the sliding percentage for the container
    $: slidePercentage = -(currentIndex * 100);

    // Move the slider to the left
    function slideLeft() {
        if (showButtons) {
            currentIndex = (currentIndex - 1 + maxIndex + 1) % (maxIndex + 1);
            console.log('Slide Left:', currentIndex);
        }
    }

    // Move the slider to the right
    function slideRight() {
        if (showButtons) {
            currentIndex = (currentIndex + 1) % (maxIndex + 1);
            console.log('Slide Right:', currentIndex);
        }
    }
</script>

<style>
    .slider-wrapper {
        overflow: hidden;
        position: relative;
        padding: 30px 50px; /* Add padding to create space around the logos */
    }

    .slider-container {
        display: flex;
        transition: transform 0.5s ease-in-out;
        width: calc(100% * var(--total-pages));
    }

    .slider-page {
        display: grid;
        width: calc(100% * var(--rows));
        grid-template-columns: repeat(var(--columns), 1fr);
        grid-auto-rows: 1fr;
        gap: 1rem; /* Increase gap between logos */
        flex: 0 0 100%;
    }

    .slider-wrapper button {
        width: 30px;
        height: 40px;
    }
</style>

<div class="slider-wrapper w-full max-w-6xl mx-auto">
    {#if showButtons}
        <!-- Left Arrow Button -->
        <button on:click={slideLeft} class="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl p-2 rounded-full bg-white shadow hover:bg-gray-200 z-10">
            <img src="/images/arrow_left.png" alt="slide left button" class="h-6">
        </button>
    {/if}

    <!-- Slider Container with Animation -->
    <div class="slider-container" style="transform: translateX({slidePercentage}%); --total-pages: {maxIndex + 1};">
        {#each Array(maxIndex + 1) as _, pageIndex}
            <div class="slider-page" style="--columns: {maxColumns}; --rows: {maxRows};">
                {#each logos.slice(pageIndex * maxItems, Math.min((pageIndex + 1) * maxItems, logos.length)) as logo}
                    <div class="flex justify-center items-center p-2">
                        <LogoImage imgSrc={logo.imgSrc} altText={logo.altText} class="max-w-full h-auto" />
                    </div>
                {/each}
            </div>
        {/each}
    </div>

    {#if showButtons}
        <!-- Right Arrow Button -->
        <button on:click={slideRight} class="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl p-2 rounded-full bg-white shadow hover:bg-gray-200 z-10">
            <img src="/images/arrow_right.png" alt="slide right button" class="h-6">
        </button>
    {/if}
</div>
