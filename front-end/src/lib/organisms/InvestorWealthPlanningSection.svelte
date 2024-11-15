<script>
    import CourseCard from "/src/lib/organisms/CourseCard.svelte";
  
    export let buttonTextSize = "text-lg";
    export let buttonSize = "px-8 py-2";
    export let buttonTheme =  "black";
    export let buttonVariant = "secondary";

    export let courses = [
      {
        title: "Early Stage & Startup Investing",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
        courseType: "Full Module Course (Certification Available)",
        backgroundColor: "#D0E1ED",
        buttonLink: "/investor-course-early-stage-investing-in-emerging-companies",
      },
      {
        title: "Wealth Planning Fundamentals",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
        courseType: "Masterclasses (Certification Available)",
        backgroundColor: "#CFC9EF",
        buttonLink: "/investor-course-wealth-planning-fundamentals"
      },
    ];
  
    export let introText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt. Etiam laoreet consequat ligula, eu tempus eros convallis porta. Etiam vel auctor metus. Praesent nec scelerisque nisi, nec rhoncus justo. Vivamus mollis lobortis suscipit. Aenean consectetur, felis in gravida accumsan, nunc ex tempus lacus, in ultrices dolor tellus ut augue. Mauris non purus et sapien sollicitudin rutrum nec facilisis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum posuere nisl, eu ornare nulla maximus ac.";
    export let title = "Investing & Wealth Planning";
</script>
  
<section class="py-12 bg-white relative">
  <div class="px-6 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto">
    <!-- Introductory Text -->
    <p class="text-left text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-12 font-light">
      {introText}
    </p>
    
    <!-- Title -->
    <h2 class="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-8 md:mb-12" id="investing-wealth-planning">
      {title}
    </h2>
    
    <!-- Course Cards Grid -->
    <div class="flex justify-center">
      <div class="grid px-12 sm:px-0 grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
        {#each courses as course}
          <div class="flex justify-center">
            <CourseCard 
              title={course.title}
              description={course.description}
              courseType={course.courseType}
              backgroundColor={course.backgroundColor}
              buttonLink={course.buttonLink}
              buttonTheme={buttonTheme}
              buttonVariant={buttonVariant}
              buttonTextSize={buttonTextSize}
              buttonSize={buttonSize}
            />
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

