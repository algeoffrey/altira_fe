<script>
    export let title;
    export let price;
    export let description;
</script>

<div class="p-4 bg-gray-100 rounded-lg shadow">
    <h3 class="text-xl font-semibold">{title}</h3>
    <p class="text-3xl font-bold my-2">{price}</p>
    <p class="text-sm text-gray-500 whitespace-pre-line">{description}</p> <!-- whitespace-pre-line to handle \n in description -->
</div>
