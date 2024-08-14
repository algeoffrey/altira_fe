<script>
    export let text = "";
    export let color = "#FFFFFF";
    export let size = "text-lg";
    export let weight = "font-light";
    export let marginRight = "";
  </script>
  
  <p class={`${size} ${weight} text-right ${marginRight} ml-auto`} style="color: {color};">
    {text}
  </p>
  