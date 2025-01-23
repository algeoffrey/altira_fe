<script>
    import CourseCard from '/src/lib/organisms/JoinCard.svelte';

    export let title = "Learn and Join the Community";
    export let introParagraph = "We understand the power of learning and community to drive progress, so we would like to invite you to join our global community of investors and innovators. Engage in exclusive events and learning experiences, access highly-vetted deals and valuable resources, and be part of the change-makers shaping tomorrow."
    export let buttonTextSize = "text-lg";
    export let buttonSize = "px-8 py-2";
    export let buttonTheme =  "black";
    export let buttonVariant = "secondary";

    export let courses = [
        {
            title: "Alt-C",
            description: "We're Alt-C investor network, part of ALTIRA, an innovation platform that helps early stage startups and ventures scale through Funding + Learning + Network + Collaboration",
            courseType: "", 
            backgroundColor: "#D3E8F8",
            buttonLink: "/alt-c-investor-network",
        },
        {
            title: "Learn Hub",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Investor Masterclass",
            backgroundColor: "#FBD7D7",
            buttonLink: "/investor-learn-hub",
        }
    ];

</script>

<section class="py-14 bg-[#F4F4F4] relative mx-auto">
  <div class="mx-auto py-4 px-4 md:px-16 max-w-6xl">
    <h2 class="text-center text-2xl md:text-[2rem] font-semibold mb-12">
      {title}
    </h2>
    <p class="text-[0.9rem] sm:text-[1rem] font-[400] mb-6 sm:mb-8 px-2 max-w-sm sm:max-w-xl md:max-w-5xl lg:max-w-6xl mx-auto leading-relaxed text-left">
      {introParagraph}
    </p>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-8">
      {#each courses as course}
        <div class="flex justify-center md:justify-start">
          <CourseCard 
            title={course.title}
            description={course.description}
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
    <p class=" text-center  italic text-[0.7rem] sm:text-[0.875rem] font-[400] mb-4 mt-12 sm:mb-6 max-w-sm sm:max-w-lg md:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed">
      “The future belongs to those who believe in the beauty of their dreams” - Eleanor Roosevelt</p>
  </div>
</section>

  