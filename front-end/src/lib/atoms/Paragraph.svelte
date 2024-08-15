<script>
    export let text = "";
    export let size = "text-base";
    export let fontStyle = "font-light";
    export let textAlign = "text-center";
    export let textMaxWidth = "max-w-4xl";
</script>

<p class={`${size} ${fontStyle} ${textAlign} ${textMaxWidth} mx-auto py-3`}>
    {@html text}
</p>
