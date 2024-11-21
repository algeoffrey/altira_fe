<script>
    import EventDetails from '/src/lib/molecules/EventDetails.svelte';
    export let title = "";
    export let date = "";
    export let location = "";
    export let description = "";
    export let buttonLabel = "Register";
    export let imageSrc = "/images/placeholder-image.png"; // Placeholder image by default
</script>

<div class="mb-6 flex flex-col sm:flex-row sm:items-center">
    <!-- Event Image -->
    <div class="w-full sm:w-2/5">
        <img src={imageSrc} alt={title} class="object-cover w-full h-auto rounded-sm" />
    </div>
    
    <!-- Event Info -->
    <div class="mt-4 sm:ml-6 sm:mt-0 sm:w-3/5 flex flex-col justify-between">
        <h3 class="text-lg sm:text-2xl text-customBlack font-bold mb-2">{title}</h3>
        <div class="py-2">
            <EventDetails {date} {location} />
        </div>
        <p class="text-sm sm:text-base text-customBlack font-thin flex-grow mb-4">{description}</p>
        <button class="self-start border border-customBlack text-customBlack py-2 px-4 rounded hover:bg-customBlack hover:text-white">
            {buttonLabel}
        </button>
    </div>
</div>
