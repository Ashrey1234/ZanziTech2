


// import React from "react";
// import { motion } from "framer-motion";

// const teamMembers = [
//   {
//     name: "ABDALLAH A ALI",
//     role: "ICT Manager & DBA",
//     quote: "Experienced in database management and ICT infrastructure leadership.",
//     image: "",
//   },
//   {
//     name: "AISHA H BAKARI",
//     role: "Accountant & Cybersecurity",
//     quote: "Balancing financial systems with secure digital protection.",
//     image: "",
//   },
//   {
//     name: "ALI H ALI",
//     role: "GIS & Environmental Expert",
//     quote: "Specialist in geospatial solutions and environmental management.",
//     image: "",
//   },
//   {
//     name: "ASHURA S KHAMIS",
//     role: "Geospatial Developer",
//     quote: "Building innovative mapping and spatial analysis tools.",
//     image: "",
//   },
//   {
//     name: "IQIRABIN A SAID",
//     role: "Network & Cybersecurity",
//     quote: "Ensuring reliable networks and safeguarding digital assets.",
//     image: "",
//   },
//   {
//     name: "KASSIM M ZAHRAN",
//     role: "UI/UX Designer",
//     quote: "Crafting user-friendly and engaging digital experiences.",
//     image: "",
//   },
//   {
//     name: "KHALID K MAJID",
//     role: "Mobile App Developer",
//     quote: "Transforming ideas into scalable mobile applications.",
//     image: "",
//   },
//   {
//     name: "LUQMAN H MOHAMMED",
//     role: "Software Engineer",
//     quote: "Designing and developing robust software solutions.",
//     image: "",
//   },
//   {
//     name: "MOHAMED N MOHAMED",
//     role: "Communication Officer",
//     quote: "Connecting people through clear and impactful communication.",
//     image: "",
//   },
//   {
//     name: "MUDRIK M IDDI",
//     role: "IOT Developer",
//     quote: "Creating smart solutions through connected technologies.",
//     image: "",
//   },
//   {
//     name: "MUHAMAD A MUHAMAD",
//     role: "Surveyor",
//     quote: "Delivering accurate land and spatial data services.",
//     image: "",
//   },
//   {
//     name: "MUNDHIR M BAKAR",
//     role: "Cloud & DevOps Engineer",
//     quote: "Building secure and scalable cloud-based systems.",
//     image: "",
//   },
//   {
//     name: "SHARIFA A KHAMIS",
//     role: "AI & ML Developer",
//     quote: "Designing intelligent systems powered by machine learning.",
//     image: "",
//   },
//   {
//     name: "YUSSRA S ABDALLA",
//     role: "Quality Assurance Officer",
//     quote: "Ensuring reliability and excellence in every solution.",
//     image: "",
//   },
// ];

// const Team = () => {
//   return (
//     <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Meet Our Team
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//             Our talented team combines local expertise with global best practices to deliver innovative solutions for Zanzibar and beyond.
//           </p>
//         </div>

//         {/* Motion Row */}
//         <motion.div
//           className="flex space-x-6"
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
//         >
//           {[...teamMembers, ...teamMembers].map((member, idx) => (
//             <div
//               key={idx}
//               className="min-w-[250px] bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-blue-600"
//             >
//               <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 shadow-md">
//                 <span className="text-2xl text-blue-600 font-bold">
//                   {member.name.charAt(0)}
//                 </span>
//               </div>
//               <h3 className="text-lg font-bold text-blue-700 mb-1 text-center">
//                 {member.name}
//               </h3>
//               <p className="text-gray-600 text-sm mb-2 text-center">
//                 {member.role}
//               </p>
//               <p className="text-gray-500 text-xs italic text-center">
//                 “{member.quote}”
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Team;













import React from "react";

const teamMembers = [
  { name: "ABDALLAH A ALI", role: "ICT Manager & DBA", quote: "Experienced in database management and ICT infrastructure leadership." },
  { name: "AISHA H BAKARI", role: "Accountant & Cybersecurity", quote: "Balancing financial systems with secure digital protection." },
  { name: "ALI H ALI", role: "GIS & Environmental Expert", quote: "Specialist in geospatial solutions and environmental management." },
  { name: "ASHURA S KHAMIS", role: "Geospatial Developer", quote: "Building innovative mapping and spatial analysis tools." },
  { name: "IQIRABIN A SAID", role: "Network & Cybersecurity", quote: "Ensuring reliable networks and safeguarding digital assets." },
  { name: "KASSIM M ZAHRAN", role: "UI/UX Designer", quote: "Crafting user-friendly and engaging digital experiences." },
  { name: "KHALID K MAJID", role: "Mobile App Developer", quote: "Transforming ideas into scalable mobile applications." },
  { name: "LUQMAN H MOHAMMED", role: "Software Engineer", quote: "Designing and developing robust software solutions." },
  { name: "MOHAMED N MOHAMED", role: "Communication Officer", quote: "Connecting people through clear and impactful communication." },
  { name: "MUDRIK M IDDI", role: "IOT Developer", quote: "Creating smart solutions through connected technologies." },
  { name: "MUHAMAD A MUHAMAD", role: "Surveyor", quote: "Delivering accurate land and spatial data services." },
  { name: "MUNDHIR M BAKAR", role: "Cloud & DevOps Engineer", quote: "Building secure and scalable cloud-based systems." },
  { name: "SHARIFA A KHAMIS", role: "AI & ML Developer", quote: "Designing intelligent systems powered by machine learning." },
  { name: "YUSSRA S ABDALLA", role: "Quality Assurance Officer", quote: "Ensuring reliability and excellence in every solution." },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our talented team combines local expertise with global best practices to deliver innovative solutions for Zanzibar and beyond.
          </p>
        </div>

        {/* Scrolling row */}
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-6 animate-scroll">
            {[...teamMembers, ...teamMembers].map((member, idx) => (
              <div
                key={idx}
                className="min-w-[250px] bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border-t-4 border-blue-600"
              >
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 shadow-md">
                  <span className="text-2xl text-blue-600 font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-700 mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2 text-center">{member.role}</p>
                <p className="text-gray-500 text-xs italic text-center">“{member.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
