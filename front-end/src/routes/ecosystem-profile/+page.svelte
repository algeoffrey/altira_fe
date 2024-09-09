<script>
    import { 
      Navbar, 
      PageHeader, 
      SponsorSection,
      Footer} from '/src/lib/organisms';
  </script>
  
  <Navbar theme="black" />

  <PageHeader
  title="Ecosystem Profile"
  backgroundColor="#19D4E6"  
  secondaryColor="#6950FE"     
  titleColor="#000000"         
  subHeaderTextColor="#FFFFFF"
  subHeaderLinks={[
    { name: "Institutional Supporters", href: "/ecosystem-profile#Institutional-Supporters"},
    { name: "Strategic Partners", href: "/ecosystem-profile#Strategic-Partners"},
    { name: "Network Ecosystem", href: "/ecosystem-profile#Network-Ecosystem"},
    { name: "Track Record ", href: "/ecosystem-profile#Track-Record"},
  ]}
/>


<div class="py-6 mt-6 mb-4">
  
  <div class="pb-6 mb-6" id="Institutional-Supporters">
    <SponsorSection 
    title="Institutional Supporters"
    maxColumns={5}
    maxRows={1}
    logos={[
        { imgSrc: "/images/kfw_deg.svg", altText: "kfw deg" },
        { imgSrc: "/images/triple_jump.svg", altText: "triple jump" },
        { imgSrc: "/images/ministry_education_netherland.svg", altText: "ministry education netherland" },
        { imgSrc: "/images/aavishkar_capital_group.svg", altText: "aavishkar capital group" },
        { imgSrc: "/images/aavishkaar_group.svg", altText: "aavishkaar group" }
    ]}
    linkText="See More >"
    showmore = "N"
    />
  </div>

  <div class="pb-6 mb-6" id = "Strategic-Partners">
    <SponsorSection 
      title="Strategic Patners"
      maxColumns={4}
      maxRows={1}
      logos={[
          { imgSrc: "/images/goers.svg", altText: "goers" },
          { imgSrc: "/images/cision.svg", altText: "cision pr newswire" },
          { imgSrc: "/images/assegaf_hamzah_partners.svg", altText: "assegaf hamzah & partners" },
          { imgSrc: "/images/bina_nusantara.svg", altText: "aavishkar capital group" }
      ]}
      linkText="See More >"
      showmore = "N"
    />
  </div>

  <div class="pb-6 mb-6" id = "Network-Ecosystem">
    <SponsorSection 
      title="Network Ecosystem"
      maxColumns={9}
      maxRows={9}
      logos = { [
        { imgSrc: '/images/network_ecosystem/1.aavishkar_capital.png', altText: 'Aavishkaar Group' },
        { imgSrc: '/images/network_ecosystem/2.access_ventures.png', altText: 'Access Ventures' },
        { imgSrc: '/images/network_ecosystem/3.accion.png', altText: 'Accion' },
        { imgSrc: '/images//network_ecosystem/4.ac_ventures.png', altText: 'AC Ventures' },
        { imgSrc: '/images/network_ecosystem/5.add_ventures.png', altText: 'Add Ventures' },
        { imgSrc: '/images/network_ecosystem/6.alpha_jwc_ventures.png', altText: 'Alpha JWC Ventures' },
        { imgSrc: '/images/network_ecosystem/7.alpha_momentum.png', altText: 'Alpha Momentum' },
        { imgSrc: '/images/network_ecosystem/8.angin.png', altText: 'Angin' },
        { imgSrc: '/images/network_ecosystem/9.astra_venture.png', altText: 'Astra Ventura' },
        { imgSrc: '/images/network_ecosystem/10.atm_capital.png', altText: 'atm capital' },
        { imgSrc: '/images/network_ecosystem/11.bace_capital.png', altText: 'BAce Capital'},
        { imgSrc: '/images/network_ecosystem/12.bri_ventures.png', altText: 'BRI Ventures'},
        { imgSrc: '/images/network_ecosystem/13.central_capital_ventura.png', altText: 'Central Capital Ventura'},
        { imgSrc: '/images/network_ecosystem/14.convergence.png', altText: 'Convergence'},
        { imgSrc: '/images/network_ecosystem/15.cyber_agent_capital.png', altText: 'Cyber Agent Capital'},
        { imgSrc: '/images/network_ecosystem/16.east_ventures.png', altText: 'East Ventures'},
        { imgSrc: '/images/network_ecosystem/17.filantropi_indonesia.png', altText: 'Filantropi Indonesia'},
        { imgSrc: '/images/network_ecosystem/18.finch_capital.png', altText: 'Finch Capital'},
        { imgSrc: '/images/network_ecosystem/19.gobi_partners.png', altText: 'Gobi Partners'},
        { imgSrc: '/images/network_ecosystem/20.genesia_ventures.png', altText: 'Genesia Ventures'},
        { imgSrc: '/images/network_ecosystem/21.instellar.png', altText: 'Instellar'},
        { imgSrc: '/images/network_ecosystem/22.fundnel.png', altText: 'Fundnel'},
        { imgSrc: '/images/network_ecosystem/23.lima_ventura.png', altText: 'Lima Ventura'},
        { imgSrc: '/images/network_ecosystem/24.patamar_capital.png', altText: 'Patamar Capital'},
        { imgSrc: '/images/network_ecosystem/25.orbit.png', altText: 'Orbit'},
        { imgSrc: '/images/network_ecosystem/26.>.png', altText: '>'},
        { imgSrc: '/images/network_ecosystem/27.northstar.png', altText: 'Northstar'},
        { imgSrc: '/images/network_ecosystem/29.kk.png', altText: 'KK'},
        { imgSrc: '/images/network_ecosystem/30.md.png', altText: 'MD'},
        { imgSrc: '/images/network_ecosystem/31.markplus_inc.png', altText: 'Markplus Incorporate'},
        { imgSrc: '/images/network_ecosystem/32.vertex_ventures.png', altText: 'Vertex Ventures'},
        { imgSrc: '/images/network_ecosystem/33.iwef.png', altText: 'Indonesia Women Empowerement Fund'},
        { imgSrc: '/images/network_ecosystem/34.init6.png', altText: 'Init 6'},
        { imgSrc: '/images/network_ecosystem/35.gfc.png', altText: 'Global Founders Capital'},
        { imgSrc: '/images/network_ecosystem/36.1982_ventures.png', altText: '1982 Ventures'},
        { imgSrc: '/images/network_ecosystem/37.ventura_discovery.png', altText: 'Ventura Discovery'},
        { imgSrc: '/images/network_ecosystem/38.umg_idealab.png', altText: 'UMG Idea Lab'},
        { imgSrc: '/images/network_ecosystem/39.grab_ventures.png', altText: 'Grab Ventures'},
        { imgSrc: '/images/network_ecosystem/40.goventures.png', altText: 'Goventures'},
        { imgSrc: '/images/network_ecosystem/41.sv_investment.png', altText: 'SV Invesment'},
        { imgSrc: '/images/network_ecosystem/42.spiral_ventures.png', altText: 'Spiral Ventures'},
        { imgSrc: '/images/network_ecosystem/43.prasetia.png', altText: 'Prasetia'},
        { imgSrc: '/images/network_ecosystem/44.gayo_capital.png', altText: 'Gayo Capital'},
        { imgSrc: '/images/network_ecosystem/45.indogen_capital.png', altText: 'Indogen Capital'},
        { imgSrc: '/images/network_ecosystem/46.kejora_ventures.png', altText: 'Kejora Ventures'},
        { imgSrc: '/images/network_ecosystem/47.sovereigns_capital.png', altText: 'Sovereigns Capital'},
        { imgSrc: '/images/network_ecosystem/48.tnb_aura.png', altText: 'TNB Aura'},
        { imgSrc: '/images/network_ecosystem/49.skystar_capital.png', altText: 'Skystar Capital'},
        { imgSrc: '/images/network_ecosystem/50.openspace_ventures.png', altText: 'Openspace ventures'},
        { imgSrc: '/images/network_ecosystem/51.golden_space_capital.png', altText: 'Golden Space Capital'},
        { imgSrc: '/images/network_ecosystem/52.mdi_ventures.png', altText: 'MDI Ventures'},
        { imgSrc: '/images/network_ecosystem/53.ocbc_nisp_ventura.png', altText: 'OCBC NISP Ventura'},
        { imgSrc: '/images/network_ecosystem/54.mahanusa.png', altText: 'Mahanusa'},
        { imgSrc: '/images/network_ecosystem/55.kemenparekraf.png', altText: 'Kementerian Pariwisata Republik Indonesia'},
        { imgSrc: '/images/network_ecosystem/56.kolibra_capital.png', altText: 'Kolibra Capital'},
        { imgSrc: '/images/network_ecosystem/57.kemendikbud.png', altText: 'Kementrian Pendidikan dan Kebudayaan'},
        { imgSrc: '/images/network_ecosystem/58.monks_hill_ventures.png', altText: 'Monks Hill Ventures'},
        { imgSrc: '/images/network_ecosystem/59.golden_gate_venture.png', altText: 'Golden Gate Venture'},
        { imgSrc: '/images/network_ecosystem/60.new_energy_nexus_indonesia.png', altText: 'New Energy Nexus Indonesia'},
        { imgSrc: '/images/network_ecosystem/61.mandiri_capital.png', altText: 'Mandiri Capital'},
        { imgSrc: '/images/network_ecosystem/62.wavemaker.png', altText: 'Wavemaker'},
        { imgSrc: '/images/network_ecosystem/63.jungle.png', altText: 'Jungle'},
        { imgSrc: '/images/network_ecosystem/64.investing_in_women.png', altText: 'Investing in Women'},
      ]}
      linkText="See More >"
      showmore = "N"
    />
  </div>

   <div id="Track-Record">
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
      showmore = "N"
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
        showmore = "N"
    />
   </div>
   
</div>


<Footer/>