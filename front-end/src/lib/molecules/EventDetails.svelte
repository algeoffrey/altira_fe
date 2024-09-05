<script>
    import IconAtom from '/src/lib/atoms/IconAtom.svelte';

    export let date = "";
    export let location = "";
</script>

<div class="flex items-center mb-1">
    <p class="mb-2 text-customBlack bg-[#F0F0F0] px-6 font-thin">{date}</p>
</div>
<div class="flex items-center mb-2">
    <IconAtom iconSrc="/images/location_icon.svg" altText="Location Icon" />
    <p class="ml-2 text-customBlack font-thin ">{location}</p>
</div>


