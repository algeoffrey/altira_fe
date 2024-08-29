<script>
    import { Navbar, PageHeader, FAQSection, Footer } from '/src/lib/organisms';
    import {InvestorPlatformSection, EnterpriseInnovationSection, WealthPlanningSection} from '../../lib/molecules';
    
  </script>
  
  <Navbar theme="black" />

  <PageHeader
  title="Asset Owners & Investors"
  backgroundColor="#2A3189" 
  secondaryColor="#19D4E6"  
  titleColor="#FFFFFF"
  subHeaderTextColor= "#000000"       
  subHeaderLinks={[
    { name: "Investor Platform", href: "/asset-owners-&-investors#platform" },
    { name: "Enterprise Innovation", href: "/asset-owners-&-investors#innovation" },
    { name: "Wealth Planning & Solutions", href: "/asset-owners-&-investors#wealth" }
  ]}
/>

<InvestorPlatformSection/>
<EnterpriseInnovationSection/>
<WealthPlanningSection/>

<FAQSection/>

<Footer/>