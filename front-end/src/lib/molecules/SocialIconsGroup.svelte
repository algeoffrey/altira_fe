<script>
    import SocialIcon from '$lib/atoms/SocialIcon.svelte';

    export let icons = [
        { iconSrc: "/images/instagram_icon.svg", altText: "Instagram", link: "#" },
        { iconSrc: "/images/linkedin_icon.svg", altText: "LinkedIn", link: "#" },
        { iconSrc: "/images/email_icon.svg", altText: "Email", link: "#" },
    ];
</script>

<div class="flex space-x-4">
    {#each icons as { iconSrc, altText, link }}
        <SocialIcon {iconSrc} {altText} {link} />
    {/each}
</div>
