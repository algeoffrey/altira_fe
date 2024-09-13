<script>
    import CourseCardTitle from '/src/lib/atoms/CourseCardTitle.svelte';
    import CourseCardDesc from '/src/lib/atoms/CourseCardDesc.svelte';
    import CourseCardBadge from '/src/lib/atoms/CourseCardBadge.svelte';
    import ActionButton from '/src/lib/atoms/ActionButton.svelte';
  
    export let title = "Course Title";
    export let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit.";
    export let courseType = "Full Module Course (Certification Available)";
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
      <div class="mb-4 min-h-[3rem]">
        <CourseCardTitle text={title} />
      </div>
  
      <!-- Badge Section -->
      <div class="mb-4">
        <div class="h-12 flex items-center">
          <CourseCardBadge text={courseType} />
        </div>
      </div>
  
      <!-- Description Section -->
      <div class="mb-6">
        <div class="min-h-[3rem]">
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
  