<script>

    import ActionButton from "../atoms/ActionButton.svelte";

    export let title = "Ready to Join Us & Learn More?";
    export let button = {
        description : "Investor Coffee Chat",
        href : "https://docs.google.com/forms/d/e/1FAIpQLSe487LYPgJ2mhTJjUfPqBL9-2Re-VrodFr0-1jTolqFL_VM7w/viewform"
    }
</script>

<section class = "text-center bg-[#F8F8F8] py-8 sm:py-12 relative mx-auto px-4 sm:px-12 md:px-16 lg:px-32">
    <h2 class="text-center text-[#363338] font-[800] text-[1.5rem] sm:text-[1rem] md:text-[2rem] mt-[3.75rem] mb-[2.1rem]">{title}</h2>
    <div class="flex items-center justify-center">
        <ActionButton
    text= {button.description}
    href = {button.href}
    bordersize = "px-4 py-4";
    />
    </div>
    
</section>