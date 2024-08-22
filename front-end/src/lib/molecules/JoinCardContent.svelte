<script>
    import CourseCardTitle from '/src/lib/atoms/CourseCardTitle.svelte';
    import CourseCardDesc from '/src/lib/atoms/CourseCardDesc.svelte';
    import CourseCardBadge from '/src/lib/atoms/CourseCardBadge.svelte';
    import ActionButton from '/src/lib/atoms/ActionButton.svelte';
  
    export let title = "Course Title";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit.";    
    export let buttonText = "Apply Here";
    export let buttonLink = "#";
    export let buttonTheme = "transparent";
    export let buttonVariant = "primary";
    export let buttonTextSize = "text-md";
    export let buttonSize = "px-3 py-2";
  </script>
  
  <div class="flex flex-col h-full justify-between">
    <div>
      <!-- Title Section -->
      <div class="mb-2 min-h-[2rem]">
        <CourseCardTitle text={title} size = "text-3xl"/>
      </div>
  
      <!-- Description Section -->
      <div class="mb-8">
        <div class="min-h-[4rem]">
          <CourseCardDesc text={description} />
        </div>
      </div>
    </div>
  
    <!-- Action Button -->
    <div>
      <ActionButton 
        text={buttonText} 
        href={buttonLink} 
        theme={buttonTheme} 
        variant={buttonVariant} 
        size={buttonTextSize} 
        bordersize={buttonSize} 
      />
    </div>
  </div>
  