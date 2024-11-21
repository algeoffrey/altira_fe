<script>
    import EventCard from '/src/lib/organisms/EventCard.svelte';
    
    export let events = [
        {
            title: "Art & Innovation",
            date: "20 May 2023",
            location: "ISA Art Gallery, BNI 46",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit.",
            imageSrc: "/images/placeholder.png"
        },
        {
            title: "FoundrX Tournament",
            date: "May 2023",
            location: "Location",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit.",
            imageSrc: "/images/placeholder.png"
        },
        {
            title: "Monthly Pitching",
            date: "May 2023",
            location: "Location",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit.",
            imageSrc: "/images/placeholder.png"
        },
        {
            title: "Monthly Pitching",
            date: "May 2023",
            location: "Location",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit.",
            imageSrc: "/images/placeholder.png"
        }
    ];
</script>

<section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Title -->
        <h2 class="text-xl sm:text-2xl md:text-[2rem] text-customBlack font-extrabold text-center mb-8" id="past-programs">
            Past Programs & Events
        </h2>
        
        <!-- Responsive Event Cards Grid -->
        <div class="grid grid-cols-1 gap-6">
            {#each events as event}
                <EventCard 
                    title={event.title}
                    date={event.date}
                    location={event.location}
                    description={event.description}
                    buttonLabel="Register"
                    imageSrc={event.imageSrc}
                />
            {/each}
        </div>
    </div>
</section>
