<script>
    export let title = "Invest early in the future you believe in, today";
    export let description = "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

    let formattedTitle = title.replace('Invest', '<span class="font-bold">Invest</span>');
    formattedTitle = formattedTitle.replace('today', '<span class="font-bold">today</span>');
</script>

<div>
    <h1 class="text-3xl md:text-5xl leading-tight">
        {@html formattedTitle}
    </h1>
    <p class="mt-7 text-base md:text-lg font-light">{description}</p>
</div>
