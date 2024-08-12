<script>
    export let title = "Card Title";
    export let content = "";
    export let buttonText = "More Info";
    export let buttonLink = "#";
  </script>
  
  <div class="bg-white shadow-md rounded-lg p-10 m-5 text-center border border-gray-200">
    <h3 class="text-lg font-semibold mb-3">{title}</h3> 
    <ul class="text-left text-sm list-disc pl-5 mb-4 font-light"> 
      {@html content}
    </ul>
    <a href={buttonLink} class="inline-block px-6 py-2 bg-black text-white rounded hover:bg-gray-800 text-sm"> <!-- Smaller button -->
      {buttonText}
    </a>
  </div>
  