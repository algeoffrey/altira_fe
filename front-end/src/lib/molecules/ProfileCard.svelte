<script>
    import Avatar from '/src/lib/atoms/Avatar.svelte';
    import ProfileInfo from '/src/lib/molecules/ProfileInfo.svelte';
  
    export let src = "";
    export let alt = "Profile Image";
    export let name = "Name";
    export let role = "Role";
    export let title = "Title";
  </script>
  
  <div class=" bg-white shadow-lg rounded-lg overflow-hidden w-[150px] h-[280px] sm:w-[220px] sm:h-[300px] md:w-[230px] md:h-[356px]">
    <div class="p-1">
      <Avatar src={src} alt={alt} />
    </div>
    <div class="pb-6 px-2">
      <ProfileInfo {name} {role} {title} />
    </div>
  </div>
  