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

<section class="py-16 bg-[#F4F4F4]">
    <div class="max-w-8xl mx-32">

        <h2 class="text-[2rem] text-customBlack font-extrabold text-center mb-8">Networking & Capacity Building</h2>
        
        <!-- Container for Event Cards -->
        <div class="grid grid-rows-3 gap-2 mx-32 max-w-6xl">
            {#each events as event}
                <div class="flex justify-center py-2">
                    <EventCard 
                    title={event.title}
                    date={event.date}
                    location={event.location}
                    description={event.description}
                    buttonLabel="Register"
                    imageSrc={event.imageSrc}
                />
                </div>
            {/each}
        </div>
    </div>
</section>
