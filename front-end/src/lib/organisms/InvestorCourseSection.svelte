<script>
  import CourseCard from "/src/lib/organisms/CourseCard.svelte";

  export let title = "Advanced Learning";
  export let sections = [
    {
      name: "Advisory",
      introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum.",
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
    },
    {
      name: "Investor Education",
      introParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum.",
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

  export let buttonTextSize = "text-lg";
  export let buttonSize = "px-8 py-2";
  export let buttonTheme = "black";
  export let buttonVariant = "secondary";

  export let learnMoreLink = "/investor-learn-hub";
  export let learnMoreText = "Learn More >";
</script>

<section class="py-8 sm:py-12 md:py-16 bg-[#F8F8F8]">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-28">
    <!-- Main Title -->
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 md:mb-16">
      {title}
    </h2>

    {#each sections as section}
      <!-- Section Title -->
      <h3 class="text-lg sm:text-xl md:text-2xl text-center mb-6 sm:mb-8 md:mb-10 font-semibold">
        {section.name}
      </h3>

      <!-- Section Intro Paragraph -->
      <p class="text-center text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-10 font-light px-2">
        {section.introParagraph}
      </p>

      <!-- Courses Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12 sm:px-9 md:px-0 ">
        {#each section.courses as course (course.buttonLink)}
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
      </div>
          <!-- Learn More Link -->
    <div class="text-right pr-0 md:pr-6">
      <a href={learnMoreLink} class="text-customBlack hover:underline text-sm sm:text-base md:text-lg">
        {learnMoreText}
      </a>
    </div>
    {/each}


  </div>
</section>

