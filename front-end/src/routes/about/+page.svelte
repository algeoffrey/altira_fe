<script>
    import { Navbar, PageHeader, MissionAndStory, TeamSection, SponsorSection, LearnJoin, Footer, AllSponsorSection } from '/src/lib/organisms';
  </script>
  
  <Navbar theme="black" />

  <PageHeader
  title="About"
  backgroundColor="#00CFE8"
  secondaryColor="#6166DC"
  titleColor="#363338"
  subHeaderTextColor= "#FFFFFF"
  subHeaderLinks={[
    { name: "Mission & Story", href: "/about#mission" },
    { name: "People", href: "/about#people" },
    { name: "Partners & Supporters", href: "/about#partners" },
    { name: "Track Record", href: "/about#partners" }
  ]}
/>


<MissionAndStory />
<TeamSection />

<div id="partners">
    <AllSponsorSection/>
</div>


<LearnJoin />

<Footer />