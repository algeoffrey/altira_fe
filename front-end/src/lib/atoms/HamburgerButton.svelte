<script>
    export let isOpen = false;
    export let toggleMenu;
    export let ariaLabel = "Toggle Menu";
    export let hamburgerColor = "black";
</script>

<button 
    type="button" 
    class="ml-auto md:hidden" 
    on:click={toggleMenu} 
    aria-label={ariaLabel}
>
    {#if isOpen}
        <img width = "25px" src="/images/icon/close_icon.svg" alt="Close menu"/>
    {:else}
        <img width= "24px" height= "25px" 
            src={hamburgerColor === "black" 
                ? "/images/icon/icon_hamburger_black.svg" 
                : "/images/icon/icon_hamburger_white.svg"} 
            alt="Hamburger button to expand menu"
        />
    {/if}
</button>
