<script>
    import ProfileCard from '/src/lib/molecules/ProfileCard.svelte';

    export let advisoryBoard = [
        {
            src: "/images/lesley-b.jpg",
            alt: "Lesley Bendig",
            name: "Lesley Bendig",
            role: "Present Value",
            title: "Sr. Advisor, Private Equity & Venture Capital",
            href: "our-people#lesley-bendig"
        },
        {
            src: "/images/robert_w.jpg",
            alt: "Robert W. van Zweiten",
            name: "Robert W. van Zweiten",
            role: "Route 17",
            title: "Advisory Founding Partner, Innovative Finance",
            href: "our-people#robert-van-zwieten"
        },
        {
            src: "/images/annie_k.jpg",
            alt: "Annie Koh",
            name: "Annie Koh",
            role: "Prof. Emeritus of Finance, Business Families Institute",
            title: "Sr. Advisor, SMU",
            href: "our-people#annie-koh"
        },
        {
            src: "/images/renaldi_z.jpg",
            alt: "Renaldi Zulkarnain",
            name: "Renaldi Zulkarnain",
            role: "Assegaf Hamzah & Partners",
            title: "Partner, Investments & Capital Markets",
            href: "our-people#renaldi-zulkarnain"
        },
    ];

    export let governanceBoard = [
        {
            src: "/images/marnix_m.jpg",
            alt: "Marnix Mulder",
            name: "Marnix Mulder",
            role: "Triple Jump / DGGF",
            title: "Director Market Development",
            href: "our-people#marnix-mulder"
        },
        {
            src: "/images/adriani_o.jpg",
            alt: "Adriani Onie",
            name: "Adriani Onie",
            role: "Altira",
            title: "Founder, CEO",
            href: "our-people#adriani-onie"
        },
        {
            src: "/images/venkat_n.jpg",
            alt: "Venkat Narayan",
            name: "Venkat Narayan",
            role: "Aavishkar Capital",
            title: "Partner",
            href: "our-people#venkat-narayan"
        },
    ];

    export let investmentCouncil = [
        {
            src: "/images/daniel_b.jpg",
            alt: "Daniel Budiman",
            name: "Daniel Budiman",
            role: "Mahanusa Capital",
            title: "Co-Founder, Managing Partner",
            href: "our-people#daniel-budiman"
        },
        {
            src: "/images/arya_s.jpg",
            alt: "Arya Dwidharma",
            name: "Arya Setiadharma",
            role: "Prasetia Dwidharma",
            title: "Founder, CEO",
            href: "our-people#arya-setiadharma"
        },
        {
            src: "/images/stephanie_h.jpg",
            alt: "Stephanie Hermawan",
            name: "Stephanie Hermawan",
            role: "Impact Angel Investor",
            title: "Managing Director, Markplus, Inc.",
            href: "our-people#stephanie-hermawan"
        },
        {
            src: "/images/adriani_o.jpg",
            alt: "Adriani Onie",
            name: "Adriani Onie",
            role: "Altira",
            title: "Founder, CEO",
            href: "our-people#adriani-onie"
        },
        {
            src: "/images/kevin_s.jpg",
            alt: "Kevin Sutantyo",
            name: "Kevin Sutantyo",
            role: "Sovereign's capital",
            title: "Partner",
            href: "our-people#kevin-sutantyo"
        },
        {
            src: "/images/carlson_l.jpg",
            alt: "Carlson Lau",
            name: "Carlson Lau",
            role: "Northstar Ventures",
            title: "Co-Head, Managing Director",
            href: "our-people#carlson-lau"
        },
        {
            src: "/images/jeffrey_p.jpg",
            alt: "Jeffrey Paine",
            name: "Jeffrey Paine",
            role: "Golden Gate Ventures",
            title: "Co-Founder, Managing Partner",
            href: "our-people#jeffrey-paine"
        },
        {
            src: "/images/adrianto_h.jpg",
            alt: "Adrianto Hermawi",
            name: "Adrianto Hermawi",
            role: "Kiwoom Investment",
            title: "Independent Commisioner",
            href: "our-people#adrianto-hermawi"
        },
        {
            src: "/images/shiyan_k.jpg",
            alt: "Shiyan Koh",
            name: "Shiyan Koh",
            role: "Hustle Fund",
            title: "Co-Founder, Managing Partner",
            href: "our-people#shiyan-koh"
        },
    ];


    function isLastOdd(index, length) {
        return length % 2 !== 0 && index === length - 1;
    }
</script>

<section class="py-10 bg-gray-100 relative" id="people">
    <div class="max-w-7xl mx-auto px-4">
        <!-- Section Title -->
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14 text-customBlack">People</h2>
        
        <!-- Advisory Board -->
        <h3 class="text-xl md:text-2xl font-semibold text-center mb-8 md:mb-12 text-customBlack">Advisory Board</h3>
        <div class="flex justify-center">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
                {#each advisoryBoard as member}
                    <a href="{member.href}" class="flex justify-center">
                        <ProfileCard 
                            src={member.src}
                            alt={member.alt}
                            name={member.name}
                            role={member.role}
                            title={member.title} 
                        />
                    </a>
                {/each}
            </div>
        </div>

        <!-- Governance Board -->
        <h3 class="text-xl md:text-2xl font-semibold text-center mt-10 md:mt-16 mb-8 md:mb-12 text-customBlack">Governance Board</h3>
        <div class="flex justify-center">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
                {#each governanceBoard as member}
                    <a href="{member.href}" class="flex justify-center align-baseline">
                        <ProfileCard 
                            src={member.src}
                            alt={member.alt}
                            name={member.name}
                            role={member.role}
                            title={member.title} 
                        />
                    </a>
                {/each}
            </div>
        </div>

        <!-- Investment Council -->
        <h3 class="text-xl md:text-2xl font-semibold text-center mt-10 md:mt-16 mb-8 md:mb-12 text-customBlack">Investment Council</h3>
        <div class="flex justify-center">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
                {#each investmentCouncil as member}
                    <a href="{member.href}" class="flex justify-center">
                        <ProfileCard 
                            src={member.src}
                            alt={member.alt}
                            name={member.name}
                            role={member.role}
                            title={member.title} 
                        />
                    </a>
                {/each}
            </div>
        </div>
    </div>
</section>


