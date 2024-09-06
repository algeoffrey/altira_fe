<script>
    export let teamMembers = [
        {
            id: "venkat-narayan",
            name: "Venkat Narayan",
            title: "Partner",
            organization: "Aavishkaar Capital",
            image: "/images/venkat-n.jpg",
            description: `
                Venkat is a Partner with Aavishkaar and co-manages the Aavishkaar Frontier Fund (AFF). Aavishkaar focuses on entrepreneurship for the next 3 billion, of which Aavishkaar Capital is the part which provides Fund Advisory and Management services. Venkat joined Aavishkaar in 2013 – to raise and manage AFF. He focuses on the Fund's activities in Indonesia, and is a member of the Board on all the Indonesian investments. Venkat is also actively engaged in the operations of the Technical Assistance Facilities which are working alongside AFF. In addition to this he is actively engaged in the startup ecosystem in India and Indonesia.
                /n/n
                Prior to joining Aavishkaar, Venkat has executed multiple M&As, project finance & special situation deals as a senior banker across a range of buy/sell side transactions. In his past roles, spanning over 30 years, he has been involved with a variety of business situations from start-ups, project financing, infrastructure, private equity, fund launch and new business development as well as an experience as a CEO of growth stage companies & managing investments. 
                /n/n
                The past experience includes Venkat’s leadership role in Lazard India, a preeminent international financial advisory and asset management firm. He was the Managing Director of Corporate Finance practice and had deep experience in business valuation and corporate strategy. His overseas work experience includes stints in the Sultanate of Oman & Hong Kong. Venkat went to the Indian Institute of Management, Ahmedabad, India (IIM-A) for his post graduate studies in Management, and also has a Bachelor of Engineering from the Birla Institute of Technology and Science, Pilani (BITS-Pilani)`
        },
        {
            id: "marnix-mulder",
            name: "Marnix Mulder",
            title: "Director Market Development",
            organization: "Triple Jump / DGGF",
            image: "/images/marnix_m.jpg",
            description: `
            Marnix Mulder is a Director of Market Development at Triple Jump BV, an impact-focused investment manager founded in 2006. Marnix developed his expertise on financial inclusive market development strategies and contributed to the success of expansion of Triple Jump BV. Triple Jump BV focuses on delivering impact investing through thorough portfolio management and ESG practices. Their investees are financial service providers, funds and SMEs serving our end-clients in emerging markets.
            /n/n
            At Triple Jump BV Marnix is responsible for managing the part of the Dutch Good Growth Fund (DGGF) that provides financing for local SMEs in up to 66 selected countries through investing in Intermediary Funds. The consortium manages the DGGF on behalf of the Dutch Ministry of Foreign Affairs.
            Currently, he is also serving as a Board Member of the Netherlands Advisory Board on Impact Investing. In this position, Marnix oversees the investment activities from the company to ensure impact generation for the community. Prior to his current role, he worked for SNV Netherlands development organization, Cordaid, Comadep, and WHD Knights of Round Table. 
            /n/n
            Marnix has 20+ years of experience in development finance and advisory in frontier markets. For the last 12 years he has been fully involved in the developing and implementing Triple Jump’s market development program, incubating numerous innovative finance initiatives and building capacities of financial service providers and their ecosystems.
            Marnix obtained an MBA degree from RSM Erasmus University and an MSc in Agricultural and Environmental Sciences from Wageningen University and Research. As a polyglot, Marnix speaks Dutch, English and Spanish.`
        },
        {
        id: "adriani-onie",
            name: "Adriani Onie",
            title: "Founder, CEO",
            organization: "ALTIRA",
            image: "/images/adriani_o.jpg",
            description: `
                Lorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae magna eu lectus maximus porttitor quis vitae enim. Proin molestie dui vitae ullamcorper lobortis. Aliquam molestie lectus non justo tristique dapibus. Proin pellentesque porta dolor, et laoreet nunc lobortis nec. Suspendisse accumsan dignissim nibh et aliquet. Nulla at massa cursus, efficitur erat nec, condimentum lacus. Quisque sed venenatis turpis. Aenean finibus ullamcorper dictum. Vestibulum non ex aliquam, facilisis tellus efficitur, viverra libero. Nam quis tincidunt augue, in commodo augue.
                /n/n
                Phasellus non egestas risus. Ut non erat eget ipsum viverra cursus at at nisi. Pellentesque faucibus lectus sed mollis pellentesque. Sed non consequat velit. Aliquam mauris urna, consequat sit amet odio quis, porttitor interdum sapien. Morbi faucibus eros eu fermentum imperdiet. Nulla ante ligula, vulputate ac nisl et, iaculis fermentum magna. Morbi tempor rhoncus ante, sed hendrerit nunc pulvinar non. In varius, nisl non suscipit imperdiet, mi eros aliquam neque, sit amet ullamcorper orci ante a odio. Ut pretium vel nisl sed tempor. Nam commodo tincidunt ullamcorper. Fusce ornare ornare urna congue lobortis. Integer posuere facilisis eros eu accumsan. Ut hendrerit, lacus nec sagittis egestas, orci metus vehicula arcu, sit amet cursus turpis massa ut ipsum.
                /n/n
                Maecenas gravida ante eget condimentum sagittis. Curabitur sodales euismod aliquam. Nulla facilisi. Nulla in massa sollicitudin, interdum nunc a, dictum mauris. Sed rutrum fringilla molestie. Praesent at nisl justo. Quisque in tortor non massa consectetur suscipit sed vitae risus. Pellentesque mattis cursus fermentum. Duis leo magna, fringilla et interdum vel, varius et nibh. Nullam maximus elit erat, vitae finibus justo egestas in. Maecenas ultricies justo in dapibus posuere.
                /n/n
                Vestibulum sed purus egestas, hendrerit tortor quis, blandit justo. Phasellus vestibulum vel dolor sit amet viverra. Vivamus consequat mattis odio id fringilla. Vestibulum lobortis iaculis aliquet. Morbi eu blandit est, sit amet ullamcorper nisi. In hac habitasse.sectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt. 
        `},
    ];

    // Utility function to replace /n with line breaks
    function formatDescription(description) {
        return description.replace(/\/n/g, "<br/>");
    }
</script>


<section class="py-16 bg-white" id="governance">
    <div class="mx-32 pr-16">
        <!-- Header -->
        <h2 class="text-3xl text-customBlack font-semibold text-center mb-12">Governance Board</h2>
        
        <!-- Members Section -->
        {#each teamMembers as member}
            <div class="flex flex-col md:flex-row mb-12 p-6" id={member.id}>
                <!-- Left: Image and Info -->
                <div class="flex-shrink-0 md:w-1/5 text-center md:text-left">
                    <img src={member.image} alt={member.name} class="w-full h-auto max-w-xs rounded-sm mx-auto md:mx-0 mb-4 md:mb-6" />
                    <h3 class="text-2xl font-semibold mb-4">{member.name}</h3>
                    <p class="text-customBlack mb-1 font-thin">{member.organization}</p>
                    <p class="text-customBlack mb-1 font-thin leading-8">{member.title}</p>

                    <!-- Two Circles -->
                    <div class="flex justify-center md:justify-start space-x-2 mt-2">
                        <span class="w-6 h-6 bg-[#D9D9D9] rounded-full inline-block"></span>
                        <span class="w-6 h-6 bg-[#D9D9D9] rounded-full inline-block"></span>
                    </div>
                </div>

                <!-- Right: Description -->
                <div class="md:w-4/5 md:pl-8">
                    <!-- Use {@html} to inject raw HTML with line breaks -->
                    <p class="text-customBlack font-light leading-6">
                        {@html formatDescription(member.description)}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</section>


