<script>
    export let text = "Button";
    export let theme = "transparent";
    export let variant = "primary";

    const buttonClasses = variant === "primary"
        ? theme === 'transparent' 
            ? 'bg-black text-white' 
            : theme === 'black' 
                ? 'bg-transparent text-white border border-white' 
                : 'bg-transparent border border-black text-black'
        : theme === 'transparent' 
            ? 'border border-black text-black bg-transparent' 
            : theme === 'black' 
                ? 'bg-white text-black border border-black' 
                : 'border-black bg-black text-white';
</script>

<button class={`px-4 py-2 rounded ${buttonClasses}`}>
    {text}
</button>
