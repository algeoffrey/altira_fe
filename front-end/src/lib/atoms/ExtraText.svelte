<script>
    export let text = "";
    export let color = "#FFFFFF";
    export let weight = "font-light";
  </script>
  
  <div class={weight} style="color: {color};">
    {@html text}
  </div>
  