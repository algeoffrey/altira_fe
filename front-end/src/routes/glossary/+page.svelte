<script>
    import { 
      Navbar, 
      PageHeader, 
      GlossaryIndex,
      Footer} from '/src/lib/organisms';
  </script>
  
  <Navbar theme="black" />

  <PageHeader
  title="Glossary"
  backgroundColor="#19D4E6"  
  secondaryColor="#6950FE"     
  titleColor="#000000"         
  subHeaderTextColor="#FFFFFF"
  subHeaderLinks={[
    { name: "A", href: "/glossary#indexA"},
    { name: "B", href: "/glossary#indexB"},
    { name: "C", href: "/glossary#indexC"},
    { name: "D", href: "/glossary#indexD"},
    { name: "E", href: "/glossary#indexE"},
    { name: "F", href: "/glossary#indexF"},
    { name: "G", href: "/glossary#indexG"},
    { name: "H", href: "/glossary#indexH"},
    { name: "I", href: "/glossary#indexI"},
    { name: "K", href: "/glossary#indexK"},
    { name: "L", href: "/glossary#indexL"},
    { name: "M", href: "/glossary#indexM"},
    { name: "N", href: "/glossary#indexN"},
    { name: "O", href: "/glossary#indexO"},
    { name: "P", href: "/glossary#indexP"},
    { name: "R", href: "/glossary#indexR"},
    { name: "S", href: "/glossary#indexS"},
    { name: "T", href: "/glossary#indexT"},
    { name: "U", href: "/glossary#indexU"},
    { name: "V", href: "/glossary#indexV"},
    { name: "W", href: "/glossary#indexW"},
  ]}
/>

<GlossaryIndex/>
<Footer/>