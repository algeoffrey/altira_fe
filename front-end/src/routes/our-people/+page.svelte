<script>
    import { 
      Navbar, 
      PageHeader,
      SampleMember,
      AdvisoryBoard,
      GovernanceBoard,
      InvestmentCouncil,
      Footer} from '/src/lib/organisms';
  </script>
  
  <Navbar theme="black" />

  <PageHeader
  title="Our People"
  backgroundColor="#19D4E6"  
  secondaryColor="#6950FE"     
  titleColor="#000000"         
  subHeaderTextColor="#FFFFFF"
  subHeaderLinks={[
    { name: "Advisory Board", href: "/our-people#advisory"},
    { name: "Governance Board", href: "/our-people#governance"},
    { name: "Investment Council", href: "/our-people#investment"}
  ]}
/>

<SampleMember/>
<AdvisoryBoard/>
<GovernanceBoard/>
<InvestmentCouncil/>

<Footer/>
