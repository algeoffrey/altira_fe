<script>
    export let title = "Default Title";
    export let description = "Default description goes here.";
</script>

<div class="relative z-10 text-left max-w-full md:max-w-xl lg:max-w-2xl px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32">
    <h1 class="text-3xl md:text-5xl leading-tight">
        <span class="font-bold">{title.split(' ')[0]}</span> {title.slice(title.indexOf(' ') + 1)}
    </h1>
    <p class="mt-4 text-base md:text-lg">{description}</p>
</div>
