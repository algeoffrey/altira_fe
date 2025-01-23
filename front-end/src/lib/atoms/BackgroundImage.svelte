<script>
    export let srcDesktop = "/images/hero-bg.png";
    export let srcTablet = "/images/hero-bg.png";
    export let srcMobile = "/images/hero-bg.png";
    export let altText = "Header Background";
</script>

<div class="absolute inset-0 z-0 overflow-hidden">
    <picture>
        <source srcset={srcDesktop} media="(min-width: 1024px)" />
        <source srcset={srcTablet} media="(max-width: 1024px)" />
        <source srcset={srcMobile} media="(max-width: 640px)" />
        
        <img src={srcDesktop} alt={altText} class="w-full h-full object-cover" />
    </picture>
</div>