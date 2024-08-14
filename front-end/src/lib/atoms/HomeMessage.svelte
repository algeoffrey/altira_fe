<script>
    export let message = "For founders, please";
    export let linkText = "click here";
    export let linkHref = "/founder-main";
</script>

<p class="text-base md:text-lg font-light">
    {message} <a href={linkHref} class="text-black hover:underline">{linkText}</a>
</p>
