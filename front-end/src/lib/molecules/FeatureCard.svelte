<script>
    export let title;
    export let content;
    export let icon;
    export let alt;
  </script>
  
  <div class="flex flex-col items-center text-center">
    <div class="mb-4 w-16 h-auto">
        <img src="{icon}" alt="{alt}">
    </div>
    <h4 class="font-bold text-2xl py-6">{title}</h4>
    <p class="text-[1rem] text-black font-[400] px-10332">{content}</p>
  </div>
  