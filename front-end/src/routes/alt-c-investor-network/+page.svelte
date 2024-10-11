<script>
    import { 
      Navbar, 
      PageHeader, 
      FeatureStatisticSection, 
      EducationInvestorSection, 
      EarlyStageInvestment, 
      MembershipSection, 
      PricingTableSection,
      NewsLetterSection,
      AllSponsorSection,
      FAQSection,
      Footer} from '/src/lib/organisms';
  </script>
  
  <Navbar theme="black" />

  <PageHeader
  customTitle="ALT Collective | <strong>Investor Network</strong>"
  titleWeight= "font-base"
  backgroundColor="#19D4E6"  
  secondaryColor="#FC4DEB"     
  titleColor="#000000"         
  subHeaderTextColor="#FFFFFF"
  subHeaderLinks={[
    { name: "Network Membership", href: "/alt-c-investor-network#network-membership" },
    { name: "Track Record", href: "/alt-c-investor-network#track-record" },
    { name: "FAQs", href: "/alt-c-investor-network#FAQs" }
  ]}
/>

<FeatureStatisticSection/>
<EducationInvestorSection/>
<EarlyStageInvestment/>
<MembershipSection/>
<PricingTableSection/>
<NewsLetterSection/>

<div class="py-2 mt-3" id = "track-record">
  <AllSponsorSection showNetworkEcosystems = {false}/>
</div>


<FAQSection/>

<Footer/>