<script>
    export let message = "For founders, please";
    export let linkText = "click here";
    export let linkHref = "/founder-main";
</script>

<p class="text-[#F7E6E6] text-base md:text-lg font-light text-end align-bottom pt-6">
    {message} <a href={linkHref} class=" hover:underline">{linkText}</a>
</p>
