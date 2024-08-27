<script>
    export let title = "Card Title";
  </script>
  
  <div class="border border-[#C4C4C4] rounded-lg">
    <div class="grid justify justify-items-strecth bg-[#F8F8F8] border-b border-b-[#C4C4C4]">
      <h3 class="text-[1.4rem] justify-self-center font-bold p-6">{title}</h3>
    </div>
    <div class="text-left p-6">
      <slot></slot>
    </div>  
  </div>
  