<script>
    import TextWithHeading from '/src/lib/molecules/TextWithHeading.svelte';
    import Heading from '/src/lib/atoms/CardTitle.svelte';
    import VennDiagram from '/src/lib/atoms/VennDiagram.svelte';
    import Paragraph from '/src/lib/atoms/Paragraph.svelte';

    const paragraphContent = 
      "<b> <strong> ALTIRA (Alternative Investments Group & Advisory) </strong></b> is an alternative assets and innovation advisory platform focusing on Southeast Asian and Indonesian-related early stage investments that convenes and collaborates with smart capital to empower impactful and innovative ventures and enterprises through funding, advisory, learning and network. ALTIRA is investor-centric and focuses on the development of the investor ecosystem to scale up access for high net worth individuals, family enterprises, foundations and other institutional investors to innovation.";
    
    const missionContent = [
      "We help entrepreneurs to innovate locally with business model, funding model, and strategy that work for them.",
      "We are a partner, an advocate, and a coach to support entrepreneurs along their entrepreneurship journey.",
      "Our single-minded focus is to help emerging companies build innovative businesses with strong vision, mission and fundamentals."
    ];

    const storyContent = [
      "Before the early days of startup investing in Southeast Asia, our public and private backers have long pioneered and backed tech-enabled startups in Indonesia, Europe, India and South Africa.",
      "The region's first modern tech company, NEXIAN, which was listed on SGX in 2011 under Spice Group was backed by one of ALTIRA's founders who co-founded Angel-eQ in 2015.",
      "Angel-eQ pioneered a premier Southeast Asia tech-enabled investor network that became the foundation of ALTIRA."
    ];
</script>

<section class="py-12 bg-white relative mx-4" id="mission">
    <!-- Paragraph at the top -->
    <p class="text-left text-sm md:text-base font-light mb-8 max-w-7xl mx-auto">
        {@html paragraphContent}
    </p>
  
    <!-- Mission and Story Title -->
    <div class="text-center">
        <Heading text="Mission and Story" size="text-[1.5rem] md:text-[2rem]" />
    </div>
  
    <!-- Content Wrapper -->
    <div class="flex flex-col-reverse md:flex-row justify-between items-start mt-10 gap-8 max-w-7xl mx-auto px-4 md:px-8">
        <!-- Text with Headings (Mission and Story) -->
        <div class="w-full md:w-1/2 space-y-8">
            <TextWithHeading heading="Our Mission" type="mission" content={missionContent} />
            <TextWithHeading heading="Our Story" type="story" content={storyContent} />
        </div>
  
        <!-- Venn Diagram -->
        <div class="w-full md:w-1/2 flex justify-center items-center">
            <div class="w-3/4 md:w-full max-w-md md:max-w-lg">
                <VennDiagram alt="Venn Diagram representing Mission and Story" />
            </div>
        </div>
    </div>
  </section>
  



