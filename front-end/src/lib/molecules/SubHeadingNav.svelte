<script>
  import NavLink from '/src/lib/atoms/SubHeadingLink.svelte';
  
  export let links = [];
  export let color = "text-#363338";
  export let coursePage = false;
</script>

<nav class="flex items-center {coursePage ? 'space-x-2 md:space-x-3' : 'space-x-7 font-thin text-sm'}">
    {#each links as { name, href }, i}
        <NavLink 
            href={href} 
            text={name} 
            color={color}
            weight={coursePage && i === links.length - 1 ? 'font-semibold' : 'font-thin'}
        />
        {#if i < links.length - 1 && coursePage}
            <span class="font-bold {color}">/</span>
        {/if}
    {/each}
</nav>
