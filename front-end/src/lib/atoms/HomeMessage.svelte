<script>
    export let message = "For founders, please";
    export let linkText = "click here";
    export let linkHref = "#";
</script>

<p class="text-base md:text-lg">
    {message} <a href={linkHref} class="text-black hover:underline"><u>{linkText}</u></a>
</p>
