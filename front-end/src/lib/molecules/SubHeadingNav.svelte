<script>
    import NavLink from '/src/lib/atoms/SubHeadingLink.svelte';
  
    export let links = []; // Array of { name, href }
    export let color = "#FFFFFF";
  </script>
  
  <nav class="flex items-center space-x-9 text-[0.95rem]">
    {#each links as { name, href }}
      <NavLink href={href} text={name} color={color} />
    {/each}
  </nav>
  