<script>
    import NameText from '$lib/atoms/NameText.svelte';
    import RoleText from '$lib/atoms/RoleText.svelte';
    import TitleText from '$lib/atoms/RoleTitle.svelte';
  
    export let name = "Name";
    export let role = "Role";
    export let title = "Title";
  </script>
  
  <div class="flex flex-col items-center">
    <NameText text={name} />
    <RoleText text={role} />
    <TitleText text={title} />
  </div>
  