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
      SponsorSection,
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

<div class="py-12 mt-6 mb-4">
  
  <div class="pb-6 mb-6">
    <SponsorSection 
    title="Institutional Supporters"
    maxColumns={5}
    maxRows={1}
    logos={[
        { imgSrc: "/images/kfw_deg.svg", altText: "kfw deg" },
        { imgSrc: "/images/triple_jump.svg", altText: "triple jump" },
        { imgSrc: "/images/ministry_education_netherland.svg", altText: "ministry education netherland" },
        { imgSrc: "/images/aavishkar_capital_group.svg", altText: "aavishkar capital group" },
        { imgSrc: "/images/aavishkaar_group.svg", altText: "aavishkaar group" }
    ]}
    linkText="See More >"
    seeMoreLink="#"
    />
  </div>

  <div class="pb-6 mb-6">
    <SponsorSection 
      title="Strategic Patners"
      maxColumns={4}
      maxRows={1}
      logos={[
          { imgSrc: "/images/goers.svg", altText: "goers" },
          { imgSrc: "/images/cision.svg", altText: "cision pr newswire" },
          { imgSrc: "/images/assegaf_hamzah_partners.svg", altText: "assegaf hamzah & partners" },
          { imgSrc: "/images/bina_nusantara.svg", altText: "aavishkar capital group" }
      ]}
      linkText="See More >"
      seeMoreLink="#"
    />
  </div>

   <div>
      <SponsorSection 
      title="Track Record & Recent Investments"
      subtitle = "Innovation Pioneers"
      paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum."
      maxColumns={7}
      maxRows={2}
      logos={[
          { imgSrc: "/images/nexian.svg", altText: "nexian" },
          { imgSrc: "/images/carro.svg", altText: "carro" },
          { imgSrc: "/images/kudo.svg", altText: "kudo" },
          { imgSrc: "/images/bukalapak.svg", altText: "bukalapak" },
          { imgSrc: "/images/moka.svg", altText: "moka" },
          { imgSrc: "/images/indotrading.svg", altText: "indotrading" },
          { imgSrc: "/images/vidio.svg", altText: "vidio" },
          { imgSrc: "/images/doogether.svg", altText: "doogether" },
          { imgSrc: "/images/sepulsa.svg", altText: "sepulsa" },
          { imgSrc: "/images/karir_com.svg", altText: "karir.com" },
          { imgSrc: "/images/bridestory.svg", altText: "bride story" },
          { imgSrc: "/images/goers.svg", altText: "goers" },
          { imgSrc: "/images/tada.svg", altText: "tada" },
          { imgSrc: "/images/fazz.svg", altText: "fazz" },
      ]}
      linkText="See More >"
      seeMoreLink="#"
  />

    <SponsorSection 
        subtitle = "Innovation Leaders"
        paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Sed scelerisque efficitur bibendum."
        maxColumns={6}
        maxRows={2}
        logos={[
            { imgSrc: "/images/goers.svg", altText: "goers" },
            { imgSrc: "/images/yoona.svg", altText: "yoona" },
            { imgSrc: "/images/binar.svg", altText: "binar" },
            { imgSrc: "/images/sell_in_all.svg", altText: "sell in all" },
            { imgSrc: "/images/talentlytica.svg", altText: "talentlytica" },
            { imgSrc: "/images/transtrack.svg", altText: "trans track" },
            { imgSrc: "/images/imajin.svg", altText: "imajin" },
            { imgSrc: "/images/my_robin.svg", altText: "my robin" },
            { imgSrc: "/images/meatless_kingdom.svg", altText: "meatless kingdom" },
            { imgSrc: "/images/surpluss.svg", altText: "surpluss" },
            { imgSrc: "/images/kasual.svg", altText: "kasual" },
            { imgSrc: "/images/riliv.svg", altText: "riliv" },
        ]}
        linkText="See More >"
        seeMoreLink="#"
    />
   </div>
   
</div>




<FAQSection/>

<Footer/>