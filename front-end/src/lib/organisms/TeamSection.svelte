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
    <div class="max-w-10xl mx-32">
        <h2 class="text-[2rem] text-customBlack font-bold text-center mb-14">People</h2>
        
        <h3 class="text-[1.5rem] font-semibold text-customBlack text-center mb-12">Advisory Board</h3>
        <div class="flex justify-center">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[100rem] w-full">
                {#each advisoryBoard as member, i}
                    <a href="{member.href}">
                        <div class={`w-full flex justify-center`}>
                            <ProfileCard 
                                src={member.src}
                                alt={member.alt}
                                name={member.name}
                                role={member.role}
                                title={member.title} 
                            />
                        </div>
                    </a>
                {/each}
            </div>
        </div>

        <h3 class="text-[1.5rem] font-semibold text-customBlack text-center mb-12 mt-16">Governance Board</h3>
        <div class="flex justify-center ">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl w-4/5">
                {#each governanceBoard as member, i}
                <a href={member.href}>
                    <div class={`w-full flex justify-center`}>
                        <ProfileCard 
                            src={member.src}
                            alt={member.alt}
                            name={member.name}
                            role={member.role}
                            title={member.title} 
                        />
                    </div>
                </a>
                {/each}
            </div>
        </div>

        <h3 class="text-[1.5rem] font-semibold text-customBlack text-center mb-12 mt-16">Investment Council</h3>
        <div class="flex justify-center">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl w-4/5">
                {#each investmentCouncil as member, i}
                    <a href={member.href}>
                        <div class="w-full flex justify-center">
                            <ProfileCard 
                                src={member.src}
                                alt={member.alt}
                                name={member.name}
                                role={member.role}
                                title={member.title} 
                            />
                        </div>
                    </a>
                {/each}
            </div>
        </div>

        
    </div>
</section>
