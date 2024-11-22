<script>

import { 
      Navbar, 
      PageHeader,
      ConnectFundraiseSection,
      FundraiseFAQSection,
      FounderCourseSection,
      InvestorCourseSection,
      EventPitchSection,
      AllSponsorSection,
      Footer,
       } from '/src/lib/organisms';
  </script>
  
  <Navbar theme="black" hamburgerColor = "white" />

  <PageHeader
  title="Foundrx"
  subtitle="Hub for Founders and Builders"
  subtitleMarginLeft="ml-auto"  
  subtitleMarginRight="mr-auto"
  backgroundColor="#6025A4"
  secondaryColor="#19D4E6"
  titleColor="#FFFFFF"
  subHeaderTextColor="#000000"
  subHeaderLinks={[
    { name: "Connect & Fundraise", href: "/founder-main#connect-fundraise" },
    { name: "FAQs", href: "/founder-main#FAQs" },
    { name: "Advisory", href: "/founder-main#advisory" },
    { name: "Masterclasses", href: "/founder-main#masterclasses" },
    { name: "Events & Pitches", href: "/founder-main#events-pitches" },
    { name: "Fundraise", href: "/founder-main#fundraise" }
  ]}
/>

<ConnectFundraiseSection/>
<FundraiseFAQSection/>
<FounderCourseSection/>
<InvestorCourseSection/>
<EventPitchSection/>

 <section>
      <div>
        <AllSponsorSection showInstitutionalSupporter = {false} showStrategicPartners = {false}/>
    </div>
 </section>

 <Footer/>

