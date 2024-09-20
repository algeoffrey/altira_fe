<script>
    import FeatureCard from "../molecules/FeatureCard.svelte";
    
    export let title = "Join and invest with trusted and reputable <br> private investing network and innovation platform";
    export let features = [
      { 
        title: "Highly-Vetted Deals", 
        content: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
        icon: `/images/deal_icon.png`,
        alt: ''
      },
      { 
        title: "Diversified Assets", 
        content: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
        icon: `images/asset_icon.png` 
      },
      { 
        title: "Future Innovation", 
        content: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
        icon: `images/innovation_icon.png` 
      }
    ];
  </script>
  
  <section class="py-8 bg-white">
    <h3 class="text-customBlack text-[2rem] font-[800] text-center mb-8 max-w-[65%] mx-auto py-5 leading-relaxed">Join and invest with trusted and reputable <br> private investing network and innovation platform</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {#each features as feature}
        <FeatureCard {...feature} />
      {/each}
    </div>
  </section>
  