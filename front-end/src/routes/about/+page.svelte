<script>
    import { Navbar, PageHeader, MissionAndStory, TeamSection } from '$lib/organisms';
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