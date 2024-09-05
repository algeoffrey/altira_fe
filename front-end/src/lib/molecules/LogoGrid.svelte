<script>
    import LogoImage from '/src/lib/atoms/LogoImage.svelte';

    export let logos = [
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
    ];

    export let maxColumns = 4;
    export let maxRows = 2;

    let currentIndex = 0;

    // Calculate max visible logos based on columns and rows
    const maxItems = maxColumns * maxRows;

    // Calculate the maximum index based on the total number of logos
    const maxIndex = Math.ceil(logos.length / maxItems) - 1;

    // Reactive statement for visible logos
    $: visibleLogos = logos.slice(currentIndex * maxItems, currentIndex * maxItems + maxItems);

    // Determine if buttons should be displayed
    $: showButtons = logos.length > maxItems;

    // Move the slider to the left
    function slideLeft() {
        if (showButtons) {
            currentIndex = (currentIndex - 1 + maxIndex + 1) % (maxIndex + 1);
            console.log('Slide Left:', currentIndex);
        }
    }

    // Move the slider to the right
    function slideRight() {
        if (showButtons) {
            currentIndex = (currentIndex + 1) % (maxIndex + 1);
            console.log('Slide Right:', currentIndex);
        }
    }
</script>

<div class="relative w-full max-w-10xl mx-auto">
    {#if showButtons}
        <!-- Left Arrow Button -->
        <button on:click={slideLeft} class="absolute left-4 top-1/2 transform -translate-y-1/2  z-10">
            <img src="/images/arrow_left.png" alt = "left slider arrow" width="12">
        </button>
    {/if}

    <!-- Logo Grid -->
    <div class="grid gap-6 px-12" style="grid-template-columns: repeat({maxColumns}, 1fr);">
        {#each visibleLogos as logo}
            <div class="flex justify-center items-center">
                <LogoImage imgSrc={logo.imgSrc} altText={logo.altText}/>
            </div>
        {/each}
    </div>

    {#if showButtons}
        <!-- Right Arrow Button -->
        <button on:click={slideLeft} class="absolute right-4 top-1/2 transform -translate-y-1/2  z-10">
            <img src="/images/arrow_right.png" alt = "right slider arrow" width="12">
        </button>
    {/if}
</div>
