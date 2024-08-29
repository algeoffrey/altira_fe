<script>
    import { Navbar, PageHeader, InvestorWealthPlanningSection, BecomeInvestorSection, EnterpriseFinanceSection, Footer} from '/src/lib/organisms';
  </script>
  
  <Navbar theme="black" />

  <PageHeader
  customTitle="Investors | <strong>Learn HUB</strong>"
  titleWeight= "font-base"
  backgroundColor="#19D4E6"  
  secondaryColor="#FFC70F"     
  titleColor="#000000"         
  subHeaderTextColor="#000000"
  subHeaderLinks={[
    { name: "Investing & Wealth Planning", href: "/investor-learn-hub#investing-wealth-planning" },
    { name: "Enterprise Innovation", href: "/investor-learn-hub-enterprise-innovation" },
    { name: "Alternative Finance", href: "/investor-learn-hub-alternative-finance" }
  ]}
  extraText="<strong>For Founder Learn Hub</strong> please <a href='/founder-main' class='hover:underline'>click here</a>"
/>

<InvestorWealthPlanningSection/>
<BecomeInvestorSection/>
<EnterpriseFinanceSection/>

<Footer/>