<script>
    import CourseCard from "/src/lib/organisms/CourseCard.svelte";
  
    export let buttonTextSize = "text-lg";
    export let buttonSize = "px-8 py-2";
    export let buttonTheme =  "black";
    export let buttonVariant = "secondary";

    export let sections = [
      {
        title: "Enterprise Innovation",
        courses: [
          {
            title: "Family Enterprise Innovation",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Masterclasses (Certification Available)",
            backgroundColor: "#D0E1ED",
            buttonLink: "#",
            buttonText: "Apply Here",
          },
          {
            title: "Venture Innovation Leadership Program",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Masterclasses (Certification Available)",
            backgroundColor: "#CFC9EF",
            buttonLink: "#",
            buttonText: "Apply Here",
          }
        ]
      },
      {
        title: "Alternative Finance",
        courses: [
          {
            title: "Thematic Investing Strategy & Principles",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Masterclasses (Certification Available)",
            backgroundColor: "#D0E1ED",
            buttonLink: "#",
            buttonText: "Apply Here",
          },
          {
            title: "Innovative Financing & Structuring",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Masterclasses (Certification Available)",
            backgroundColor: "#CFC9EF",
            buttonLink: "#",
            buttonText: "Apply Here",
          }
        ]
      }
    ];
  </script>
  
  <section class="pt-16 bg-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      {#each sections as section}
        <h2 class="text-2xl md:text-[2rem] font-semibold text-center mb-12">
          {section.title}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-16 max-w-full md:max-w-6xl px-4 md:px-12 mx-auto mb-28">
          {#each section.courses as course}
            <div class="flex justify-left">
              <CourseCard
                title={course.title}
                description={course.description}
                courseType={course.courseType}
                backgroundColor={course.backgroundColor}
                buttonLink={course.buttonLink}
                buttonText={course.buttonText}
                buttonTheme={buttonTheme}
                buttonVariant={buttonVariant}
                buttonTextSize={buttonTextSize}
                buttonSize={buttonSize}
              />
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </section>
  