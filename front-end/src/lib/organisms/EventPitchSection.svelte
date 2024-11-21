<script>
    export let title = "Events & Pitches";
    export let introParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum.";
  
    export let events = [
      {
        imgSrc: "https://via.placeholder.com/300x200",
        imgAlt: "Event 1",
        title: "Showcases & pitches",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue."
      },
      {
        imgSrc: "https://via.placeholder.com/300x200",
        imgAlt: "Event 2",
        title: "Networking & capacity building",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue."
      }
    ];
  
    export let allEventsLink = "/program-and-event";
    export let allEventsText = "All Events & Programs >";
  </script>
  
  <section class="py-12 md:py-16 bg-[#F4F4F4]" id="events-pitches">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <!-- Section Title -->
      <h2 class="text-xl md:text-2xl lg:text-[2rem] font-bold text-center mb-4 md:mb-6">
        {title}
      </h2>
  
      <!-- Intro Paragraph -->
      <p class="text-center text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 pb-4 md:pb-6 font-thin px-4 sm:px-6 lg:px-12">
        {introParagraph}
      </p>
  
      <!-- Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12 px-6">
        {#each events as event}
          <div class="flex flex-col items-start">
            <!-- Event Image -->
            <img 
              src={event.imgSrc} 
              alt={event.imgAlt} 
              class="w-full h-auto mb-4 rounded-lg shadow-md"
            />
  
            <!-- Event Title -->
            <h3 class="text-lg md:text-xl font-semibold mb-2">
              {event.title}
            </h3>
  
            <!-- Event Description -->
            <p class="text-sm md:text-base text-gray-700 font-light leading-relaxed">
              {event.description}
            </p>
          </div>
        {/each}
      </div>
  
      <!-- Link to All Events -->
      <div class="text-center md:text-right">
        <a 
          href={allEventsLink} 
          class="text-sm md:text-base text-customBlack hover:underline font-medium"
        >
          {allEventsText}
        </a>
      </div>
    </div>
  </section>
  