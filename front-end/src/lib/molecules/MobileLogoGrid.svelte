<script>
    export let logos = [
      { src: "images/sponsor_logo/innovation_pioneers/1-nexian.png", alt: "Nexian" },
      { src: "images/sponsor_logo/innovation_pioneers/2-carro.png", alt: "Carro" },
      { src: "images/sponsor_logo/innovation_pioneers/3-kudo.webp", alt: "Kudo" },
      { src: "images/sponsor_logo/innovation_pioneers/4-bukalapak.png", alt: "Bukalapak" },
      { src: "images/sponsor_logo/innovation_pioneers/5-moka.webp", alt: "Moka" },
      { src: "/images/sponsor_logo/innovation_pioneers/6-indotrading.png", alt: "Indotrading" },
      { src: "images/sponsor_logo/innovation_pioneers/7-vidio.png", alt: "Vidio" },
      { src: "images/sponsor_logo/innovation_pioneers/8-doogether.webp", alt: "Doogether" },
      { src: "images/sponsor_logo/innovation_pioneers/9-sepulsa.jpeg", alt: "Sepulsa" },
    ];
  </script>
  
  <div class="grid grid-cols-3 gap-4 items-center justify-center">
    {#each logos as logo}
      <div class="flex justify-center">
        <img src={logo.src} alt={logo.alt} class="h-18 object-contain" />
      </div>
    {/each}
  </div>
  