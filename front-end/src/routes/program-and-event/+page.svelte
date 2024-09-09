<script>
    import { Navbar, PageHeader, ShowcaseSection, NetworkCapacity, PastProgram, Footer} from '/src/lib/organisms';
  </script>
  
  <Navbar theme="black" />

  <PageHeader
  title="Program and Events"
  backgroundColor="#6025A4"
  secondaryColor="#19D4E6"
  titleColor="#FFFFFF"
  subHeaderTextColor= "#363338"
  subHeaderLinks={[
    { name: "Showcases & Pitches", href: "/program-and-event#showcases" },
    { name: "Networking & Capacity Building", href: "/program-and-event#networking" },
    { name: "Past Program & Events", href: "/program-and-event#past-programs" }
  ]}
/>

<ShowcaseSection/>
<NetworkCapacity/>
<PastProgram/>
<Footer/>
