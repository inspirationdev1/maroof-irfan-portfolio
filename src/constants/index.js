const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Various Domains" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Experienced in deploying and hosting web applications on Hostinger, including ReactJS/Vite-based frontend applications. Skilled in configuring domains, DNS, SSL certificates, production builds, environment configurations, and application deployment using Hostinger's hosting and file management tools.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Tech Lead",
    date: "September 2019 - Present",
    responsibilities: [
      "Developed Customized ERP Web Apps, Hospital Mangagment Web Apps, Real Estate Web App ",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
    ],
  },
  {
    review:
      "Hands-on experience with Appwrite as a backend platform for a Mobile App Document Approval System. Worked with Appwrite Database to manage document records, approval workflows, user-related data, and application status tracking.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Software Development Manager",
    date: "August 2009 - September 2019",
    responsibilities: [
      "Led the development of ERP Web App, focusing on scalability.",
      "Led & Developed Sales & Distribution App which is used by Sales & Delivery Team of company",
      "Contributed to Implement SAP Systems and integrated SAP SD Module with Sales & Distribution Mobile App.",
    ],
  },
  {
    review:
      "Developed Node.js-based microservices architecture using Docker for containerization and RabbitMQ for asynchronous message communication. Worked with producer-consumer patterns, message queues, service decoupling, and background processing to build scalable and resilient applications.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Software Developer & Project Manager",
    date: "November 2000 - August 2009",
    responsibilities: [
      "Built cross-platform Handheld Compact devices apps using Dotnet & C# on WindowsCE platform, integrating with SQL Server DB And with API backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Maroof Irfan. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Maroof Irfan was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Maroof Irfan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Maroof Irfan's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Maroof Irfan is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Maroof Irfan was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Maroof Irfan’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Maroof Irfan was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const projects = [
  {
    name: "Customized ERP",
    mentions: "@ERP",
    review:
      "A customized ERP solution developed using .NET Core and MVC, designed to streamline and automate core business operations through a centralized platform. The system includes modules for Sales, Purchase, Inventory, Finance, Customers, Suppliers, and Reporting, with workflows tailored to specific business requirements. Built with a scalable and secure architecture, the ERP improves operational efficiency, data visibility, and business process management while providing a flexible foundation for future enhancements.",
    // imgPath: "/images/ERP.jpg",
  },
  {
    name: "Hospital Management System",
    mentions: "@HMS",
    review:
      "A comprehensive Hospital Management System developed using .NET Core, MVC, and SQL Server, designed to streamline and manage complete hospital operations through a centralized platform. The system covers Patient Registration, Doctor Management, Doctor Appointments, OPD/IPD, Pharmacy, Billing, Laboratory, Medical Records, and Reports. The solution provides an efficient doctor appointment and scheduling system, enabling patients to book appointments and hospital staff to manage doctor availability and schedules. Built with a secure and scalable architecture to improve operational efficiency and provide centralized access to hospital information.",
    // imgPath: "/images/client3.png",
  },
  {
    name: "School Management System",
    mentions: "@SMS",
    review:
      "A modern School Management System developed using ReactJS and React Native, with a scalable backend built using Node.js and Express.js, integrated with MongoDB. The platform manages key academic and administrative operations including Students, Teachers, Attendance, Fees, Classes, Sections, Exams, and Reports. Designed with a responsive web and mobile experience, the system provides secure, centralized access to school data and streamlines day-to-day operations for School Owners, Teachers, Parents, and Students.",
    // imgPath: "/images/client2.png",
  },
  {
    name: "Online Order Management System",
    mentions: "@OOMS",
    review:
      "A scalable Online Order Management System developed using Node.js microservices, MongoDB, and RabbitMQ, designed to manage the complete order lifecycle from product selection and order placement to payment processing and order fulfillment. The system uses RabbitMQ as a message broker for reliable communication between microservices, enabling asynchronous processing of orders, payments, notifications, and inventory updates. The architecture supports scalability, fault isolation, and high-volume transaction processing, with secure integration of online payment services.",
    // imgPath: "/images/client5.png",
  },
  {
    name: "Real Estate Management System",
    mentions: "@REMS",
    review:
      "A comprehensive Real Estate Management System developed using ReactJS, React Native, Node.js, and MongoDB, designed to manage complete property rental and sales operations through a centralized platform. The system includes features for Property Listings, Property Search, Sales & Rentals, Property Details, Customer/Agent Management, Booking, Enquiries, Payments, Property Availability, and Reports. The responsive web and mobile applications provide a seamless experience for property owners, agents, buyers, and tenants, with a scalable API-driven architecture.",
    // imgPath: "/images/client4.png",
  },
  {
    name: "ZATCA E-Invoice Integration",
    mentions: "@E-INVOICE",
    review:
      "An integrated ERP and Hospital Management System designed to unify business, financial, and healthcare operations on a single platform. The solution manages modules such as Finance, Sales, Purchase, Inventory, Billing, Patients, Doctors, Appointments, Pharmacy, and Hospital Operations. The system includes integration with ZATCA e-invoicing and electronic signing for compliant electronic invoice processing, along with RUSD API integration to support external government/service workflows. Built with a scalable architecture to improve automation, data accuracy, operational efficiency, and centralized reporting.",
    // imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/inspirationdev1/",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/profile.php?id=61554983720814",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://twitter.com/inspirationdev1",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/company/inspiration-dev/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  projects,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
