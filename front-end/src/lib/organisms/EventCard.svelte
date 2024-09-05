<script>
    import EventDetails from '/src/lib/molecules/EventDetails.svelte';
    export let title = "";
    export let date = "";
    export let location = "";
    export let description = "";
    export let buttonLabel = "Register";
    export let imageSrc = "/images/placeholder-image.png"; // Placeholder image by default
</script>

<div class="mb-6 flex">
    <!-- Event Image -->
    <div class="w-2/5">
        <img src={imageSrc} alt={title} class="object-cover w-full h-full rounded-sm" />
    </div>
    
    <!-- Event Info -->
    <div class="ml-6 w-3/5 flex flex-col justify-between">
        <h3 class="text-2xl text-customBlack font-bold mb-2">{title}</h3>
        <div class="py-2">
            <EventDetails {date} {location} />
        </div>
        <p class="text-customBlack text-base font-thin flex-grow mb-4">{description}</p>
        <button class="self-start border border-customBlack text-customBlack py-2 px-4 rounded hover:bg-customBlack hover:text-white">
            {buttonLabel}
        </button>
    </div>
</div>
