<script>
    import Price from '../atoms/Price.svelte';

    export let title;
    export let price;
    export let description;
    export let translated = false;
    export let originalCurrency = "USD";
    export let conversions = [
        { currency: "SGD", rate: 0.000091 },
        { currency: "USD", rate: 0.000068 }
    ]

</script>

<div class="flex flex-col items-center p-4">
    <h3 class="text-2xl font-semibold">{title}</h3>
    <Price 
        currency="Rp" 
        country="" 
        amount={price} 
        translated={translated} 
        originalCurrency={originalCurrency} 
        conversions={conversions} 
    />
    <p class="text-sm text-black font-thin mt-2 whitespace-pre-line">{description}</p>
</div>
