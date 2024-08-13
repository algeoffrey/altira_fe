<script>
    import { Navbar } from '$lib/organisms';
    import PageHeader from '../../lib/PageHeader.svelte'
  </script>
  
  <Navbar theme="black" />

  <PageHeader
  title="Solutions"
  backgroundColor="#6025A4"
  secondaryColor="#9C64DD"
  titleColor="#FFFFFF"
  subHeaderTextColor= "#FFFFFF"
  subHeaderLinks={[
    { name: "Asset Owners", href: "/solutions#asset-owners" },
    { name: "Corporates", href: "/solutions#corporates" },
    { name: "Family Enterprises", href: "/solutions#family-enterprises" },
    { name: "Partners & Builders", href: "/solutions#partners-builders" }
  ]}
/>
  
  