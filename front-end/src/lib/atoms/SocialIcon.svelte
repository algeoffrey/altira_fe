<script>
    export let iconSrc = "";
    export let altText = "";
    export let link = "#";
</script>

<a href={link} target="_blank" rel="noopener noreferrer" class="inline-block">
    <img src={iconSrc} alt={altText} class="h-6 w-6 md:h-8 md:w-8" />
</a>
