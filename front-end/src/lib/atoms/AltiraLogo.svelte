<script>
    export let theme = "white";
    export let href = "/";
    export let altText = "Altira Logo";
    export let logoSrc = theme === 'white' ? '/images/altira-logo-white.svg' : '/images/altira-logo-black.svg';
    export let size = "h-7.5";
</script>

<a href={href} class="text-xl font-bold">
    <img src={logoSrc} alt={altText} class={size} />
</a>
