<script>
    import { Navbar, PageHeader, CourseDescSection, OtherCourseSection, Footer } from '/src/lib/organisms';
  
    export let coursePage = true;
    export let title = "Investor Courses";
    export let backgroundColor = "#19D4E6";
    export let secondaryColor = "#FFC70F";
    export let titleColor = "#363338";
    export let subHeaderTextColor = "#363338";
    export let subHeaderLinks = [];
    export let courseSections = [];
    export let otherCourses = [];
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
  
  <CourseDescSection courseSections={courseSections} />
  
  <OtherCourseSection sections={otherCourses} />
  
  <Footer />
  