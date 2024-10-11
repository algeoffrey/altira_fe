<script>
    import LogoImage from '/src/lib/atoms/LogoImage.svelte';

    export let logos = [
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

    export let maxColumns = 4;
    export let maxRows = 2;
    export let gap = 15;
    export let width = 211;
    export let height = 211;

    let currentIndex = 0;

    // Calculate max visible logos based on columns and rows
    const maxItems = maxColumns * maxRows;

    // Reactive statement for maximum index
    $: maxIndex = Math.ceil(logos.length / maxItems);

    // Determine if buttons should be displayed
    $: showButtons = logos.length > maxItems;

    // Move the slider to the left
    function slideLeft() {
        if (showButtons && currentIndex > 0) {
            currentIndex = currentIndex - 1;
        }
    }

    // Move the slider to the right
    function slideRight() {
        if (showButtons && currentIndex < maxIndex - 1) {
            currentIndex = currentIndex + 1;
        }
    }
</script>

<style>
    .slider-container {
        overflow: hidden;
        position: relative;
    }
    .slider-content {
        display: flex;
        transition: transform 0.5s ease;
        flex-wrap: nowrap;
    }
    .slide {
        flex: 0 0 100%;
    }
    .grid {
        display: grid;
        gap: var(--gap);
        grid-template-columns: repeat(var(--maxColumns), 1fr);
        padding: 2rem;
    }
    .arrow-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }
    .arrow-button.disabled {
        opacity: 0.5;
        cursor: default;
    }
    .arrow-left {
        left: 1rem; /* Increased space between arrow and grid */
    }
    .arrow-right {
        right: 1rem; /* Increased space between arrow and grid */
    }
</style>

<div class="relative w-full max-w-10xl mx-auto">
    {#if showButtons}
        <!-- Left Arrow Button -->
        <button 
            on:click={slideLeft} 
            class="arrow-button arrow-left {currentIndex === 0 ? 'disabled' : ''}"
            disabled={currentIndex === 0}
        >
            <img src="/images/arrow_left.png" alt="left slider arrow" width="12">
        </button>
    {/if}

    <!-- Slider Container -->
    <div class="slider-container">
        <div
            class="slider-content"
            style="transform: translateX(-{currentIndex * 100}%);"
        >
            {#each Array(maxIndex) as _, index}
                <div class="slide">
                    <div class="grid" style="--gap: {gap}px; --maxColumns: {maxColumns};">
                        {#each logos.slice(index * maxItems, index * maxItems + maxItems) as logo}
                            <div class="flex justify-center items-center">
                                <LogoImage imgSrc={logo.imgSrc} altText={logo.altText} width={width} height={height} />
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>

    {#if showButtons}
        <!-- Right Arrow Button -->
        <button 
            on:click={slideRight} 
            class="arrow-button arrow-right {currentIndex === maxIndex - 1 ? 'disabled' : ''}"
            disabled={currentIndex === maxIndex - 1}
        >
            <img src="/images/arrow_right.png" alt="right slider arrow" width="12">
        </button>
    {/if}
</div>