<script>
    export let feature;
    export let inspireAvailable;
    export let investAvailable;
    export let innovateAvailable;
    export let highlight = false;
</script>

<div class={`grid grid-cols-4 gap-4 text-center items-center py-2 ${highlight ? 'bg-gray-100 rounded-lg' : 'bg-white'} `}>
    <!-- Feature name -->
    <div class="text-left font-light pl-4">
        {feature}
    </div>
    
    <!-- Inspire Availability -->
    <div class="text-center">
        <span class={inspireAvailable === "✔" ? 'text-black font-bold' : 'text-black font-thin'}>{inspireAvailable}</span>
    </div>

    <!-- Invest Availability -->
    <div class="text-center">
        <span class={investAvailable === "✔" ? 'text-black font-bold' : 'text-black font-thin'}>{investAvailable}</span>
    </div>

    <!-- Innovate Availability -->
    <div class="text-center">
        <span class={innovateAvailable === "✔" ? 'text-black font-bold' : 'text-black font-thin'}>{innovateAvailable}</span>
    </div>
</div>
