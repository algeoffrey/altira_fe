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

<section class="py-12 bg-[#F8F8F8] relative" id="FAQs">
    <section class="py-2 pb-4 max-w-8xl mx-32">
        <h2 class="text-customBlack text-center text-[2rem] font-[800] mb-6">{title}</h2>
        <p class="text-center text-[1.063rem] font-[400] mb-8 px-4 md:px-8 lg:px-14 mx-auto leading-relaxed">{description}</p>
        
        <div class="text-[1.063rem] font-[400]">
        {#each faqs as faq}
            <FAQItem question={faq.question} answer={faq.answer} />
        {/each}
        </div>
    </section>
</section>
