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
    <Avatar src={src} alt={alt} />
    <div class="pb-6">
      <ProfileInfo {name} {role} {title} />
    </div>
  </div>
  