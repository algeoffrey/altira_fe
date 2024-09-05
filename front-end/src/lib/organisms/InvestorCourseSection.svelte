<script>
    import CourseCard from "/src/lib/organisms/CourseCard.svelte";
  
    export let title = "Other Courses";
    export let subtitle = "Investor Education";
    export let introParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum.";
  
    export let buttonTextSize = "text-lg";
    export let buttonSize = "px-8 py-2";
    export let buttonTheme = "black";
    export let buttonVariant = "secondary";
  
    export let sections = [
      {
        courses: [
          {
            title: "Early Stage & Startup Investing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Full Module Courses (Certification Available)",
            backgroundColor: "#D0E1ED", // Pale Blue
            buttonLink: "/investor-course-early-stage-investing-in-emerging-companies",
            buttonText: "Apply Here",
          },
          {
            title: "Wealth Planning Fundamentals",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Masterclasses (Certification Available)",
            backgroundColor: "#CFC9EF", // Pale Purple
            buttonLink: "/investor-course-wealth-planning-fundamentals",
            buttonText: "Apply Here",
          }
        ]
      }
    ];
  
    export let learnMoreLink = "/investor-learn-hub";
    export let learnMoreText = "Learn More >";
  </script>
  
  <section class="py-16 bg-[#F8F8F8]">
    <div class="max-w-8xl mx-32">
      <!-- Section Title and Subtitle -->
      <h2 class="text-2xl md:text-[2rem] font-bold text-center mb-4">
        {title}
      </h2>
      <h3 class="text-lg text-center mb-6">
        {subtitle}
      </h3>
  
      <!-- Intro Paragraph -->
      <p class="text-center text-base md:text-[1rem] leading-relaxed mb-8 pb-6 font-thin px-6 lg:px-14">
        {introParagraph}
      </p>
  
      <!-- Courses Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12 px-6 lg:px-14">
        {#each sections as section}
          {#each section.courses as course}
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
          {/each}
        {/each}
      </div>
  
      <!-- Learn More Link -->
      <div class="text-right pr-14">
        <a href={learnMoreLink} class="text-customBlack hover:underline">
          {learnMoreText}
        </a>
      </div>
    </div>
  </section>
  