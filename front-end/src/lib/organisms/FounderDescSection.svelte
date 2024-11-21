<script>
    import CardTitle from '../atoms/CardTitle.svelte';
    import TextSection from '../molecules/TextSection.svelte';
    import ListSection from '../molecules/ListSection.svelte';
    import ImageSection from '../molecules/ImageSection.svelte';
    import LearningMethodCard from '../molecules/LearningMethodCard.svelte';
    import JoinCourseCard from '../molecules/JoinCourseCard.svelte';
  
    export let courseSections = [
      {
        courseType: "Masterclass",
        size: "text-xl",
        align: "text-left",
        weight: "font-thin",
      },
      {
      courseTitle: "Early Stage Investing in Emerging Companies",
      size: "text-2xl lg:text-3xl",
      align: "text-left",
      weight: "font-semibold",
      },
      {
        type: "text",
        title: "Early Stage Investing in Emerging Companies",
        titleSize: "text-3xl",
        titleWeight: "font-semibold",
        content: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt. Etiam laoreet consequat ligula, eu tempus eros convallis porta. Etiam vel auctor metus. Praesent nec scelerisque nisi, nec rhoncus justo. Vivamus mollis lobortis suscipit. Aenean consectetur, felis in gravida accumsan, nunc ex tempus lacus, in ultrices dolor tellus ut augue. Mauris non purus et sapien sollicitudin rutrum nec facilisis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum posuere nisi, eu ornare nulla maximus ac.`
      },
      {
        type: "text",
        title: "Who Should Attend",
        titleSize: "text-2xl",
        titleWeight: "font-semibold",
        content: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at.</p>
          <p>Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis.</p>`
      },
      {
        type: "list",
        title: "Learning Benefits",
        titleSize: "text-2xl",
        titleWeight: "font-semibold",
        content: "At the completion of this masterclass you will be able to:",
        items: [
          "Etiam laoreet consequat ligula, eu tempus eros convallis porta. Etiam vel auctor metus.",
          "Praesent nec scelerisque nisi, nec rhoncus justo. Vivamus mollis lobortis suscipit.",
          "Aenean consectetur, felis in gravida accumsan, nunc ex tempus lacus, in ultrices dolor tellus ut.",
          "Mauris non purus et sapien sollicitudin rutrum nec facilisis nibh."
        ]
      },
      {
        type: "list",
        title: "Learning Scope & Objectives",
        titleSize: "text-2xl",
        titleWeight: "font-semibold",
        content: "The masterclass will help you to:",
        items: [
          "Etiam laoreet consequat ligula, eu tempus eros convallis porta. Etiam vel auctor metus.",
          "Praesent nec scelerisque nisi, nec rhoncus justo. Vivamus mollis lobortis suscipit.",
          "Aenean consectetur, felis in gravida accumsan, nunc ex tempus lacus, in ultrices dolor tellus ut.",
          "Mauris non purus et sapien sollicitudin rutrum nec facilisis nibh."
        ]
      },
      {
        type: "image",
        src: "/images/founder_mastercourse.png",
        alt: "Join Masterclass - Business Scalling + Fundraising"
      },
      {
        type: "learning-method",
        title: "Learning Method & Delivery",
        content: [
          "Duration is about 1.5 hours (90 minutes)",
          "Further info will be sent after registration",
          "Session check-in will open at 15 min before class begins",
          "Professional Development Live teaching session (combination of materials, cases and interactive discussion)",
          "Mixed English & Bahasa Indonesia"
        ]
      },
      {
        type: "join-course",
        buttonText: "JOIN COURSE",
        duration: 4,
        date: "June 29, 2024",
        price: "Rp. 1,000,000"
      }
    ];
  </script>
  
  <section class="py-12 bg-white relative">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl mx-auto px-8">
      
    <!-- Left Column -->
    <div class="md:col-span-2 space-y-6">
      <!-- Title Section -->
      <div>
        <CardTitle 
          text={courseSections[0].courseType} 
          size={courseSections[0].size} 
          align={courseSections[0].align} 
          weight={courseSections[0].weight} 
        />
      </div>
      <div>
        <CardTitle
          text={courseSections[1].courseTitle} 
          size={courseSections[1].size} 
          align={courseSections[1].align} 
          weight={courseSections[1].weight} 
        />
      </div>
  
        <!-- Right Column Content (After Title on Mobile) -->
        <div class="block md:hidden space-y-6">
          {#each courseSections.slice(1) as section}
            {#if section.type === "image" || section.type === "learning-method" || section.type === "join-course"}
              {#if section.type === "image"}
                <ImageSection 
                  src={section.src} 
                  alt={section.alt} 
                  class="w-full h-auto rounded-md shadow-md" 
                />
              {:else if section.type === "learning-method"}
                <LearningMethodCard 
                  title={section.title} 
                  content={section.content} 
                />
              {:else if section.type === "join-course"}
                <JoinCourseCard 
                  buttonText={section.buttonText} 
                  duration={section.duration} 
                  date={section.date} 
                  price={section.price} 
                />
              {/if}
            {/if}
          {/each}
        </div>
  
        <!-- Main Content Sections -->
        {#each courseSections.slice(1) as section}
          {#if section.type === "text" || section.type === "list"}
            {#if section.type === "text"}
              <TextSection 
                title={section.title} 
                titleSize={section.titleSize} 
                titleWeight={section.titleWeight} 
                content={section.content} 
              />
            {:else if section.type === "list"}
              <ListSection 
                title={section.title} 
                titleSize={section.titleSize} 
                titleWeight={section.titleWeight} 
                content={section.content} 
                items={section.items} 
              />
            {/if}
          {/if}
        {/each}
      </div>
  
      <!-- Right Column (Tablet and Desktop) -->
      <div class="hidden md:block md:col-span-1 space-y-6 pt-6">
        {#each courseSections.slice(1) as section}
          {#if section.type === "image" || section.type === "learning-method" || section.type === "join-course"}
            {#if section.type === "image"}
              <ImageSection 
                src={section.src} 
                alt={section.alt} 
                class="w-full h-auto rounded-md shadow-md" 
              />
            {:else if section.type === "learning-method"}
              <LearningMethodCard 
                title={section.title} 
                content={section.content} 
              />
            {:else if section.type === "join-course"}
                <JoinCourseCard 
                  buttonText={section.buttonText} 
                  duration={section.duration} 
                  date={section.date} 
                  price={section.price} 
                />
              {/if}
            {/if}
          {/each}
      </div>
    </div>  
  </section>
  
  
  
  