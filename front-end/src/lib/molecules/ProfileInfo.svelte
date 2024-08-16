<script>
    import NameText from '/src/lib/atoms/NameText.svelte';
    import RoleText from '/src/lib/atoms/RoleText.svelte';
    import TitleText from '/src/lib/atoms/RoleTitle.svelte';
  
    export let name = "Name";
    export let role = "Role";
    export let title = "Title";
  </script>
  
  <div class="flex flex-col items-center">
    <NameText text={name} />
    <RoleText text={role} />
    <TitleText text={title} />
  </div>
  