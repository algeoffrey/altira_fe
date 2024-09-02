<script>
    import ActionButton from "../atoms/ActionButton.svelte";
    import Text from "../atoms/Text.svelte";
    import Price from "../atoms/Price.svelte";
    import CheckmarkItem from "../atoms/CheckmarkItem.svelte";

    export let title;
    export let description;
    export let buttonText;
    export let buttonHref;
    export let buttonVariant = "primary"; // Button variant customization
    export let buttonTheme = "transparent"; // Button theme customization
    export let features = [];
    export let price = "0";
</script>

<div class="bg-white px- py-6 rounded-lg shadow-md flex flex-col items-center max-w-[16rem]">
    <Text text={title} type="h3" size="text-2xl" weight="font-bold" />
    <Text text={description} type="p" size="text-sm" weight="font-light"/>
    
    <ActionButton 
        text={buttonText} 
        href={buttonHref} 
        variant={buttonVariant} 
        theme={buttonTheme}
        fontWeight="font-semibold" 
        size="text-sm" 
        bordersize="px-16 py-2"
        fullWidth={false} 
    />
    <div class="text-left mt-4 mb-2 space-y-2">
        {#each features as feature}
            <CheckmarkItem text={feature} />
        {/each}
    </div>
    <hr class="my-4 w-3/4" />
    <Price amount={price} />
</div>
