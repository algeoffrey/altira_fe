<script>
    export let iconSrc = "";
    export let altText = "";
    export let size = "h-6 w-6"; // Default size
</script>

<img src={iconSrc} alt={altText} class={`inline-block ${size}`} />
