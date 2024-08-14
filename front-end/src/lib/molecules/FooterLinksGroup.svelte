<script>
    import FooterLink from '$lib/atoms/FooterLink.svelte';

    export let links = [];
</script>

<div class="flex flex-col space-y-2">
    {#each links as { text, href }}
        <FooterLink {text} {href} />
    {/each}
</div>
