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
  
  <section class="py-16 bg-[#F4F4F4]">
    <div class="max-w-8xl mx-32">
      <!-- Section Title -->
      <h2 class="text-2xl md:text-[2rem] font-bold text-center mb-6">
        {title}
      </h2>
  
      <!-- Intro Paragraph -->
      <p class="text-center text-base md:text-[1rem] leading-relaxed mb-8 pb-6 font-thin px-6 lg:px-14">
        {introParagraph}
      </p>
  
      <!-- Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16 mb-12 px-6 lg:px-14">
        {#each events as event}
          <div>
            <!-- Event Image -->
            <img src={event.imgSrc} alt={event.imgAlt} class="w-full h-auto mb-4 rounded-lg shadow" />
            
            <!-- Event Title and Description -->
            <h3 class="text-lg font-semibold mb-2">{event.title}</h3>
            <p class="text-base text-customBlack font-light leading-relaxed">
              {event.description}
            </p>
          </div>
        {/each}
      </div>
  
      <!-- Link to All Events -->
      <div class="text-right pr-14">
        <a href={allEventsLink} class="text-customBlack hover:underline">
          {allEventsText}
        </a>
      </div>
    </div>
  </section>
  