<script>
  import CourseCard from "/src/lib/organisms/CourseCard.svelte";

  export let buttonTextSize = "text-lg";
  export let buttonSize = "px-8 py-2";
  export let buttonTheme = "black";
  export let buttonVariant = "secondary";

  export let sections = [
    {
      courses: [
        {
          title: "Wealth Planning Fundamentals",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
          courseType: "Masterclasses (Certification Available)",
          backgroundColor: "#CFC9EF",
          buttonLink: "#",
          buttonText: "Apply Here",
        },
        {
          title: "Family Enterprise Innovation",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
          courseType: "Masterclasses (Certification Available)",
          backgroundColor: "#D0E1ED",
          buttonLink: "#",
          buttonText: "Apply Here",
        }
      ]
    },
    {
      courses: [
        {
          title: "Innovative Financing & Structuring",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
          courseType: "Masterclasses (Certification Available)",
          backgroundColor: "#CFC9EF",
          buttonLink: "#",
          buttonText: "Apply Here",
        },
        {
          title: "Thematic Investing Strategy & Principles",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
          courseType: "Masterclasses (Certification Available)",
          backgroundColor: "#D0E1ED",
          buttonLink: "#",
          buttonText: "Apply Here",
        },
      ]
    }
  ];
</script>

<section class="py-16 bg-[#F4F4F4]">
  <div class="max-w-8xl mx-32">
    <h2 class="text-2xl md:text-[2rem] font-bold text-center mb-16">
      Other Courses You Might Like
    </h2>
    
    <!-- Iterate through each section -->
    {#each sections as section}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 mb-12 mx-auto px-6 lg:px-14">
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
      </div>
    {/each}

  </div>
</section>
