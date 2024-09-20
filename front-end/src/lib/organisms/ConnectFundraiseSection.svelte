<script>
    import CourseCard from '/src/lib/organisms/JoinCard.svelte';

    export let title = "Connect & Fundraise";
    export let introParagraph1 = "FoundrX helps entrepreneurs with all of the above through a curated invite-only investor platform, founders learning programs, targeted showcase, and other company building collaboration. The entrepreneurs are provided with resources and support to focus on building the business. ALTIRA offers the entrepreneurs a gate to deepen their business understanding and strengthen their business strategy. ALTIRA is a one stop solution for boosting startups growth."
    export let introParagraph2 = "Research showed 99% early-stage startups needed help with strategic advice, investor network access & learning on capital raising, and company building. Entrepreneurs are invited to join ALTIRA ecosystem to connect with our investor base, which is locally and globally curated and invite-only. Our board and council members, who have invested in more than 500 early to growth stage companies and collectively have more than 100 years experience in the tech and impact investing and ESG finance.";
    export let buttonTextSize = "text-lg";
    export let buttonSize = "px-8 py-2";
    export let buttonTheme =  "black";
    export let buttonVariant = "secondary";

    export let courses = [
        {
            title: "Good Counsel",
            subtitle: "Startup Consult Hour",
            description: "Team up with the experts and be a business-driven fundraiser.",
            courseType: "Startup Consult Hour",
            backgroundColor: "#D3E8F8",
            buttonLink: "#",
        },
        {
            title: "Raise Me Up",
            subtitle: "Apply to Fundraise",
            description: "Spend less time fundraising, more time building your business.",
            courseType: "Apply to Fundraise",
            backgroundColor: "#FBD7D7",
            buttonLink: "#",
        }
    ];
</script>

<section class="py-14 bg-[#F4F4F4] relative max-w-8xl" id="connect-fundraise">
    <div class="container ml-32 py-4">

        <!-- Intro Paragraph -->
        <p class="text-left text-base md:text-[1rem] leading-relaxed mb-12 pb-12 font-thin max-w-8xl">
            {introParagraph1}
        </p>

        <div id="advisory">
             <!-- Title -->
            <h2 class="text-center text-2xl md:text-[2rem] font-semibold mb-12">
                {title}
            </h2>

            <!-- Intro Paragraph -->
            <p class="text-left text-base md:text-[1rem] leading-relaxed mb-6 pb-4 font-thin max-w-6xl">
                {introParagraph2}
            </p>

            <!-- Course Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 px-16 max-w-6xl">
                {#each courses as course}
                    <div class="justify justify-center items-stretch align-items-center">
                        <CourseCard 
                            title={course.title}
                            subtitle={course.subtitle}
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
       
    </div>
</section>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .grid {
        width: 100%;
    }

</style>
