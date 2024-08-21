<script>
    import FAQItem from "../molecules/FAQItem.svelte";

    export let title = "FAQs";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in.";
    export let faqs = [
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in."
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in."
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in."
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in."
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in."
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in."
        },
    ];
</script>

<section class="bg-[#F8F8F8]">
    <section class="py-8 pt-12 mb-4 md:pt-16 md:py-12 px-4 md:px-8 lg:px-12 max-w-full md:max-w-7xl mx-auto">
        <h2 class="text-center text-2xl md:text-[2rem] font-semibold mb-6">{title}</h2>
        <p class="text-center text-sm md:text-[1.2rem] font-thin mb-8 px-4 md:px-8 lg:px-14 mx-auto">{description}</p>
        
        <div class="text-base md:text-[1.15rem]">
        {#each faqs as faq}
            <FAQItem question={faq.question} answer={faq.answer} />
        {/each}
        </div>
    </section>
</section>
