<script>
    import Avatar from '/src/lib/atoms/Avatar.svelte';
    import ProfileInfo from '/src/lib/molecules/ProfileInfo.svelte';
  
    export let src = "";
    export let alt = "Profile Image";
    export let name = "Name";
    export let role = "Role";
    export let title = "Title";
  </script>
  
  <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="p-1">
      <Avatar src={src} alt={alt} />
    </div>
    <div class="pb-6 px-2">
      <ProfileInfo {name} {role} {title} />
    </div>
  </div>
  