<script>
    import { Navbar, PageHeader, FounderDescSection, OtherFounderCourse, Footer } from '/src/lib/organisms';
  
    export let coursePage = true;
    export let title = "Foundrx Course";
    export let backgroundColor = "#24BA74";
    export let secondaryColor = "#19D4E6";
    export let titleColor = "#FFFFFF";
    export let subHeaderTextColor = "#363338";
    export let subHeaderLinks = [];
    export let courseSections = [];
    export let otherCourses = [];
    export let additionalContent = [];
  </script>
  
  <Navbar theme="black" />
  
  <PageHeader
    coursePage={coursePage}
    title={title}
    backgroundColor={backgroundColor}
    secondaryColor={secondaryColor}
    titleColor={titleColor}
    subHeaderTextColor={subHeaderTextColor}
    subHeaderLinks={subHeaderLinks}
  />
  
  <FounderDescSection courseSections={courseSections} />
  
  <OtherFounderCourse sections={otherCourses} additionalContent = {additionalContent}/>
  
  <Footer />

  
  