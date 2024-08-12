<script>
    import Navbar from '../../lib/Navbar.svelte';
    import PageHeader from '../../lib/PageHeader.svelte';
    
  </script>
  
  <Navbar theme="black" />

  <PageHeader
  title="Asset Owners & Investors"
  backgroundColor="#2A3189" 
  secondaryColor="#19D4E6"  
  titleColor="#FFFFFF"
  subHeaderTextColor= "#000000"       
  subHeaderLinks={[
    { name: "Investor Platform", href: "/asset-owners#platform" },
    { name: "Enterprise Innovation", href: "/asset-owners#innovation" },
    { name: "Wealth Planning & Solutions", href: "/asset-owners#wealth" }
  ]}
/>