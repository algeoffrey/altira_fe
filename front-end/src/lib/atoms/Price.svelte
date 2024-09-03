<script>
    export let currency = "Rp";
    export let country = "";
    export let amount = "0";
    export let extraText = true;
    export let translated = false;
    export let originalCurrency = "USD";
    export let conversions = []; // Array to hold conversion objects with currency and rate

    // Calculate the conversion amounts
    $: conversionValues = conversions.map(conversion => ({
        currency: conversion.currency,
        value: (amount * conversion.rate).toFixed(2)
    }));
</script>

<style>
    .tooltip {
        position: relative;
        display: inline-block;
        cursor: pointer;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: #363338;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 125%; /* Position above the icon */
        left: 50%;
        margin-left: 15px; /* Center the tooltip */
        opacity: 0;
        transition: opacity 0.4s;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }

    .price-container {
        display: flex;
        align-items: flex-start;
    }

    .price-currency {
        align-self: flex-start;
        margin-top: 0.1rem;
        margin-right: 0.25rem;
    }

    .price-amount {
        font-size: 2rem;
        font-weight: 200;
        line-height: 1;
    }

    .tooltip {
        align-self: flex-start;
        margin-top: 0.3rem;
        margin-left: 0.5rem;
    }
</style>

<div class="price-container mt-2">
    <div class="price-currency text-sm leading-none font-light">{currency}</div>
    <div class="flex flex-col items-center">
        <div class="price-amount">{amount}</div>
        {#if country !== ""}
            <div class="text-xs text-gray-500 font-light ">{country}</div>
        {/if}
    </div>
    {#if translated}
        <div class="tooltip">
            <!-- Using the provided SVG as an icon -->
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg>
            <span class="tooltiptext">
                <!-- Loop through the calculated conversion values -->
                {#each conversionValues as conversion}
                    {conversion.value} {conversion.currency}<br>
                {/each}
            </span>
        </div>
    {/if}
</div>
