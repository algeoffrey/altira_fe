<script>
    import EventCard from '/src/lib/organisms/EventCard.svelte';

    export let introParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt. Etiam laoreet consequat ligula, eu tempus eros convallis porta. Etiam vel auctor metus. Praesent nec scelerisque nisi, nec rhoncus justo. Vivamus mollis lobortis suscipit. Aenean consectetur, felis in gravida accumsan, nunc ex tempus lacus, in ultrices dolor tellus ut augue. Mauris non purus et sapien sollicitudin rutrum nec facilisis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum posuere nisl, eu ornare nulla maximus ac.";
    
    export let events = [
        {
            title: "Art & Innovation",
            date: "20 May 2023",
            location: "ISA Art Gallery, BNI 46",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue.",
            imageSrc: "/images/placeholder.png"
        },
        {
            title: "FoundrX Tournament",
            date: "May 2023",
            location: "Location",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue.",
            imageSrc: "/images/placeholder.png" 
        },
        {
            title: "Monthly Pitching",
            date: "May 2023",
            location: "Location",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue..",
            imageSrc: "/images/placeholder.png"
        }
    ];
</script>

<section class="py-16">
    <div class="max-w-8xl mx-32">
        <p class="text-left text-base md:text-[1.05rem] leading-relaxed mb-12 pb-6 font-thin">
            {introParagraph}
        </p>

        <h2 class="text-[2rem] text-customBlack font-extrabold text-center mb-8" id = "showcases">Showcases & Pitches</h2>
        
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

