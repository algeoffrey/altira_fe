<script>
    import FAQQuestion from "../atoms/FAQQuestion.svelte";
    import FAQAnswer from "../atoms/FAQAnswer.svelte";
    import ArrowUp from "../atoms/ArrowUp.svelte";
    import ArrowDown from "../atoms/ArrowDown.svelte";

    export let question = "Lorem ipsum dolor sit amet?";
    export let answer = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    export let isOpen = false;

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<div class="border-t border-gray-300 py-6">
    <button class="w-full text-left flex justify-between items-center focus:outline-none" on:click={toggle}>
        <!-- Question Component -->
        <FAQQuestion question={question}/>

        <!-- Arrow Image Component -->
        {#if isOpen}
            <ArrowUp altText="Collapse" />
        {:else}
            <ArrowDown altText="Expand" />
        {/if}
    </button>

    <!-- Answer Component -->
    {#if isOpen}
        <FAQAnswer answer={answer} />
    {/if}
</div>
