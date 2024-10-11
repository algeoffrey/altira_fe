<script>
    import { 
      Navbar, 
      PageHeader, 
      AllSponsorSection,
      Footer} from '/src/lib/organisms';
  </script>
  
  <Navbar theme="black" />

  <PageHeader
  title="Ecosystem Profile"
  backgroundColor="#19D4E6"  
  secondaryColor="#6950FE"     
  titleColor="#000000"         
  subHeaderTextColor="#FFFFFF"
  subHeaderLinks={[
    { name: "Institutional Supporters", href: "/ecosystem-profile#Institutional-Supporters"},
    { name: "Strategic Partners", href: "/ecosystem-profile#Strategic-Partners"},
    { name: "Network Ecosystem", href: "/ecosystem-profile#Network-Ecosystem"},
    { name: "Track Record ", href: "/ecosystem-profile#Track-Record"},
  ]}
/>


<div class="py-2 mt-3">
  
  <div class="pb-2 mb-2" id="Institutional-Supporters">
      <AllSponsorSection showAll = {true}/>
   </div>
   
</div>


<Footer/>