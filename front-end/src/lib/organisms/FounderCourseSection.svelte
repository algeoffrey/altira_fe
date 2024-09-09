<script>
    import CourseCard from "/src/lib/organisms/CourseCard.svelte";

    export let introParagraph = "Fundraising is never easy and entrepreneurs are expected to be ready with what was unexpected. Entrepreneurs are invited to equip themselves with fundamental lessons of strategic fundraising."
  
    export let buttonTextSize = "text-lg";
    export let buttonSize = "px-8 py-2";
    export let buttonTheme = "black";
    export let buttonVariant = "secondary";
  
    export let sections = [
      {
        courses: [
          {
            title: "Overview to Business & Startup Fundraising",
            description: "Doing the complete masterclass will allow the participant to understand the overall \"Art and Science of Business-Driven....\"",
            courseType: "Full Module Courses (Certification Available)",
            backgroundColor: "#D0E1ED", // Pale Blue
            buttonLink: "/founder-course-overview-to-business-&-startup-fundraising",
            buttonText: "Apply Here",
          },
          {
            title: "Fundamentals of Business and Startup Funding and Fundraising",
            description: "Fundamentals of Business and Startup Scaling & Funding masterclass provides the participants with a thorough...",
            courseType: "Masterclasses (Certification Available)",
            backgroundColor: "#CFC9EF", // Pale Purple
            buttonLink: "/founder-course-fundamentals-of-business-and-startup-funding-and-fundraising",
            buttonText: "Apply Here",
          }
        ]
      },
      {
        courses: [
          {
            title: "Capital Structure: Traditional and Alternative Financing",
            description: "Capital Structure Effect From Traditional & Alternative Financing masterclass provides the participants with the knowledge of....",
            courseType: "Masterclasses (Certification Available)",
            backgroundColor: "#F0D7F2", // Pale Pink
            buttonLink: "/founder-course-capital-structure-traditional-and-alternative-financing",
            buttonText: "Apply Here",
          },
          {
            title: "Business-Driven Fundraising: Strategy, Planning and Execution",
            description: "Capital Structure Effect From Traditional & Alternative Financing masterclass provides the participants with the knowledge of....",
            courseType: "Masterclasses (Certification Available)",
            backgroundColor: "#CAE3CB", // Pale Green
            buttonLink: "/founder-course-business-driven-fundraising-strategy-planning-and-execution",
            buttonText: "Apply Here",
          },
        ]
      }
    ];

    export let additionalContent = {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus.",
      buttonText: "Get It Here",
      buttonLink: "#get-it-here"
    };
</script>

<section class="py-16 bg-[#F4F4F4]" id="masterclasses">
  <div class="max-w-8xl mx-32">
    <h2 class="text-2xl md:text-[2rem] font-bold text-center mb-12">
      Foundrx Learn HUB
    </h2>

    <p class="text-center text-base md:text-[1.05rem] leading-relaxed mb-12 pb-6 font-thin px-6 lg:px-14">
        {introParagraph}
    </p>
    
    <!-- Iterate through each section -->
    {#each sections as section}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 mb-16 px-6 lg:px-14">
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

    <!-- Additional Content Block: Text on the left, Button on the right -->
    <div class="bg-[#E0E0E0] p-6 rounded-lg mt-12 flex items-center justify-between max-w-8xl mx-14 pr-12">
      <p class="text-base md:text-base text-customBlack leading-relaxed max-w-3xl">
        {additionalContent.description}
      </p>
      <a 
        href={additionalContent.buttonLink} 
        class="bg-customBlack text-white px-10 py-3 rounded-md text-md hover:bg-white hover:text-customBlack transition-colors"
      >
        {additionalContent.buttonText}
      </a>
    </div>

  </div>
</section>
