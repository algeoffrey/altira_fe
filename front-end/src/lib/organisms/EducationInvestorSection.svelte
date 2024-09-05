<script>
    import ActionButton from "../atoms/ActionButton.svelte";

    export let title = "Investor Education";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in.";

    export let text = "Register for a course";
    export let theme = "transparent";
    export let variant = "primary";
    export let href = "/investor-learn-hub";
    export let fontWeight = "font-normal";
    export let size = "text-md";
    export let bordersize = "px-12 py-2 md:px-28 md:py-2";
</script>

<section class="py-20 bg-[#F4F4F4] relative">
    <section class="max-w-8xl mx-32 ">
        <div class="w-full px-8 md:px-16 lg:px-32 flex flex-col items-center text-center">
        
            <!-- Title -->
            <h2 class="mb-8 text-xl md:text-[2rem] font-semibold">{title}</h2>
    
            <!-- Description -->
            <p class="mb-8 text-sm md:text-base font-light">{description}</p>
            
            <!-- Action Button -->
            <div>
                <ActionButton 
                    {text} 
                    {theme} 
                    {variant} 
                    {href} 
                    {fontWeight} 
                    {size} 
                    {bordersize} 
                />
            </div>
        </div>
    </section>
</section>
