<script>
    import SponsorSectionTitle from '$lib/atoms/CardTitle.svelte';
    import LogoGrid from '$lib/molecules/LogoGrid.svelte';
    import LinkButton from '$lib/atoms/LearnMoreLink.svelte';

    export let logos = [];
    export let maxColumns = 5;
    export let maxRows = 1;
    export let title = "Institutional Supporters";
    export let seeMoreLink = "#";
    export let linkText = "";

    
</script>

<section class="py-12 bg-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <SponsorSectionTitle text={title} size="text-2xl md:text-3xl font-bold"/>
        <div class="flex justify-center items-center py-8">
            <LogoGrid logos={logos} maxColumns={maxColumns} maxRows={maxRows} />
        </div>
        <div class="text-right mt-8 max-w-4xl mx-auto">
            <LinkButton href={seeMoreLink} text={linkText} />
        </div>
    </div>
</section>
