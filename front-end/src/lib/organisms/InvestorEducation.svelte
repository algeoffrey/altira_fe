<script>
  import CourseCard from "/src/lib/organisms/CourseCard.svelte";
  import LearnMoreLink from "/src/lib/atoms/LearnMoreLink.svelte";


  export let buttonTextSize = "text-lg";
  export let buttonSize = "px-8 py-2";
  export let buttonTheme =  "black";
  export let buttonVariant = "secondary";
  export let sectionTitle = "Asset Owner & Investor Education";
  export let introParagraph = "Becoming a pioneer sounds intimidating, but we are here to guide you to make your ambition come true. Whether you are an investor who is looking for a new asset class for your investment or an asset owner who wants to be part of innovation, we provide a comprehensive learning program to master investing in early-stage ventures."

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
    <h2 class="text-customBlack text-xl sm:text-2xl md:text-[2rem] font-bold text-center mb-4 sm:mb-6 pt-4 sm:pt-6">
      {sectionTitle}
    </h2>
    
    <!-- Section Intro Paragraph -->
    <p class="text-[0.9rem] sm:text-[1rem] md:text-md font-light text-center mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
      {introParagraph}
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




