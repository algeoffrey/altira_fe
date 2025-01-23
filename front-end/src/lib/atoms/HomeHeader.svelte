<script>
    export let title = "Invest early in the future you believe in, today";
    export let hookJoinparagraph = "";
    export let hookMemberParagraph = ""
    let formattedTitle = title.replace('Invest early', '<span class="font-bold">Invest early</span>');
    formattedTitle = formattedTitle.replace('today', '<span class="font-bold">today</span>');
</script>

<div class="text-[#F7E6E6]">
    <h1 class="text-3xl font-light md:text-5xl md:leading-tight">
        {@html formattedTitle}
    </h1>
    <p class="mt-10 text-base md:text-lg font-light">{hookJoinparagraph}</p>
    <p class = "font-[700] mt-10 mb-10 text-base md:text-lg">{hookMemberParagraph}</p>
</div>
