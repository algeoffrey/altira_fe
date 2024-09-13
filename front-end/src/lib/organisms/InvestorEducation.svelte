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

<section class="py-12 bg-gray-50">
  <div class="container mx-auto px-4 md:px-6 lg:px-8">
    <h2 class="text-customBlack text-2xl md:text-[2rem] font-bold text-center mb-6 pt-6">
      {sectionTitle}
    </h2>
    <p class="text-base text-center lg:text-md mb-8 md:mb-12 max-w-lg md:max-w-4xl lg:max-w-5xl mx-auto font-light">
     {introParagraph}
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-10 max-w-full md:max-w-6xl px-4 md:px-12 mx-auto">
      {#each courses as course}
        <div class="flex justify-left">
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
    <div class="text-right mt-8 max-w-6xl pr-12 mx-auto">
      <LearnMoreLink href={learnMoreHref} />
    </div>
  </div>
</section>

