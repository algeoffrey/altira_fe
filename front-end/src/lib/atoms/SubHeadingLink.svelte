<script>
    export let href = "#";
    export let text = "";
    export let color = "#FFFFFF";
    export let hoverColor = "hover:underline";
    export let weight = "font-light";
  </script>
  
  <li class="list-none">
    <a href={href} class={`${hoverColor} ${weight}`} style="color: {color};">
      {text}
    </a>
  </li>
  