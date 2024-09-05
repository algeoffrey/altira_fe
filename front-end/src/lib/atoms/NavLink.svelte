<script>
    export let href = "#";
    export let text = "Link";
    export let theme = "transparent";

    const textColorClass = theme === 'transparent' || theme === 'custom' 
        ? 'text-customBlack font-thin' 
        : 'text-white font-thin';

    const hoverTextColorClass = theme === 'transparent' || theme === 'custom' 
        ? 'hover:text-gray-700 font-thin' 
        : 'hover:text-gray-300 font-thin';
</script>

<a 
    href={href} 
    class={`${textColorClass} ${hoverTextColorClass}`}>
    {text}
</a>

