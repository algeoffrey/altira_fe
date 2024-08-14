<script>
    export let theme = "white"
    export let href = "/";
    export let altText = "Altira Logo";
    export let logoSrc = theme === 'white' ? '/images/altira-logo-white.svg' : '/images/altira-logo-black.svg';
</script>

<a href={href} class="text-xl font-bold mr-10">
    <img src={logoSrc} alt={altText} class="h-8" />
</a>
