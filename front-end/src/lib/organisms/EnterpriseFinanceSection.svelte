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
    <div class="py-6 max-w-8xl mx-32">
        {#each sections as section}
            <h2 class="text-2xl md:text-[2rem] font-semibold text-center mb-16">
                {section.title}
            </h2>
            <div class="flex justify-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 justify-center gap-6 md:gap-8 lg:gap-16 mb-12 mx-14 px-14">
                    {#each section.courses as course}
                        <div class="flex justify-center md:justify-start mb-12">
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
