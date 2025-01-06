// "use client";
// import React, { useState } from "react";
// import { AiOutlineBook, AiOutlineCodepen, AiOutlineShop, AiOutlineUsergroupAdd, AiOutlineCompass, AiOutlineKey } from "react-icons/ai";
// import { FaShieldAlt, FaBriefcase } from "react-icons/fa";
// import { AiFillCaretRight } from "react-icons/ai";

// const countriesData = {
//   "Migrate to Germany": {
//     description: "Germany is a key player in Europe and provides many opportunities for workers and students. It's known for its strong economy and excellent universities.",
//     image: "https://example.com/germany-image.jpg", // Add the image URL here
//     visaTypes: [
//       "Germany Opportunity Card",
//       "Germany Work Visa",
//       "Germany Student Visa",
//       "Germany Tourist Visa",
//       "Germany Dependent Visa",
//       "Germany Self Employment Visa",
//       "Germany Freelance Visa"
//     ]
//   },
//   // ... (Add other countries similarly)
// };

// const Migrate = () => {
//   const [selectedCountry, setSelectedCountry] = useState(null); // No country selected initially
//   const [selectedVisa, setSelectedVisa] = useState(null); // To store selected visa type
//   const [showVisaTypes, setShowVisaTypes] = useState(false); // State to toggle between country list and visa types
//   const [viewingVisaDetail, setViewingVisaDetail] = useState(false); // State for viewing details of a specific visa
//   const [showAssessmentForm, setShowAssessmentForm] = useState(false);
//   const [assessmentCountry, setAssessmentCountry] = useState("");
//   const [ageSelected, setAgeSelected] = useState(false);

//   const countries = [
//     "Germany", "Canada", "United States", "Australia", "United Kingdom", 
//     "New Zealand", "South Africa", "Hong Kong", "Denmark", "UAE"
//   ];

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country);
//     setSelectedVisa(null); // Reset selected visa when country is selected
//     setShowVisaTypes(true); // Show visa types after country selection
//     setViewingVisaDetail(false); // Reset the visa detail view
//   };

//   const handleVisaSelect = (visa) => {
//     setSelectedVisa(visa);
//   };

//   const handleBackToCountries = () => {
//     setShowVisaTypes(false); // Go back to the countries list
//     setViewingVisaDetail(false); // Reset visa detail view
//   };

//   const handleBackToVisaTypes = () => {
//     setViewingVisaDetail(false); // Go back to the visa types list
//   };

//   const handleStartAssessment = () => {
//     setShowAssessmentForm(true);
//   };

//   const handleAssessmentCountrySelect = (country) => {
//     setAssessmentCountry(country);
//     setAgeSelected(false);
//   };

//   const handleAgeSelect = () => {
//     setAgeSelected(true);
//   };

//   const getIconForVisaType = (visaType) => {
//     return (
//       <div className="bg-gray-100 p-2 rounded-full">
//         {visaType.includes("Student") && <AiOutlineBook className="h-6 w-6 text-orange-500" />}
//         {visaType.includes("Work") && <AiOutlineCodepen className="h-6 w-6 text-orange-500" />}
//         {visaType.includes("Business") && <AiOutlineShop className="h-6 w-6 text-orange-500" />}
//         {visaType.includes("Tourist") && <AiOutlineCompass className="h-6 w-6 text-orange-500" />}
//         {visaType.includes("Family") && <AiOutlineUsergroupAdd className="h-6 w-6 text-orange-500" />}
//         {visaType.includes("Golden") && <FaShieldAlt className="h-6 w-6 text-orange-500" />}
//         {visaType.includes("Permanent Resident") && <AiOutlineKey className="h-6 w-6 text-orange-500" />}
//         {!visaType.includes("Student") && !visaType.includes("Work") && !visaType.includes("Business") && !visaType.includes("Tourist") && !visaType.includes("Family") && !visaType.includes("Golden") && !visaType.includes("Permanent Resident") && <FaBriefcase className="h-6 w-6 text-orange-500" />}
//       </div>
//     );
//   };

//   return (
//     <section className="py-10 bg-gradient-to-bl from-white to-orange-50">
//       <div className="max-w-screen-xl mx-auto flex gap-8">
//         {/* Left Sidebar (Country or Visa List) */}
//         <div className="lg:w-[27%] w-full sticky top-0 h-full">
//           <h2 className="text-2xl text-orange-500 font-bold mb-6 uppercase text-center tracking-wide">
//             {viewingVisaDetail ? "Visa Details" : selectedVisa ? "Visa Types" : "Countries to Migrate To"}
//           </h2>
//           <ul className="space-y-3 text-gray-700">
//             {/* Show countries list if not in visa types view */}
//             {!showVisaTypes && !viewingVisaDetail &&
//               Object.keys(countriesData).map((country, index) => (
//                 <li
//                   key={index}
//                   onClick={() => handleCountrySelect(country)}
//                   className={`cursor-pointer hover:text-white hover:bg-custom-blue transition duration-300 px-6 py-2 rounded-lg shadow-md transform hover:scale-105 flex justify-between items-center ${country === selectedCountry ? "bg-custom-blue text-white" : ""}`}
//                 >
//                   <span>{country}</span>
//                   <AiFillCaretRight className="h-4 w-4 text-gray-900" />
//                 </li>
//               ))}
//             {/* Show visa types if in visa types view */}
//             {showVisaTypes &&
//               countriesData[selectedCountry]?.visaTypes.map((visa, index) => (
//                 <li
//                   key={index}
//                   onClick={() => handleVisaSelect(visa)}
//                   className={`cursor-pointer hover:text-white hover:bg-custom-blue transition duration-300 px-4 py-2 rounded-lg shadow-md transform hover:scale-105 flex justify-between items-center ${visa === selectedVisa ? "bg-custom-blue text-white" : ""}`}
//                 >
//                   <span>{visa}</span>
//                   {getIconForVisaType(visa)}
//                 </li>
//               ))}
//           </ul>
//           {/* Back button to go back to countries list */}
//           {showVisaTypes && !viewingVisaDetail && (
//             <button
//               onClick={handleBackToCountries}
//               className="mt-6 px-4 py-2 bg-gray-950 text-white rounded-lg shadow-md hover:bg-teal-950 transition duration-300 w-full"
//             >
//               Back to Countries
//             </button>
//           )}
//           {/* Back button to go back to visa types */}
//           {viewingVisaDetail && (
//             <button
//               onClick={handleBackToVisaTypes}
//               className="mt-6 px-4 py-2 bg-gray-950 text-white rounded-lg shadow-md hover:bg-teal-950 transition duration-300 w-full"
//             >
//               Back to Visa Types
//             </button>
//           )}
//         </div>

//         {/* Right Content (Country description and visa details) */}
//         <div className="lg:w-[70%] w-full">
//           {/* Display default content if no country selected */}
//           {!selectedCountry ? (
//             <div>
//               <h3 className="text-3xl font-semibold text-black mb-4 text-center uppercase mt-20">Welcome to Our Immigration Services</h3>
//               <p className="text-lg text-gray-600 mb-8 text-center">Explore our wide range of migration options and visa types to help you settle in your dream destination.</p>
//               <div className="text-center mt-8">
//                 <button
//                   className="py-3 px-6 text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg transition hover:from-orange-600 hover:to-pink-600"
//                   onClick={handleStartAssessment}
//                 >
//                   Start Assessment
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <>
//               {!viewingVisaDetail ? (
//                 <>
//                   {!selectedVisa ? (
//                     <>
//                       <h3 className="text-3xl font-semibold text-black mb-4 mt-40 text-center">{selectedCountry}</h3>
//                       <p className="text-lg text-gray-600 mb-8 text-center">{countriesData[selectedCountry]?.description}</p>
//                       {/* Display country image below the description */}
//                       <div className="text-center">
//                         <img
//                           src={countriesData[selectedCountry]?.image}
//                           alt={selectedCountry}
//                           className="mx-auto mt-4 max-w-full h-auto rounded-lg shadow-md"
//                         />
//                       </div>
//                     </>
//                   ) : (
//                     <>
//                       <h3 className="text-3xl font-semibold text-black mb-4 text-center">{selectedVisa}</h3>
//                       <p className="text-lg text-gray-600 mb-8 text-center">
//                         Learn more about {selectedVisa} for {selectedCountry}.
//                       </p>
//                     </>
//                   )}
//                 </>
//               ) : (
//                 <>
//                   <h3 className="text-3xl font-semibold text-black mb-4 text-center">Details for {selectedVisa}</h3>
//                   <p className="text-lg text-gray-600 mb-8 text-center">
//                     Here you can find all the information about {selectedVisa} for {selectedCountry}.
//                   </p>
//                 </>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Migrate;
