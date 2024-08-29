<script>
  import Button from '../atoms/ActionButton.svelte';

  export let buttonText = "JOIN COURSE";
  export let buttonHref = "#";
  export let duration = 0;
  export let date = "June 29, 2024";
  export let price = "Rp. 1,000,000";
</script>

<div class="border border-[#C4C4C4] rounded-md">
  <div class="border-b border-b-[#C4C4C4] bg-[#F8F8F8] p-4">

    <div class="flex justify-items-strecth my-4 mx-4 text-center">
      <Button 
        text={buttonText} 
        href={buttonHref} 
        size="text-sm text-sm sm:text-base md:text-base lg:text-lg xl:text-xl" 
        bordersize="py-3 px-0" 
        fullWidth={true} 
      />
    </div>

    <div class="pl-2 mx-2">
      <div class="flex items-center justify-start mb-2 flex-grow-0 flex-shrink-0">
        <img src="/images/duration_icon.png" alt="Duration Icon" class="h-6 w-6 mr-2 flex-shrink-0" />
        <p class="text-sm sm:text-base md:text-base lg:text-md xl:text-lg font-light flex-grow-0 flex-shrink-0">
          {duration} hours duration
        </p>
      </div>

      <div class="flex items-center justify-start mb-2">
        <img src="/images/duration_icon.png" alt="Date Icon" class="h-6 w-6 mr-2 flex-shrink-0" />
        <p class="text-sm sm:text-base md:text-base lg:text-md xl:text-lg font-light flex-grow-0 flex-shrink-0">
          {date}
        </p>
      </div>
    </div>

  </div>
  <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-center p-6">
    {price}
  </p>
</div>
