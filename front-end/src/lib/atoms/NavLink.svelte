<script>
    export let href = "#";
    export let text = "Link";
    export let theme = "transparent";
    export let fontWeight = "font-thin";

    const textColorClass = theme === 'transparent' || theme === 'custom' 
        ? 'text-black' 
        : 'text-white';

    const hoverTextColorClass = theme === 'transparent' || theme === 'custom' 
        ? 'hover:text-gray-700' 
        : 'hover:text-gray-300';
</script>

<a href={href} class={`${textColorClass} ${hoverTextColorClass} ${fontWeight}`}>
    {text}
</a>
