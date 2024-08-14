<script>
    import FooterLink from '$lib/atoms/FooterLink.svelte';

    export let links = [];
</script>

<div class="grid gap-2">
    {#each links as { text, href }}
        <FooterLink {text} {href} />
    {/each}
</div>
