<script>
    import { Navbar, PageHeader, MissionAndStory, TeamSection, SponsorSection, Footer } from '$lib/organisms';
  </script>
  
  <Navbar theme="custom" />

  <PageHeader
  title="About"
  backgroundColor="#00CFE8"
  secondaryColor="#6166DC"
  titleColor="#000000"
  subHeaderTextColor= "#FFFFFF"
  subHeaderLinks={[
    { name: "Mission & Story", href: "/about#mission" },
    { name: "People", href: "/about#people" },
    { name: "Partners & Supporters", href: "/about#partners" },
    { name: "Track Record", href: "/about#track-record" }
  ]}
/>

<MissionAndStory />

<TeamSection />

<SponsorSection 
    title="Track Record & Recent Investments"
    subtitle = "Innovation Pioneers"
    paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum."
    maxColumns={7}
    maxRows={2}
    logos={[
        { imgSrc: "/images/nexian.svg", altText: "nexian" },
        { imgSrc: "/images/carro.svg", altText: "carro" },
        { imgSrc: "/images/kudo.svg", altText: "kudo" },
        { imgSrc: "/images/bukalapak.svg", altText: "bukalapak" },
        { imgSrc: "/images/moka.svg", altText: "moka" },
        { imgSrc: "/images/indotrading.svg", altText: "indotrading" },
        { imgSrc: "/images/vidio.svg", altText: "vidio" },
        { imgSrc: "/images/doogether.svg", altText: "doogether" },
        { imgSrc: "/images/sepulsa.svg", altText: "sepulsa" },
        { imgSrc: "/images/karir_com.svg", altText: "karir.com" },
        { imgSrc: "/images/bridestory.svg", altText: "bride story" },
        { imgSrc: "/images/goers.svg", altText: "goers" },
        { imgSrc: "/images/tada.svg", altText: "tada" },
        { imgSrc: "/images/fazz.svg", altText: "fazz" },
    ]}
    linkText="See More >"
    seeMoreLink="#"
/>

<SponsorSection 
    subtitle = "Innovation Leaders"
    paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum."
    maxColumns={6}
    maxRows={2}
    logos={[
        { imgSrc: "/images/goers.svg", altText: "goers" },
        { imgSrc: "/images/yoona.svg", altText: "yoona" },
        { imgSrc: "/images/binar.svg", altText: "binar" },
        { imgSrc: "/images/sell_in_all.svg", altText: "sell in all" },
        { imgSrc: "/images/talentlytica.svg", altText: "talentlytica" },
        { imgSrc: "/images/transtrack.svg", altText: "trans track" },
        { imgSrc: "/images/imajin.svg", altText: "imajin" },
        { imgSrc: "/images/my_robin.svg", altText: "my robin" },
        { imgSrc: "/images/meatless_kingdom.svg", altText: "meatless kingdom" },
        { imgSrc: "/images/surpluss.svg", altText: "surpluss" },
        { imgSrc: "/images/kasual.svg", altText: "kasual" },
        { imgSrc: "/images/riliv.svg", altText: "riliv" },
    ]}
    linkText="See More >"
    seeMoreLink="#"
/>

<SponsorSection 
title = "Network Ecosystem"
paragraph = "Through circular-hub model we support innovation by nurturing and developing inclusive relationships with both 
individual and institutional partners and investors. Those we've collaborated with include : "
maxColumns={9}
maxRows={2}
logos={[
    { imgSrc: "/images/aavishkaar_capital.svg", altText: "haavishkaar capital" },
    { imgSrc: "/images/access_ventures.svg", altText: "access ventures" },
    { imgSrc: "/images/accion.svg", altText: "accion" },
    { imgSrc: "/images/ac_ventures.svg", altText: "ac ventures" },
    { imgSrc: "/images/add_ventures.svg", altText: "add ventures" },
    { imgSrc: "/images/alpha_jwc_ventures.svg", altText: "alpha jwc ventures" },
    { imgSrc: "/images/alpha_momentum.svg", altText: "alpha momentum" },
    { imgSrc: "/images/angin.svg", altText: "angin" },
    { imgSrc: "/images/astra_ventura.svg", altText: "astra venture" },
    { imgSrc: "/images/atm_capital.svg", altText: "atm capital" },
    { imgSrc: "/images/bace_capital.svg", altText: "Bace capital" },
    { imgSrc: "/images/bvi.svg", altText: "bvi" },
    { imgSrc: "/images/central_capital_venture.svg  ", altText: "central capital venture" },
    { imgSrc: "/images/convergence.svg", altText: "convergence" },
    { imgSrc: "/images/cyberagent_capital.svg", altText: "cyber agent capital" },
    { imgSrc: "/images/northstar.svg", altText: "northstar" },
    { imgSrc: "/images/east_ventures.svg", altText: "east ventures" },
    { imgSrc: "/images/filantropi_indonesia.svg", altText: "filantropi indonesia" },
]}
linkText="See More >"
seeMoreLink="#"
/>

<Footer />