<script>
  import { onMount } from 'svelte';
  import SponsorSection from "./SponsorSection.svelte";

  // Data for logos
  const institutionalSupporterLogos = [
      { imgSrc: "/images/sponsor_logo/institutional_supporter/kfw_deg.svg", altText: "kfw deg" },
      { imgSrc: "/images/sponsor_logo/institutional_supporter/triple_jump.png", altText: "triple jump" },
      { imgSrc: "/images/sponsor_logo/institutional_supporter/dutch_good_growth_fund.jpg", altText: "Dutch Good Growth Fund" },
      { imgSrc: "/images/sponsor_logo/institutional_supporter/aavishkar_capital.png", altText: "Aavishkar Capital" },
      { imgSrc: "/images/sponsor_logo/institutional_supporter/aavishkar_group.png", altText: "Aavishkar Group" }
  ];

  const strategicPartnersLogos = [
      { imgSrc: "/images/sponsor_logo/strategic_patners/Goers.png", altText: "Goers" },
      { imgSrc: "/images/sponsor_logo/strategic_patners/Cision.png", altText: "Cision" },
      { imgSrc: "/images/sponsor_logo/strategic_patners/Assegaf_Hamzah_Partners.png", altText: "Assegaf Hamzah & Partners" },
      { imgSrc: "/images/sponsor_logo/strategic_patners/Bina_Nusantara.png", altText: "Bina Nusantara" }
  ];

  const innovationPioneersLogos = [
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/1-nexian.png", altText: "nexian" },
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/2-carro.png", altText: "carro" },
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/3-kudo.webp", altText: "kudo" },
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/4-bukalapak.png", altText: "bukalapak" },
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/5-moka.webp", altText: "moka" },
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/6-indotrading.png", altText: "indotrading" },
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/7-vidio.png", altText: "vidio" },
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/8-doogether.webp", altText: "doogether" },
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/9-sepulsa.jpeg", altText: "sepulsa" },
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/10-karir.com.webp", altText: "karir.com" },
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/11-bridestory.webp", altText: "bride story" },
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/12-goers.webp", altText: "goers" },
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/13-tada.png", altText: "tada" },
      { imgSrc: "/images/sponsor_logo/innovation_pioneers/14-fazz.png", altText: "fazz" }
  ];

  const innovationLeadersLogos = [
      { imgSrc: "/images/sponsor_logo/innovation_leaders/1-goers.webp", altText: "goers" },
      { imgSrc: "/images/sponsor_logo/innovation_leaders/2-yoona.png", altText: "yoona" },
      { imgSrc: "/images/sponsor_logo/innovation_leaders/3-binar.png", altText: "binar" },
      { imgSrc: "/images/sponsor_logo/innovation_leaders/4-Selinall.png", altText: "sell in all" },
      { imgSrc: "/images/sponsor_logo/innovation_leaders/5-talentlytica.png", altText: "talentlytica" },
      { imgSrc: "/images/sponsor_logo/innovation_leaders/6-transtrack.png", altText: "transtrack" },
      { imgSrc: "/images/sponsor_logo/innovation_leaders/7-imajin.webp", altText: "imajin" },
      { imgSrc: "/images/sponsor_logo/innovation_leaders/8-myrobinid.png", altText: "my robin" },
      { imgSrc: "/images/sponsor_logo/innovation_leaders/9-meatlesskingdom.png", altText: "meatless kingdom" },
      { imgSrc: "/images/sponsor_logo/innovation_leaders/10-surplus.png", altText: "surplus" },
      { imgSrc: "/images/sponsor_logo/innovation_leaders/11-kasual.webp", altText: "kasual" },
      { imgSrc: "/images/sponsor_logo/innovation_leaders/12-riliv.png", altText: "riliv" }
  ];

  const networkEcosystemLogos = [
      { imgSrc: '/images/sponsor_logo/network_ecosystem/1.aavishkar_capital.png', altText: 'Aavishkaar Group' },
      { imgSrc: '/images/sponsor_logo/network_ecosystem/2.access_ventures.png', altText: 'Access Ventures' },
      { imgSrc: '/images/sponsor_logo/network_ecosystem/3.accion.png', altText: 'Accion' },
      { imgSrc: '/images/sponsor_logo/network_ecosystem/4.ac_ventures.png', altText: 'AC Ventures' },
      { imgSrc: '/images/sponsor_logo/network_ecosystem/5.add_ventures.png', altText: 'Add Ventures' },
      { imgSrc: '/images/sponsor_logo/network_ecosystem/6.alpha_jwc_ventures.png', altText: 'Alpha JWC Ventures' },
      { imgSrc: '/images/sponsor_logo/network_ecosystem/7.alpha_momentum.png', altText: 'Alpha Momentum' },
      { imgSrc: '/images/sponsor_logo/network_ecosystem/8.angin.png', altText: 'Angin' },
      { imgSrc: '/images/sponsor_logo/network_ecosystem/9.astra_venture.png', altText: 'Astra Ventura' },
      { imgSrc: '/images/sponsor_logo/network_ecosystem/10.atm_capital.png', altText: 'atm capital' },
      { imgSrc: '/images/sponsor_logo/network_ecosystem/11.bace_capital.png', altText: 'BAce Capital'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/12.bri_ventures.png', altText: 'BRI Ventures'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/13.central_capital_ventura.png', altText: 'Central Capital Ventura'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/14.convergence.png', altText: 'Convergence'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/15.cyber_agent_capital.png', altText: 'Cyber Agent Capital'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/16.east_ventures.png', altText: 'East Ventures'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/17.filantropi_indonesia.png', altText: 'Filantropi Indonesia'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/18.finch_capital.png', altText: 'Finch Capital'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/19.gobi_partners.png', altText: 'Gobi Partners'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/20.genesia_ventures.png', altText: 'Genesia Ventures'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/21.instellar.png', altText: 'Instellar'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/22.fundnel.png', altText: 'Fundnel'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/23.lima_ventura.png', altText: 'Lima Ventura'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/24.patamar_capital.png', altText: 'Patamar Capital'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/25.orbit.png', altText: 'Orbit'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/26.more.png', altText: 'More'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/27.northstar.png', altText: 'Northstar'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/29.kk.png', altText: 'KK'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/30.md.png', altText: 'MD'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/31.markplus_inc.png', altText: 'Markplus Incorporate'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/32.vertex_ventures.png', altText: 'Vertex Ventures'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/33.iwef.png', altText: 'Indonesia Women Empowerement Fund'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/34.init6.png', altText: 'Init 6'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/35.gfc.png', altText: 'Global Founders Capital'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/36.1982_ventures.png', altText: '1982 Ventures'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/37.ventura_discovery.png', altText: 'Ventura Discovery'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/38.umg_idealab.png', altText: 'UMG Idea Lab'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/39.grab_ventures.png', altText: 'Grab Ventures'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/40.goventures.png', altText: 'Goventures'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/41.sv_investment.png', altText: 'SV Invesment'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/42.spiral_ventures.png', altText: 'Spiral Ventures'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/43.prasetia.png', altText: 'Prasetia'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/44.gayo_capital.png', altText: 'Gayo Capital'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/45.indogen_capital.png', altText: 'Indogen Capital'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/46.kejora_ventures.png', altText: 'Kejora Ventures'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/47.sovereigns_capital.png', altText: 'Sovereigns Capital'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/48.tnb_aura.png', altText: 'TNB Aura'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/49.skystar_capital.png', altText: 'Skystar Capital'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/50.openspace_ventures.png', altText: 'Openspace ventures'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/51.golden_space_capital.png', altText: 'Golden Space Capital'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/52.mdi_ventures.png', altText: 'MDI Ventures'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/53.ocbc_nisp_ventura.png', altText: 'OCBC NISP Ventura'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/54.mahanusa.png', altText: 'Mahanusa'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/55.kemenparekraf.png', altText: 'Kementerian Pariwisata Republik Indonesia'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/56.kolibra_capital.png', altText: 'Kolibra Capital'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/57.kemendikbud.png', altText: 'Kementrian Pendidikan dan Kebudayaan'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/58.monks_hill_ventures.png', altText: 'Monks Hill Ventures'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/59.golden_gate_venture.png', altText: 'Golden Gate Venture'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/60.new_energy_nexus_indonesia.png', altText: 'New Energy Nexus Indonesia'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/61.mandiri_capital.png', altText: 'Mandiri Capital'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/62.wavemaker.png', altText: 'Wavemaker'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/63.jungle.png', altText: 'Jungle'},
      { imgSrc: '/images/sponsor_logo/network_ecosystem/64.investing_in_women.png', altText: 'Investing in Women'},
  ];

  const introParagraph = 
    {
      institutionalSupporter : "Backed by global institutions and partners, we help drive progress in the local and regional innovation ecosystem, creating lasting impact and tangible results. Together, we foster entrepreneurship, drive innovation, scale businesses, and accelerate asset growth in the Southeast Asia region and beyond.",
      strategicPartnersConfig : "",
      innovationPioneers : "Our portfolio includes trailblazing companies that have reshaped their respective industries. Through legacy Angel-eQ Network, we have supported and championed startups that have set new standards in their fields, driving systemic change, market growth and technological advancement.",
      innovationLeaders : "More recently, we have supported the following emerging leaders who are at the forefront of the next digital transformation and innovation, applying modern business models, creating new opportunities and delivering lasting impact and value. These innovators are shaping tomorrow’s markets and inspiring the next generation of entrepreneurs.",
      networkEcosystem : "We thrive on collaboration and operate based on a networked ecosystem built on circular-hub model, supporting innovation through strong relationships with fund managers like venture capital and private equity firms, accelerators and incubators, government agencies as well as academic institutions."
    }


  let isMobile = false;
  let isTablet = false;

  // Detect if the device is mobile on the client-side
  onMount(() => {
    isMobile = window.innerWidth <= 640;

    // Optionally, add a resize listener to dynamically adjust `isMobile`
    const handleResize = () => {
      isMobile = window.innerWidth <= 640;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });


export let showAll = false;


$: institutionalSupporterConfig = isMobile
    ? { maxColumns: 2, maxRows: 2, rowGap : 12, columnGap : 21, width: 120, height: 120, logos: showAll ? institutionalSupporterConfig : institutionalSupporterLogos.slice(0, 4), seeMoreLink: "/institutional-supporters" }
    : isTablet
    ? { maxColumns: 3, maxRows: 2, width: 150, height: 150, logos: institutionalSupporterLogos, seeMoreLink: "/institutional-supporters" }
    : { maxColumns: 5, maxRows: 1, width: 200, height: 200, logos: institutionalSupporterLogos, seeMoreLink: "/institutional-supporters" };

$: strategicPartnersConfig = isMobile
    ? { maxColumns: 2, maxRows: 2, width: 120, height: 120, logos: showAll ? strategicPartnersLogos : strategicPartnersLogos.slice(0, 4), seeMoreLink: "/strategic-partners" }
    : isTablet
    ? { maxColumns: 3, maxRows: 2, width: 150, height: 150, logos: strategicPartnersLogos, seeMoreLink: "/strategic-partners" }
    : { maxColumns: 4, maxRows: 1, width: 200, height: 200, logos: strategicPartnersLogos, seeMoreLink: "/strategic-partners" };

$: innovationPioneersConfig = isMobile
    ? { maxColumns: 3, maxRows: 3, width: 120, height: 120, logos: showAll ? innovationPioneersLogos : innovationPioneersLogos.slice(0, 6), seeMoreLink: "/innovation-pioneers" }
    : isTablet
    ? { maxColumns: 4, maxRows: 2, width: 150, height: 150, logos: innovationPioneersLogos, seeMoreLink: "/innovation-pioneers" }
    : { maxColumns: 7, maxRows: 2, width: 200, height: 200, logos: innovationPioneersLogos, seeMoreLink: "/innovation-pioneers" };

$: innovationLeadersConfig = isMobile
    ? { maxColumns: 3, maxRows: 3, width: 120, height: 120, logos: showAll ? innovationLeadersLogos : innovationLeadersLogos.slice(0, 6), seeMoreLink: "/innovation-leaders" }
    : isTablet
    ? { maxColumns: 4, maxRows: 2, width: 150, height: 150, logos: innovationLeadersLogos, seeMoreLink: "/innovation-leaders" }
    : { maxColumns: 6, maxRows: 2, rowGap : 12, columnGap : 10, width: 200, height: 200, logos: innovationLeadersLogos, seeMoreLink: "/innovation-leaders" };

$: networkEcosystemConfig = isMobile
    ? { maxColumns: 3, maxRows: 3, rowGap : 12, columnGap : 10,width: 120, height: 120, logos: showALl ? networkEcosystemLogos : networkEcosystemLogos.slice(0, 6), seeMoreLink: "/network-ecosystem" }
    : isTablet
    ? { maxColumns: 4, maxRows: 2, rowGap : 12, columnGap : 10,width: 150, height: 150, logos: networkEcosystemLogos, seeMoreLink: "/network-ecosystem" }
    : { maxColumns: 9, maxRows: 2, rowGap : 12, columnGap : 10, width: 200, height: 200, logos: networkEcosystemLogos, seeMoreLink: "/network-ecosystem" };


</script>

<div class="container mx-auto py-8 px-4 sm:px-8 md:px-12 lg:px-16">
  <!-- Institutional Supporters -->

  <p class="text-[0.9rem] sm:text-[1rem] font-[400] mt-6 sm:mt-8 mb-6 sm:mb-8 px-2 max-w-sm sm:max-w-xl md:max-w-5xl lg:max-w-6xl mx-auto leading-relaxed text-left">
    {introParagraph.institutionalSupporter}
  </p>

  <div class="pb-4 mb-6 relative">
    <SponsorSection 
    title="Institutional Supporters"
    maxColumns={institutionalSupporterConfig.maxColumns}
    maxRows={institutionalSupporterConfig.maxRows}
    logos={institutionalSupporterConfig.logos}
    width={institutionalSupporterConfig.width}
    height={institutionalSupporterConfig.height}
    showAll = {showAll}
/>

  </div>

  <!-- Strategic Partners -->
  <div class="pb-4 mb-6 relative">
    <SponsorSection 
    title="Strategic Partners"
    maxColumns={strategicPartnersConfig.maxColumns}
    maxRows={strategicPartnersConfig.maxRows}
    logos={strategicPartnersConfig.logos}
    width={strategicPartnersConfig.width}
    height={strategicPartnersConfig.height}
    showAll = {showAll}
/>

  </div>

  <!-- Innovation Pioneers -->
  <div class="pb-4 mb-6 relative">
    <SponsorSection 
    title="Innovation Pioneers"
    paragraph = {introParagraph.innovationLeaders}
    maxColumns={innovationPioneersConfig.maxColumns}
    maxRows={innovationPioneersConfig.maxRows}
    logos={innovationPioneersConfig.logos}
    width={innovationPioneersConfig.width}
    height={innovationPioneersConfig.height}
    showAll = {showAll}
/>
  </div>

    <!-- Innovation Leaders -->
    <div class="pb-4 mb-6 relative">
      <SponsorSection 
      title="Innovation Leaders"
      paragraph = {introParagraph.innovationLeaders}
      maxColumns={innovationLeadersConfig.maxColumns}
      maxRows={innovationLeadersConfig.maxRows}
      logos={innovationLeadersConfig.logos}
      width={innovationLeadersConfig.width}
      height={innovationLeadersConfig.height}
      showAll = {showAll}
  />

  </div>

  <!-- Network Ecosystem -->
    <div class="pb-4 mb-6 relative">
      <SponsorSection 
      title="Network Ecosystem"
      paragraph = {introParagraph.networkEcosystem}
      maxColumns={networkEcosystemConfig.maxColumns}
      maxRows={networkEcosystemConfig.maxRows}
      logos={networkEcosystemConfig.logos}
      width={networkEcosystemConfig.width}
      height={networkEcosystemConfig.height}
      showAll = {showAll}
  />
  </div>
</div>
