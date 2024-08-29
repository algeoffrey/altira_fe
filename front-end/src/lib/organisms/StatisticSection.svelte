<script>

    import StatisticCard from "../molecules/StatisticsCard.svelte";

    export let statistics = [
      { value: "100T", content: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { value: "4x", content: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { value: "169%", content: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
    ];
  </script>
  
  <section class="py-8 bg-white">
    <h3 class="text-xl md:text-3xl font-bold text-center mb-8 max-w-4xl py-4 mx-auto">Southeast Asia Digital & Innovation Economy</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {#each statistics as stat}
        <StatisticCard {...stat} />
      {/each}
    </div>
  </section>
  