<script>
    import { Navbar, PageHeader, BeneficiarySection, Footer} from '/src/lib/organisms';
    import {AssetOwnerSection, CorporateInnovatorSection, FamilyEnterprisesSection, PartnersBuildersSection} from '../../lib/molecules';
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
  
<BeneficiarySection/>

<AssetOwnerSection/>
<CorporateInnovatorSection/>
<FamilyEnterprisesSection/>
<PartnersBuildersSection/>

<Footer />
  