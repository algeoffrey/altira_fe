<script>
    import SponsorSection from "./SponsorSection.svelte";
  
    export let showAll = false;
    export let showInstitutionalSupporter = true;
    export let showStrategicPartners = true;
    export let showTrackRecords = true;
    export let showNetworkEcosystems = true;
</script>

<div>   
    {#if !showAll}
    
    <div class="py-4 mt-6 mb-4">

      {#if showInstitutionalSupporter}
      <div class="pb-2 mb-2" id="Institutional-Supporters">
        <SponsorSection 
          title="Institutional Supporters"
          maxColumns={5}
          maxRows={1}
          gap = 15
          width = 211
          height = 211
          logos={[
            { imgSrc: "/images/sponsor_logo/institutional_supporter/kfw_deg.svg", altText: "kfw deg" },
            { imgSrc: "/images/sponsor_logo/institutional_supporter/triple_jump.png", altText: "triple jump" },
            { imgSrc: "/images/sponsor_logo/institutional_supporter/dutch_good_growth_fund.jpg", altText: "ministry education netherland - dutch good growth fund" },
            { imgSrc: "/images/sponsor_logo/institutional_supporter/aavishkar_capital.png", altText: "aavishkar capital group" },
            { imgSrc: "/images/sponsor_logo/institutional_supporter/aavishkar_group.png", altText: "aavishkaar group" }
          ]}
          linkText="See More >"
        />
      </div>
      {/if}


      {#if showStrategicPartners}
      <div class="pb-2 mb-2" id="Strategic-Partners">
        <SponsorSection 
          title="Strategic Partners"
          maxColumns={4}
          maxRows={1}
          gap = 25
          width = 223
          height = 223
          logos={[
            { imgSrc: "/images/sponsor_logo/strategic_patners/Goers.png", altText: "Goers" },
            { imgSrc: "/images/sponsor_logo/strategic_patners/Cision.png", altText: "Cision" },
            { imgSrc: "/images/sponsor_logo/strategic_patners/Assegaf_Hamzah_Partners.png", altText: "Assegaf Hamzah & Partners" },
            { imgSrc: "/images/sponsor_logo/strategic_patners/Bina_Nusantara.png", altText: "Bina Nusantara" }
          ]}
          linkText="See More >"
        />
      </div>
      {/if}
    
      {#if showTrackRecords}
      <div id="Track-Record"> 
        <SponsorSection 
          title="Track Record & Recent Investments"
          subtitle="Innovation Pioneers"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum."
          maxColumns={7}
          maxRows={2}
          gap = 19
          width = 143
          height= 143
          logos={[
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
          ]}
          linkText="See More >"
        />
      
    
        <SponsorSection 
          subtitle="Innovation Leaders"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum."
          maxColumns={6}
          maxRows={2}
          gap=20
          width= 170
          height = 170
          logos={[
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
          ]}
          linkText="See More >"
        />

      </div>
      {/if}
    
      {#if showNetworkEcosystems}
        <div class="pb-2 mb-2" id="Network-Ecosystem">
          <SponsorSection 
            title="Network Ecosystem"
            paragraph="Through circular-hub model we support innovation by nurturing and developing inclusive relationships with both 
            individual and institutional partners and investors. Those we've collaborated with include : "
            maxColumns={9}
            maxRows={2}
            gap = 10
            width = 116
            height = 116
            logos={[
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
            ]}
            linkText="See More >"
          />
        </div>
        {/if}

        </div>


      {:else}
      
        <div class="py-6 mt-6 mb-4">
          <div class="pb-6 mb-6" id="Institutional-Supporters">
            <SponsorSection 
              title="Institutional Supporters"
              maxColumns={5}
              maxRows={1}
              gap = 15
              width = 211
              height = 211
              logos={[
                { imgSrc: "/images/sponsor_logo/institutional_supporter/kfw_deg.svg", altText: "kfw deg" },
                { imgSrc: "/images/sponsor_logo/institutional_supporter/triple_jump.png", altText: "triple jump" },
                { imgSrc: "/images/sponsor_logo/institutional_supporter/dutch_good_growth_fund.jpg", altText: "ministry education netherland - dutch good growth fund" },
                { imgSrc: "/images/sponsor_logo/institutional_supporter/aavishkar_capital.png", altText: "aavishkar capital group" },
                { imgSrc: "/images/sponsor_logo/institutional_supporter/aavishkar_group.png", altText: "aavishkaar group" }
              ]}
              linkText="See More >"
              showmore="N"
            />
          </div>
      
          <div class="pb-6 mb-6" id="Strategic-Partners">
            <SponsorSection 
              title="Strategic Partners"
              maxColumns={4}
              maxRows={1}
              gap = 25
              width = 223
              height = 223
              logos={[
                { imgSrc: "/images/sponsor_logo/strategic_patners/Goers.png", altText: "Goers" },
                { imgSrc: "/images/sponsor_logo/strategic_patners/Cision.png", altText: "Cision" },
                { imgSrc: "/images/sponsor_logo/strategic_patners/Assegaf_Hamzah_Partners.png", altText: "Assegaf Hamzah & Partners" },
                { imgSrc: "/images/sponsor_logo/strategic_patners/Bina_Nusantara.png", altText: "Bina Nusantara" }
              ]}
              linkText="See More >"
              showmore="N"
            />
          </div>
      
          <div class="pb-4 mb-4" id="Network-Ecosystem">
            <SponsorSection 
              title="Network Ecosystem"
              maxColumns={9}
              maxRows={9}
              gap = 12
              width = 120
              height = 120
              logos={[
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
              ]}
              linkText="See More >"
              showmore="N"
            />
          </div>
      
          <div id="Track-Record">
            <SponsorSection 
              title="Track Record & Recent Investments"
              subtitle="Innovation Pioneers"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum."
              maxColumns={7}
              maxRows={2}
              gap = 19
              width = 143
              height= 143
              logos={[
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
              ]}
              linkText="See More >"
              showmore="N"
            />
      
            <SponsorSection 
              subtitle="Innovation Leaders"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum."
              maxColumns={6}
              maxRows={2}
              gap=20
              width= 170
              height = 170
              logos={[
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
              ]}
              linkText="See More >"
              showmore="N"
            />
          </div>
        </div>
      {/if}
</div>
  

