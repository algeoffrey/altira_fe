<script>
  import CoursePageTemplate from '/src/lib/templates/CoursePageTemplate.svelte';

  let subHeaderLinks = [
    { name: "Home", href: "#" },
    { name: "Learn-Hub", href: "#" },
    { name: "Venture Innovation Leadership Program", href: "#" }
  ];

  let courseSections = [
    {
      courseType: "Full Module Course",
      size: "text-xl",
      align: "text-left",
      weight: "font-thin",
    },
    {
      type: "text",
      title: "Venture Innovation Leadership Program",
      titleSize: "text-3xl",
      titleWeight: "font-semibold",
      content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at. Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis. Maecenas sagittis dui non risus commodo, fringilla interdum tortor gravida. Integer porttitor ante sit amet sem efficitur tincidunt. Etiam laoreet consequat ligula, eu tempus eros convallis porta. Etiam vel auctor metus. Praesent nec scelerisque nisi, nec rhoncus justo. Vivamus mollis lobortis suscipit. Aenean consectetur, felis in gravida accumsan, nunc ex tempus lacus, in ultrices dolor tellus ut augue. Mauris non purus et sapien sollicitudin rutrum nec facilisis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum posuere nisi, eu ornare nulla maximus ac.`
    },
    {
      type: "text",
      title: "Who Should Attend",
      titleSize: "text-2xl",
      titleWeight: "font-semibold",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, ut vulputate augue consectetur at.</p>
        <p>Nam suscipit molestie augue, ac finibus lacus mattis in. Curabitur id convallis sem, et pulvinar turpis.</p>`
    },
    {
      type: "list",
      title: "Learning Benefits",
      titleSize: "text-2xl",
      titleWeight: "font-semibold",
      content: "At the completion of this masterclass you will be able to:",
      items: [
        "Etiam laoreet consequat ligula, eu tempus eros convallis porta. Etiam vel auctor metus.",
        "Praesent nec scelerisque nisi, nec rhoncus justo. Vivamus mollis lobortis suscipit.",
        "Aenean consectetur, felis in gravida accumsan, nunc ex tempus lacus, in ultrices dolor tellus ut.",
        "Mauris non purus et sapien sollicitudin rutrum nec facilisis nibh."
      ]
    },
    {
      type: "list",
      title: "Learning Scope & Objectives",
      titleSize: "text-2xl",
      titleWeight: "font-semibold",
      content: "The masterclass will help you to:",
      items: [
        "Etiam laoreet consequat ligula, eu tempus eros convallis porta. Etiam vel auctor metus.",
        "Praesent nec scelerisque nisi, nec rhoncus justo. Vivamus mollis lobortis suscipit.",
        "Aenean consectetur, felis in gravida accumsan, nunc ex tempus lacus, in ultrices dolor tellus ut.",
        "Mauris non purus et sapien sollicitudin rutrum nec facilisis nibh."
      ]
    },
    {
      type: "image",
      src: "/images/investor_masterclass.png",
      alt: "Join Masterclass - Business + Startup Scaling and Funding"
    },
    {
      type: "learning-method",
      title: "Learning Method & Delivery",
      content: [
        "Duration is about 1.5 hours (90 minutes)",
        "Further info will be sent after registration",
        "Session check-in will open at 15 min before class begins",
        "Professional Development Live teaching session (combination of materials, cases and interactive discussion)",
        "Mixed English & Bahasa Indonesia"
      ]
    },
    {
      type: "join-course",
      buttonText: "JOIN COURSE",
      duration: 4,
      date: "June 29, 2024",
      price: "Rp. 1,000,000"
    }];

    let otherCourses = [
    {
      courses: [
        {
          title: "Early Stage & Startup Investing",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
          courseType: "Masterclasses (Certification Available)",
          backgroundColor: "#CFC9EF",
          buttonLink: "/investor-course-early-stage-investing-in-emerging-companies",
          buttonText: "Apply Here",
        },
        {
          title: "Wealth Planning Fundamentals",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
          courseType: "Masterclasses (Certification Available)",
          backgroundColor: "#CFC9EF",
          buttonLink: "investor-course-wealth-planning-fundamentals",
          buttonText: "Apply Here",
        }
      ]
    },
    {
      courses: [
        {
          title: "Family Enterprise Innovation",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
          courseType: "Masterclasses (Certification Available)",
          backgroundColor: "#D0E1ED",
          buttonLink: "/investor-course-family-enterprise-innovation",
          buttonText: "Apply Here",
        },
        {
          title: "Innovative Financing & Structuring",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat eros velit. Vestibulum vestibulum imperdiet nisi, vulputate.",
          courseType: "Masterclasses (Certification Available)",
          backgroundColor: "#CFC9EF",
          buttonLink: "/investor-course-innovative-financing-&-structuring",
          buttonText: "Apply Here",
        }
      ]
    }
  ];
</script>

<CoursePageTemplate
  title="Investor Course"
  backgroundColor="#19D4E6"
  secondaryColor="#FFC70F"
  titleColor="#363338"
  subHeaderTextColor="#363338"
  subHeaderLinks={subHeaderLinks}
  courseSections={courseSections}
  otherCourses={otherCourses}
/>
