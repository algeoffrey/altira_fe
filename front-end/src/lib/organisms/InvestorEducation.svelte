<script>
  import CourseCard from "/src/lib/organisms/CourseCard.svelte";
  import LearnMoreLink from "/src/lib/atoms/LearnMoreLink.svelte";


  export let buttonTextSize = "text-lg";
  export let buttonSize = "px-8 py-2";
  export let buttonTheme =  "black";
  export let buttonVariant = "secondary";
  export let sectionTitle = "Asset Owner & Investor Education";

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
      courseType: "Investor Masterclass",
      backgroundColor: "#CFC9EF",
      buttonLink: "/investor-course-wealth-planning-fundamentals",
    },
  ];

  export let learnMoreHref = "/investor-learn-hub";
</script>

<section class="py-8 sm:py-12 bg-gray-50">
  <div class="container mx-auto px-7 sm:px-6 md:px-8 max-w-7xl">
    <!-- Section Title -->
    <h2 class="text-customBlack text-xl sm:text-2xl md:text-[2rem] font-bold text-center mb-4 sm:mb-8 pt-4 sm:pt-6">
      {sectionTitle}
    </h2>
    
    <!-- Section Intro Paragraph -->
    <p class="text-[0.9rem] sm:text-[1rem] font-[400] mb-6 sm:mb-8 px-2 max-w-sm sm:max-w-xl md:max-w-5xl lg:max-w-6xl mx-auto leading-relaxed text-left">
      Investor Learn Hub is our curated resource designed to empower asset owners, managers and investors with the knowledge and tools needed to make informed, actionable and strategic decisions in the rapidly evolving world of innovation, venture investing and wealth planning. It bridges the gap between learning and doing, creating actionable pathways for investors.
    </p>
    
    <p class="text-[0.9rem] sm:text-[1rem] font-[400] mb-6 sm:mb-8 px-2 max-w-sm sm:max-w-xl md:max-w-5xl lg:max-w-6xl mx-auto leading-relaxed text-left">
      Learn from seasoned and high profile investors and experts while actively building your own portfolio of highly-vetted opportunities available only through our private network and platform. <a class="underline hover:text-gray-500" href="#">Join us now</a>
    </p>

    <!-- Courses Grid -->
    <div class="relative grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-14 max-w-5xl mx-auto">
      {#each courses as course}
        <div class="flex justify-center sm:justify-start">
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
    
    <!-- Learn More Link -->
    <div class="mt-6 sm:mt-8 flex justify-end max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
      <LearnMoreLink href={learnMoreHref} />
    </div>
  </div>
</section>




