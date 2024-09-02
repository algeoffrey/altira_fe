<script>
    import CheckmarkItem from "../atoms/CheckmarkFeature.svelte";

    export let feature = "";
    export let inspireAvailable = false;
    export let investAvailable = false;
    export let innovateAvailable = false;
</script>

<div class="grid grid-cols-4 gap-4 py-2">
    <div class="font-medium">{feature}</div>
    <CheckmarkItem available={inspireAvailable} />
    <CheckmarkItem available={investAvailable} />
    <CheckmarkItem available={innovateAvailable} />
</div>
