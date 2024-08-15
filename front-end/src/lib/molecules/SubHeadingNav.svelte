<script>
    import NavLink from '/src/lib/atoms/SubHeadingLink.svelte';
  
    export let links = []; // Array of { name, href }
    export let color = "#FFFFFF";
  </script>
  
  <nav class="flex items-center space-x-8">
    {#each links as { name, href }}
      <NavLink href={href} text={name} color={color} />
    {/each}
  </nav>
  