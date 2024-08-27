<script>
  export let src = "/images/investor_masterclass.png";
  export let alt = "Join Masterclass - Business + Startup Scaling and Funding";
  export let width = "100%"; // Default to 100% width
  export let height = "auto"; // Default to auto height for responsive scaling
  export let objectFit = "cover"; // Optionally control how the image is resized within its container
</script>

<img 
  src={src} 
  alt={alt} 
  class="rounded shadow-lg"
  style="width: {width}; height: {height}; object-fit: {objectFit};" 
/>
