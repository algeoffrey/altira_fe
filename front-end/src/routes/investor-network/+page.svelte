<script>
    import Navbar from '../../lib/Navbar.svelte';
    import PageHeader from '../../lib/PageHeader.svelte'
  </script>
  
  <Navbar theme="black" />

  <PageHeader
  title="ALT Collective | Investor Network";
  backgroundColor="#19D4E6"
  secondaryColor="#FC4DEB"
  titleColor="#000000"
  subHeaderTextColor= "#FFFFFF"
  subHeaderLinks={[
    { name: "Network Membership", href: "/investor-network#network-membership" },
    { name: "Track Record", href: "/investor-network#track-record" },
    { name: "FAQs", href: "/investor-network#faqs" }
  ]}
/>
  
  