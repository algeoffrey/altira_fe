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
  <p class="text-left text-sm md:text-base font-light mb-6 pb-6 max-w-8xl mx-4 md:mx-32">
      {@html paragraphContent}
  </p>

  <!-- Mission and Story Title -->
  <div class="pt-6">
      <Heading text="Mission and Story" size="text-[1.5rem] md:text-[2rem]" />
  </div>

  <!-- Venn Diagram for Mobile -->
  <div class="flex justify-center mt-6 md:hidden">
      <div class="w-full max-w-xs px-4">
          <VennDiagram alt="Venn Diagram representing Mission and Story" />
      </div>
  </div>

  <!-- Content Wrapper for Desktop and Tablet -->
  <div class="flex flex-col md:flex-row justify-between items-start mt-10 max-w-8xl mx-4 md:mx-32 px-4 md:px-16">
      <!-- Text with Headings (Mission and Story) -->
      <div class="w-full md:w-2/5 space-y-8 pr-0 md:pr-6">
          <TextWithHeading heading="Our Mission" type="mission" content={missionContent} />
          <TextWithHeading heading="Our Story" type="story" content={storyContent} />
      </div>

      <!-- Venn Diagram for Desktop and Tablet -->
      <div class="w-full md:w-3/5 py-6 px-4 flex justify-center hidden md:flex">
          <div class="w-full max-w-xs md:max-w-xl">
              <VennDiagram alt="Venn Diagram representing Mission and Story" />
          </div>
      </div>
  </div>
</section>



