<script>
    export let text = "";
    export let size = "text-base";
    export let fontStyle = "font-light";
    export let textAlign = "text-center";
</script>

<p class={`${size} ${fontStyle} ${textAlign} max-w-4xl mx-auto py-8`}>
    {text}
</p>
