<script>
    export let text = "Page Title";
    export let color = "#FFFFFF";
    export let size = "text-4xl"; 
    export let weight = "font-light-bold";
  </script>
  
  <h1 class={`${size} ${weight}`} style="color: {color};">
    {@html text}
  </h1>
  