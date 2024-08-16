<script>
  import CourseCard from "/src/lib/organisms/CourseCard.svelte";
  import LearnMoreLink from "/src/lib/atoms/LearnMoreLink.svelte";

  export let courses = [
    {
      title: "Early Stage & Startup Investing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
      courseType: "Full Module Course (Certification Available)",
      backgroundColor: "#D0E1ED",
      buttonLink: "#",
    },
    {
      title: "Wealth Planning Fundamentals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
      courseType: "Investor Masterclass",
      backgroundColor: "#CFC9EF",
      buttonLink: "#",
    },
  ];

  export let learnMoreHref = "/investor-learn-hub";
</script>

<section class="py-12 bg-gray-50">
  <div class="container mx-auto px-4 md:px-6 lg:px-8">
    <h2 class="text-2xl md:text-3xl font-semibold text-center mb-6">
      Asset Owner & Investor Education
    </h2>
    <p
      class="text-center text-sm md:text-base mb-12 max-w-3xl mx-auto font-thin"
    >
      Becoming a pioneer sounds intimidating, but we are here to guide you to
      make your ambition come true. Whether you are an investor who is looking
      for a new asset class for your investment or an asset owner who wants to
      be part of innovation, we provide a comprehensive learning program to
      master investing in early-stage ventures.
    </p>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto"
    >
      {#each courses as course}
        <div class="flex justify-left">
          <CourseCard
            title={course.title}
            description={course.description}
            courseType={course.courseType}
            backgroundColor={course.backgroundColor}
            buttonLink={course.buttonLink}
            class="text-left"
          />
        </div>
      {/each}
    </div>
    <div class="text-right mt-8 max-w-4xl mx-auto">
      <LearnMoreLink href={learnMoreHref} />
    </div>
  </div>
</section>

