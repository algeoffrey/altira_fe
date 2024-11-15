<script>
    import CourseCard from "/src/lib/organisms/CourseCard.svelte";
  
    export let buttonTextSize = "text-lg";
    export let buttonSize = "px-8 py-2";
    export let buttonTheme =  "black";
    export let buttonVariant = "secondary";

    export let sections = [
      {
        id: "enterprise-innovation",
        title: "Enterprise Innovation",
        courses: [
          {
            title: "Family Enterprise Innovation",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Masterclasses (Certification Available)",
            backgroundColor: "#D0E1ED",
            buttonLink: "/investor-course-family-enterprise-innovation",
            buttonText: "Apply Here",
          },
          {
            title: "Venture Innovation Leadership Program",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Masterclasses (Certification Available)",
            backgroundColor: "#CFC9EF",
            buttonLink: "/investor-course-venture-innovation-leadership-program",
            buttonText: "Apply Here",
          }
        ]
      },
      {
        id: "alternative-finance",
        title: "Alternative Finance",
        courses: [
          {
            title: "Thematic Investing Strategy & Principles",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Masterclasses (Certification Available)",
            backgroundColor: "#D0E1ED",
            buttonLink: "/investor-course-thematic-investing-strategy-principles",
            buttonText: "Apply Here",
          },
          {
            title: "Innovative Financing & Structuring",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Masterclasses (Certification Available)",
            backgroundColor: "#CFC9EF",
            buttonLink: "/investor-course-innovative-financing-&-structuring",
            buttonText: "Apply Here",
          }
        ]
      }
    ];
</script>
  
<section class="pt-16 bg-white">
  <div class="py-6 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
    {#each sections as section}
      <!-- Section Title -->
      <h2 class="text-2xl md:text-[2rem] font-semibold text-center mb-8 md:mb-12" id={section.id}>
        {section.title}
      </h2>

      <!-- Course Cards Grid -->
      <div class="flex justify-center">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 w-full max-w-5xl px-12 sm:px-0">
          {#each section.courses as course}
            <div class="flex justify-center mb-8">
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
    {/each}
  </div>
</section>

