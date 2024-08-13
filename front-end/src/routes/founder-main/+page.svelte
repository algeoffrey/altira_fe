<script>
    import { Navbar } from '$lib/organisms';
    import PageHeader from '../../lib/PageHeader.svelte';
  </script>
  
  <Navbar theme="black" />

  <PageHeader
  title="Foundrx"
  subtitle="Hub for Founders and Builders"
  subtitleMarginLeft="ml-auto"  
  subtitleMarginRight="mr-3"
  backgroundColor="#6025A4"
  secondaryColor="#19D4E6"
  titleColor="#FFFFFF"
  subHeaderTextColor="#000000"
  subHeaderLinks={[
    { name: "FAQs", href: "/founder-main#faqs" },
    { name: "Advisory", href: "/founder-main#advisory" },
    { name: "Masterclasses", href: "/founder-main#masterclasses" },
    { name: "Events & Pitches", href: "/founder-main#events-pitches" },
    { name: "Fundraise", href: "/founder-main#fundraise" }
  ]}
/>