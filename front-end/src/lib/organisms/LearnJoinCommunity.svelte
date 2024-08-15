<script>
    import CourseCard from '/src/lib/organisms/JoinCard.svelte';

    export let courses = [
        {
            title: "Alt-C",
            description: "We're Alt-C investor network, part of ALTIRA, an innovation platform that helps early stage startups and ventures scale through Funding + Learning + Network + Collaboration",
            courseType: "", 
            backgroundColor: "#D3E8F8",
            buttonLink: "#",
            buttonTheme: "black",
            buttonVariant : "secondary"
        },
        {
            title: "Learn Hub",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
            courseType: "Investor Masterclass",
            backgroundColor: "#FBD7D7",
            buttonLink: "#",
            buttonTheme: "black",
            buttonVariant : "secondary"
        }
    ];

</script>

<section class="py-12 bg-gray-50">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 class="text-2xl md:text-3xl font-semibold text-center mb-6">Learn and Join the Community</h2>
        <p class="text-center text-sm md:text-base mb-12 max-w-3xl mx-auto font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            {#each courses as course}
                <div class="flex justify-left">
                    <CourseCard 
                        title={course.title}
                        description={course.description}
                        courseType={course.courseType}
                        backgroundColor={course.backgroundColor}
                        buttonLink={course.buttonLink}
                        buttonTheme={course.buttonTheme}
                        ButtonVariant= {course.buttonVariant}
                        class="text-left"
                    />
                </div>
            {/each}
        </div>
    </div>
</section>
