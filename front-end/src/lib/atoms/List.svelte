<script>
    export let items = [];
    export let size = "text-base";
  </script>
  
  <ul class=" {size} font-light leading-relaxed text-left list-disc pl-5">
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
  