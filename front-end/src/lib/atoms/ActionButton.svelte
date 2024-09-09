<script>
    export let text = "Button";
    export let theme = "transparent";
    export let variant = "primary";
    export let href = "/";
    export let fontWeight = "font-medium";
    export let size = "text-md";
    export let bordersize = "px-3 py-2";
    export let fullWidth = false; 

    const customBlack = '#363338';

    const buttonClasses = variant === "primary"
        ? theme === 'transparent' 
            ? `bg-[${customBlack}] text-white` 
            : theme === 'black' 
                ? `bg-transparent text-white border border-white` 
                : `bg-transparent border border-black text-[${customBlack}]`
        : theme === 'transparent' 
            ? `border border-black text-[${customBlack}] bg-transparent` 
            : theme === 'black' 
                ? `bg-white text-[${customBlack}] border border-[${customBlack}]` 
                : `border-black bg-[${customBlack}] text-white`;
</script>

<button onclick="location.href='{href}'"  type="button" class={`rounded ${bordersize} ${buttonClasses} ${fontWeight} ${size} ${fullWidth ? 'w-full' : ''} flex justify-center items-center`}>
    {text}
</button>
