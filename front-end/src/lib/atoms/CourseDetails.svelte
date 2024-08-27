<script>
  export let duration = 0; 
  export let date = "June 29, 2024";
  export let price = "Rp. 1,000,000";
</script>

<div class="text-center mt-6">
  <div class="bg-[#F8F8F8]">
    <div class="flex items-center justify-start mb-2">
      <img src="/images/duration_icon.png" alt="Duration Icon" class="h-6 w-6 mr-2" />
      <p class="text-base font-light">{duration} hours duration</p>
    </div>
  
    <div class="flex items-center justify-start mb-6">
      <img src="/images/duration_icon.png" alt="Date Icon" class="h-6 w-6 mr-2" />
      <p class="text-base font-light">{date}</p>
    </div>
  </div>


  <p class="text-base font-semibold">{price}</p>
</div>
