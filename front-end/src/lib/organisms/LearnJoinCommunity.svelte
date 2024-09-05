<script>
    import CourseCard from '/src/lib/organisms/JoinCard.svelte';

    export let title = "Learn and Join the Community";
    export let introParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum."
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

<section class="py-14 bg-[#F4F4F4] relative max-w-8xl">
    <div class="container mx-16 py-4">
      <h2 class="text-center text-2xl md:text-[2rem] font-semibold mb-12">
        {title}
      </h2>
      <p class="text-center text-base md:text-[1.05rem] leading-relaxed mb-6 pb-4 font-thin mx-32">
        {introParagraph}
      </p>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-16 mx-32">
        {#each courses as course}
          <div class="flex justify-center md:justify-left">
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
    </div>
  </section>
  