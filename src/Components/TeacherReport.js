// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';
// // // import StudentSelection from './StudentSelection';

// // // const TeacherReport = () => {
// // //   const [modules, setModules] = useState([]);
// // //   const [submodules, setSubmodules] = useState([]);
// // //   const [selectedModule, setSelectedModule] = useState('');
// // //   const [selectedStudents, setSelectedStudents] = useState([]);

// // //   // Fetch modules
// // //   useEffect(() => {
// // //     const fetchModules = async () => {
// // //       try {
// // //         const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/topics`);
// // //         setModules(response.data);
// // //       } catch (error) {
// // //         console.error('Error fetching modules:', error);
// // //       }
// // //     };
// // //     fetchModules();
// // //   }, []);

// // //   // Fetch submodules when module is selected
// // //   useEffect(() => {
// // //     const fetchSubmodules = async () => {
// // //       if (!selectedModule) {
// // //         setSubmodules([]);
// // //         return;
// // //       }
// // //       try {
// // //         const response = await axios.get(
// // //           `${process.env.REACT_APP_API_URL}/api/courses/${selectedModule}`
// // //         );
// // //         setSubmodules(response.data);
// // //       } catch (error) {
// // //         console.error('Error fetching submodules:', error);
// // //       }
// // //     };
// // //     fetchSubmodules();
// // //   }, [selectedModule]);

// // //   const handleSearch = () => {
// // //     // Implement search functionality
// // //     console.log('Searching...', {
// // //       selectedStudents,
// // //       selectedModule,
// // //       submodules
// // //     });
// // //   };

// // //   const handleReset = () => {
// // //     // Reset all fields
// // //     setSelectedModule('');
// // //     setSubmodules([]);
// // //     setSelectedStudents([]);
// // //   };

// // //   const handleStudentSelect = (studentId) => {
// // //     setSelectedStudents((prev) => {
// // //       if (prev.includes(studentId)) {
// // //         return prev.filter((id) => id !== studentId);
// // //       } else {
// // //         return [...prev, studentId];
// // //       }
// // //     });
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
// // //       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
// // //         <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
// // //           <h2 className="text-3xl font-bold text-white text-center">
// // //                 Search Report
// // //           </h2>
// // //         </div>

// // //         <div className="p-6">
// // //           <div className="space-y-6">
// // //             {/* Student Selection Component */}
// // //             <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
// // //               <h3 className="text-lg font-medium text-blue-800 mb-4">Select Students</h3>
// // //               <StudentSelection 
// // //                 selectedStudents={selectedStudents}
// // //                 onStudentSelect={handleStudentSelect}
// // //               />
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               {/* Module Selection */}
// // //               <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                   Module
// // //                 </label>
// // //                 <select
// // //                   value={selectedModule}
// // //                   onChange={(e) => setSelectedModule(e.target.value)}
// // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //                 >
// // //                   <option value="">Select Module</option>
// // //                   {modules.map((module) => (
// // //                     <option key={module.id} value={module.id}>
// // //                       {module.title}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>

// // //               {/* Submodule Selection */}
// // //               <div>
// // //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                   Submodule
// // //                 </label>
// // //                 <select
// // //                   className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // //                   disabled={!selectedModule}
// // //                 >
// // //                   <option value="">Select Submodule</option>
// // //                   {submodules.map((submodule) => (
// // //                     <option key={submodule.id} value={submodule.id}>
// // //                       {submodule.title}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Buttons */}
// // //           <div className="mt-6 flex justify-end space-x-4">
// // //             <button
// // //               onClick={handleReset}
// // //               className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// // //             >
// // //               Reset
// // //             </button>
// // //             <button
// // //               onClick={handleSearch}
// // //               className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// // //             >
// // //               Search
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default TeacherReport;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { FaFilePdf, FaDownload, FaSpinner, FaEye, FaEyeSlash, FaUsers, FaChevronDown, FaSearch } from 'react-icons/fa';
// // // import { useUser } from '../UserContext';

// // const TeacherReport = () => {
// //   const [selectedStudents, setSelectedStudents] = useState([]);
// //   const [reports, setReports] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [selectedPdf, setSelectedPdf] = useState(null);
// //   // const { user, username } = useUser();

// //   // Student selection state
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [selectedYear, setSelectedYear] = useState("");
// //   const [students, setStudents] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [filteredStudents, setFilteredStudents] = useState([]);

// //   // Hardcoded years data
// //   const years = [
// //     { id: "1", name: "1st Year" },
// //     { id: "2", name: "2nd Year" },
// //     { id: "3", name: "3rd Year" },
// //     { id: "4", name: "4th Year" },
// //   ];

// //   // Fetch student data from API when a year is selected
// //   useEffect(() => {
// //     if (selectedYear) {
// //       axios
// //         .get(`${process.env.REACT_APP_API_URL}/api/students?year=${selectedYear}`)
// //         .then((response) => {
// //           const fetchedStudents = response.data.students || [];
// //           // Ensure each student has a name property
// //           const studentsWithNames = fetchedStudents.map(student => ({
// //             ...student,
// //             name: student.name || `${student.first_name || ''} ${student.last_name || ''}`.trim() || 'Unknown Student'
// //           }));
// //           setStudents(studentsWithNames);
// //           setFilteredStudents(studentsWithNames);
// //         })
// //         .catch((error) => {
// //           setStudents([]);
// //           setFilteredStudents([]);
// //         });
// //     } else {
// //       setStudents([]);
// //       setFilteredStudents([]);
// //     }
// //   }, [selectedYear]);
  
// //   // Filter students based on search query
// //   useEffect(() => {
// //     if (searchQuery.trim() === "") {
// //       setFilteredStudents(students);
// //     } else {
// //       const filtered = students.filter(
// //         (student) =>
// //           student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //           student.username.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //       setFilteredStudents(filtered);
// //     }
// //   }, [searchQuery, students]);

// //   const handleSelectAll = () => {
// //     if (filteredStudents.length === 0) return;
    
// //     const allFilteredUsernames = filteredStudents.map((student) => student.username);
// //     const allSelected = allFilteredUsernames.every((username) =>
// //       selectedStudents.includes(username)
// //     );
    
// //     if (allSelected) {
// //       // Deselect all filtered students
// //       allFilteredUsernames.forEach((username) => handleStudentSelect(username));
// //     } else {
// //       // Select all filtered students
// //       allFilteredUsernames.forEach((username) => {
// //         if (!selectedStudents.includes(username)) {
// //           handleStudentSelect(username);
// //         }
// //       });
// //     }
// //   };

// //   const handleStudentSelect = (studentUsername) => {
// //     setSelectedStudents((prev) => {
// //       if (prev.includes(studentUsername)) {
// //         return prev.filter((username) => username !== studentUsername);
// //       } else {
// //         return [...prev, studentUsername];
// //       }
// //     });
// //   };

// //   const handleSearch = async () => {
// //     if (selectedStudents.length === 0) {
// //       setError('Please select at least one student');
// //       return;
// //     }

// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const apiUrl = (process.env.REACT_APP_API_URL || 'http://localhost:5001').trim();
// //       const response = await fetch(`${apiUrl}/api/get-all-report-pdfs`);
      
// //       if (!response.ok) {
// //         throw new Error('Failed to fetch PDF reports');
// //       }
      
// //       const data = await response.json();
      
// //       // Filter reports based on selected students (usernames)
// //       const filteredReports = data.filter(report => 
// //         selectedStudents.includes(report.username)
// //       );
      
// //       setReports(filteredReports);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleReset = () => {
// //     setSelectedStudents([]);
// //     setReports([]);
// //     setError(null);
// //   };

// //   const formatDate = (dateString) => {
// //     const options = { 
// //       year: 'numeric', 
// //       month: 'long', 
// //       day: 'numeric',
// //       hour: '2-digit',
// //       minute: '2-digit'
// //     };
// //     return new Date(dateString).toLocaleDateString('en-US', options);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
// //       <div className="max-w-6xl mx-auto">
// //         {/* Search Section */}
// //         <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
// //           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
// //             <h2 className="text-3xl font-bold text-white text-center">
// //               Search Reports
// //             </h2>
// //           </div>

// //           <div className="p-6">
// //             <div className="space-y-6">
// //               {/* Student Selection Component */}
// //               <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
// //                 <h3 className="text-lg font-medium text-blue-800 mb-4">Select Students</h3>
// //                 <div>
// //                   <div
// //                     className="flex items-center justify-between cursor-pointer"
// //                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
// //                   >
// //                     <div className="flex items-center">
// //                       <FaUsers className="mr-2 text-blue-600" />
// //                       <h3 className="text-xl font-semibold text-gray-800">Select Students</h3>
// //                     </div>
// //                     <FaChevronDown
// //                       className={`transform transition-transform ${
// //                         isDropdownOpen ? "rotate-180" : ""
// //                       }`}
// //                     />
// //                   </div>

// //                   {isDropdownOpen && (
// //                     <div className="mt-4 space-y-4">
// //                       {/* Year Selection */}
// //                       <div className="mb-4">
// //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// //                           Select Year
// //                         </label>
// //                         <select
// //                           value={selectedYear}
// //                           onChange={(e) => setSelectedYear(e.target.value)}
// //                           className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// //                         >
// //                           <option value="">Select a year</option>
// //                           {years.map((year) => (
// //                             <option key={year.id} value={year.id}>
// //                               {year.name}
// //                             </option>
// //                           ))}
// //                         </select>
// //                       </div>

// //                       {/* Search Bar */}
// //                       {selectedYear && (
// //                         <div className="relative">
// //                           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                           <input
// //                             type="text"
// //                             placeholder="Search students..."
// //                             value={searchQuery}
// //                             onChange={(e) => setSearchQuery(e.target.value)}
// //                             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// //                           />
// //                         </div>
// //                       )}

// //                       {/* Select All Button */}
// //                       {selectedYear && filteredStudents.length > 0 && (
// //                         <div className="flex justify-end">
// //                           <button
// //                             onClick={handleSelectAll}
// //                             className="text-sm text-blue-600 hover:text-blue-800 font-medium"
// //                           >
// //                             {filteredStudents.every((student) =>
// //                               selectedStudents.includes(student.username)
// //                             )
// //                               ? "Deselect All"
// //                               : "Select All"}
// //                           </button>
// //                         </div>
// //                       )}

// //                       {/* Students Grid */}
// //                       {selectedYear && (
// //                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                           {filteredStudents.map((student) => (
// //                             <div
// //                               key={student.id}
// //                               className={`bg-white p-4 rounded-lg border-2 transition-all duration-200 ${
// //                                 selectedStudents.includes(student.username)
// //                                   ? "border-blue-500 shadow-md"
// //                                   : "border-gray-200 hover:border-blue-300"
// //                               }`}
// //                             >
// //                               <div className="flex items-start space-x-3">
// //                                 <input
// //                                   type="checkbox"
// //                                   checked={selectedStudents.includes(student.username)}
// //                                   onChange={() => handleStudentSelect(student.username)}
// //                                   className="mt-1 h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
// //                                 />
// //                                 <div>
// //                                   <h4 className="font-medium text-gray-900">
// //                                     {student.name || `${student.first_name || ''} ${student.last_name || ''}`.trim() || 'Unknown Student'}
// //                                   </h4>
// //                                   <p className="text-sm text-gray-600 mt-1">
// //                                     @{student.username}
// //                                   </p>
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           ))}
// //                         </div>
// //                       )}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Buttons */}
// //             <div className="mt-6 flex justify-end space-x-4">
// //               <button
// //                 onClick={handleReset}
// //                 className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //               >
// //                 Reset
// //               </button>
// //               <button
// //                 onClick={handleSearch}
// //                 className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //               >
// //                 Search
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Results Section */}
// //         {loading ? (
// //           <div className="flex justify-center items-center py-12">
// //             <FaSpinner className="animate-spin text-4xl text-blue-600" />
// //           </div>
// //         ) : error ? (
// //           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
// //             <strong className="font-bold">Error: </strong>
// //             <span className="block sm:inline">{error}</span>
// //           </div>
// //         ) : reports.length > 0 ? (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {reports.map(report => {
// //               const pdfUrl = `data:application/pdf;base64,${report.pdf_data}`;
// //               return (
// //                 <div 
// //                   key={report.id} 
// //                   className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
// //                 >
// //                   <div className="p-4">
// //                     <div className="flex items-center justify-between mb-4">
// //                       <div className="flex items-center gap-3">
// //                         <div className="bg-blue-100 p-3 rounded-full">
// //                           <FaFilePdf className="text-2xl text-blue-600" />
// //                         </div>
// //                         <div>
// //                           <h3 className="text-lg font-semibold text-gray-800">
// //                             {report.username}
// //                           </h3>
// //                           <p className="text-sm text-gray-500">
// //                             {formatDate(report.reported_at)}
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>

// //                     <div className="flex gap-2">
// //                       <button
// //                         onClick={() => setSelectedPdf(selectedPdf === report.id ? null : report.id)}
// //                         className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
// //                       >
// //                         {selectedPdf === report.id ? <FaEyeSlash /> : <FaEye />}
// //                         {selectedPdf === report.id ? 'Hide' : 'View'}
// //                       </button>
// //                       <a
// //                         href={pdfUrl}
// //                         download={`report_${report.username}_${report.id}.pdf`}
// //                         className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2"
// //                       >
// //                         <FaDownload />
// //                         Download
// //                       </a>
// //                     </div>
// //                   </div>

// //                   {selectedPdf === report.id && (
// //                     <div className="border-t border-gray-200">
// //                       <iframe
// //                         src={pdfUrl}
// //                         className="w-full h-[500px]"
// //                         title={`PDF Report ${report.id}`}
// //                       ></iframe>
// //                     </div>
// //                   )}
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         ) : selectedStudents.length > 0 && (
// //           <div className="text-center py-12 bg-white rounded-xl shadow-sm">
// //             <FaFilePdf className="text-6xl text-gray-300 mx-auto mb-4" />
// //             <h2 className="text-xl font-semibold text-gray-600">No reports found</h2>
// //             <p className="text-gray-500">No reports available for the selected students</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TeacherReport;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaFilePdf, FaDownload, FaSpinner, FaEye, FaEyeSlash, FaUsers, FaChevronDown, FaSearch } from 'react-icons/fa';
// // import { useUser } from '../UserContext';

// const TeacherReport = () => {
//   const [selectedStudents, setSelectedStudents] = useState([]);
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [selectedPdf, setSelectedPdf] = useState(null);
//   // const { user, username } = useUser();

//   // Student selection state
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedYear, setSelectedYear] = useState("");
//   const [students, setStudents] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredStudents, setFilteredStudents] = useState([]);

//   // Hardcoded years data
//   const years = [
//     { id: "1", name: "1st Year" },
//     { id: "2", name: "2nd Year" },
//     { id: "3", name: "3rd Year" },
//     { id: "4", name: "4th Year" },
//   ];

//   // Fetch student data from API when a year is selected
//   useEffect(() => {
//     if (selectedYear) {
//       axios
//         .get(`${process.env.REACT_APP_API_URL}/api/students?year=${selectedYear}`)
//         .then((response) => {
//           const fetchedStudents = response.data.students || [];
//           // Ensure each student has a name property
//           const studentsWithNames = fetchedStudents.map(student => ({
//             ...student,
//             name: student.name || `${student.first_name || ''} ${student.last_name || ''}`.trim() || 'Unknown Student'
//           }));
//           setStudents(studentsWithNames);
//           setFilteredStudents(studentsWithNames);
//         })
//         .catch((error) => {
//           setStudents([]);
//           setFilteredStudents([]);
//         });
//     } else {
//       setStudents([]);
//       setFilteredStudents([]);
//     }
//   }, [selectedYear]);
  
//   // Filter students based on search query
//   useEffect(() => {
//     if (searchQuery.trim() === "") {
//       setFilteredStudents(students);
//     } else {
//       const filtered = students.filter(
//         (student) =>
//           student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           student.username.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredStudents(filtered);
//     }
//   }, [searchQuery, students]);

//   const handleSelectAll = () => {
//     if (filteredStudents.length === 0) return;
    
//     const allFilteredUsernames = filteredStudents.map((student) => student.username);
//     const allSelected = allFilteredUsernames.every((username) =>
//       selectedStudents.includes(username)
//     );
    
//     if (allSelected) {
//       // Deselect all filtered students
//       allFilteredUsernames.forEach((username) => handleStudentSelect(username));
//     } else {
//       // Select all filtered students
//       allFilteredUsernames.forEach((username) => {
//         if (!selectedStudents.includes(username)) {
//           handleStudentSelect(username);
//         }
//       });
//     }
//   };

//   const handleStudentSelect = (studentUsername) => {
//     setSelectedStudents((prev) => {
//       if (prev.includes(studentUsername)) {
//         return prev.filter((username) => username !== studentUsername);
//       } else {
//         return [...prev, studentUsername];
//       }
//     });
//   };

//   const handleSearch = async () => {
//     if (selectedStudents.length === 0) {
//       setError('Please select at least one student');
//       return;
//     }

//     setLoading(true);
//     setError(null);
//     try {
//       const apiUrl = (process.env.REACT_APP_API_URL).trim();
//       const response = await fetch(`${apiUrl}/api/get-all-report-pdfs`);
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch PDF reports');
//       }
      
//       const data = await response.json();
      
//       // Filter reports based on selected students (usernames)
//       const filteredReports = data.filter(report => 
//         selectedStudents.includes(report.username)
//       );
      
//       setReports(filteredReports);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReset = () => {
//     setSelectedStudents([]);
//     setReports([]);
//     setError(null);
//   };

//   const formatDate = (dateString) => {
//     const options = { 
//       year: 'numeric', 
//       month: 'long', 
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Search Section */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
//             <h2 className="text-3xl font-bold text-white text-center">
//               Search Reports
//             </h2>
//           </div>

//           <div className="p-6">
//             <div className="space-y-6">
//               {/* Student Selection Component */}
//               <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
//                 <h3 className="text-lg font-medium text-blue-800 mb-4">Select Students</h3>
//                 <div>
//                   <div
//                     className="flex items-center justify-between cursor-pointer"
//                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   >
//                     <div className="flex items-center">
//                       <FaUsers className="mr-2 text-blue-600" />
//                       <h3 className="text-xl font-semibold text-gray-800">Select Students</h3>
//                     </div>
//                     <FaChevronDown
//                       className={`transform transition-transform ${
//                         isDropdownOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </div>

//                   {isDropdownOpen && (
//                     <div className="mt-4 space-y-4">
//                       {/* Year Selection */}
//                       <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Select Year
//                         </label>
//                         <select
//                           value={selectedYear}
//                           onChange={(e) => setSelectedYear(e.target.value)}
//                           className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                         >
//                           <option value="">Select a year</option>
//                           {years.map((year) => (
//                             <option key={year.id} value={year.id}>
//                               {year.name}
//                             </option>
//                           ))}
//                         </select>
//                       </div>

//                       {/* Search Bar */}
//                       {selectedYear && (
//                         <div className="relative">
//                           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                           <input
//                             type="text"
//                             placeholder="Search students..."
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                           />
//                         </div>
//                       )}

//                       {/* Select All Button */}
//                       {selectedYear && filteredStudents.length > 0 && (
//                         <div className="flex justify-end">
//                           <button
//                             onClick={handleSelectAll}
//                             className="text-sm text-blue-600 hover:text-blue-800 font-medium"
//                           >
//                             {filteredStudents.every((student) =>
//                               selectedStudents.includes(student.username)
//                             )
//                               ? "Deselect All"
//                               : "Select All"}
//                           </button>
//                         </div>
//                       )}

//                       {/* Students Grid */}
//                       {selectedYear && (
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                           {filteredStudents.map((student) => (
//                             <div
//                               key={student.id}
//                               className={`bg-white p-4 rounded-lg border-2 transition-all duration-200 ${
//                                 selectedStudents.includes(student.username)
//                                   ? "border-blue-500 shadow-md"
//                                   : "border-gray-200 hover:border-blue-300"
//                               }`}
//                             >
//                               <div className="flex items-start space-x-3">
//                                 <input
//                                   type="checkbox"
//                                   checked={selectedStudents.includes(student.username)}
//                                   onChange={() => handleStudentSelect(student.username)}
//                                   className="mt-1 h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
//                                 />
//                                 <div>
//                                   <h4 className="font-medium text-gray-900">
//                                     {student.name || `${student.first_name || ''} ${student.last_name || ''}`.trim() || 'Unknown Student'}
//                                   </h4>
//                                   <p className="text-sm text-gray-600 mt-1">
//                                     @{student.username}
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="mt-6 flex justify-end space-x-4">
//               <button
//                 onClick={handleReset}
//                 className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Reset
//               </button>
//               <button
//                 onClick={handleSearch}
//                 className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Results Section */}
//         {loading ? (
//           <div className="flex justify-center items-center py-12">
//             <FaSpinner className="animate-spin text-4xl text-blue-600" />
//           </div>
//         ) : error ? (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
//             <strong className="font-bold">Error: </strong>
//             <span className="block sm:inline">{error}</span>
//           </div>
//         ) : reports.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {reports.map(report => {
//               const pdfUrl = `data:application/pdf;base64,${report.pdf_data}`;
//               return (
//                 <div 
//                   key={report.id} 
//                   className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
//                 >
//                   <div className="p-4">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-3">
//                         <div className="bg-blue-100 p-3 rounded-full">
//                           <FaFilePdf className="text-2xl text-blue-600" />
//                         </div>
//                         <div>
//                           <h3 className="text-lg font-semibold text-gray-800">
//                             {report.username}
//                           </h3>
//                           <p className="text-sm text-gray-500">
//                             {formatDate(report.reported_at)}
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex gap-2">
//                       <button
//                         onClick={() => setSelectedPdf(selectedPdf === report.id ? null : report.id)}
//                         className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
//                       >
//                         {selectedPdf === report.id ? <FaEyeSlash /> : <FaEye />}
//                         {selectedPdf === report.id ? 'Hide' : 'View'}
//                       </button>
//                       <a
//                         href={pdfUrl}
//                         download={`report_${report.username}_${report.id}.pdf`}
//                         className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2"
//                       >
//                         <FaDownload />
//                         Download
//                       </a>
//                     </div>
//                   </div>

//                   {selectedPdf === report.id && (
//                     <div className="border-t border-gray-200">
//                       <iframe
//                         src={pdfUrl}
//                         className="w-full h-[500px]"
//                         title={`PDF Report ${report.id}`}
//                       ></iframe>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         ) : selectedStudents.length > 0 && (
//           <div className="text-center py-12 bg-white rounded-xl shadow-sm">
//             <FaFilePdf className="text-6xl text-gray-300 mx-auto mb-4" />
//             <h2 className="text-xl font-semibold text-gray-600">No reports found</h2>
//             <p className="text-gray-500">No reports available for the selected students</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TeacherReport;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FaFilePdf,
  FaDownload,
  FaSpinner,
  FaEye,
  FaEyeSlash,
  FaUsers,
  FaChevronDown,
  FaSearch
} from 'react-icons/fa';
// import { useUser } from '../UserContext';

const TeacherReport = () => {
  // If you are not using user or username in this component, you can remove them
  // to avoid ESLint warnings. Otherwise, log them to confirm they are available.
  // const { user, username } = useUser();

  const [selectedStudents, setSelectedStudents] = useState([]);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Student selection state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);

  // Hardcoded years data
  const years = [
    { id: "1", name: "1st Year" },
    { id: "2", name: "2nd Year" },
    { id: "3", name: "3rd Year" },
    { id: "4", name: "4th Year" },
  ];

  // Fetch student data from API when a year is selected
  useEffect(() => {
    if (selectedYear) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/students?year=${selectedYear}`)
        .then((response) => {
          const fetchedStudents = response.data.students || [];
          // Ensure each student has a name property
          const studentsWithNames = fetchedStudents.map((student) => ({
            ...student,
            name:
              student.name ||
              `${student.first_name || ''} ${student.last_name || ''}`.trim() ||
              'Unknown Student',
          }));
          setStudents(studentsWithNames);
          setFilteredStudents(studentsWithNames);
        })
        .catch((error) => {
          console.error("Error fetching students:", error);
          setStudents([]);
          setFilteredStudents([]);
        });
    } else {
      setStudents([]);
      setFilteredStudents([]);
    }
  }, [selectedYear]);

  // Filter students based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(
        (student) =>
          student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.username.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredStudents(filtered);
    }
  }, [searchQuery, students]);

  // Handle "Select All" / "Deselect All" button click
  const handleSelectAll = () => {
    if (filteredStudents.length === 0) return;
    
    const allFilteredUsernames = filteredStudents.map((student) => student.username);
    const allSelected = allFilteredUsernames.every((username) =>
      selectedStudents.includes(username)
    );
    
    if (allSelected) {
      // Deselect all filtered students
      setSelectedStudents((prev) =>
        prev.filter((username) => !allFilteredUsernames.includes(username))
      );
    } else {
      // Select all filtered students (merging with current selection)
      setSelectedStudents((prev) => [
        ...prev,
        ...allFilteredUsernames.filter((username) => !prev.includes(username)),
      ]);
    }
  };

  // Handle individual student selection toggling
  const handleStudentSelect = (studentUsername) => {
    setSelectedStudents((prev) => {
      if (prev.includes(studentUsername)) {
        return prev.filter((username) => username !== studentUsername);
      } else {
        return [...prev, studentUsername];
      }
    });
  };

  // Handle search to fetch report PDFs
  const handleSearch = async () => {
    if (selectedStudents.length === 0) {
      setError('Please select at least one student');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const apiUrl = (process.env.REACT_APP_API_URL).trim();
      const response = await fetch(`${apiUrl}/api/get-all-report-pdfs`);

      if (!response.ok) {
        throw new Error('Failed to fetch PDF reports');
      }

      const data = await response.json();
      console.log("Fetched reports:", data);
      // Filter reports based on selected students (usernames)
      const filteredReports = data.filter((report) =>
        selectedStudents.includes(report.username)
      );
      console.log("Filtered reports:", filteredReports);
      setReports(filteredReports);
    } catch (err) {
      console.error("Error fetching reports:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle reset of report and student selections
  const handleReset = () => {
    setSelectedStudents([]);
    setReports([]);
    setError(null);
  };

  // Format dates into a readable string
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <h2 className="text-3xl font-bold text-white text-center">Search Reports</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {/* Student Selection Component */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h3 className="text-lg font-medium text-blue-800 mb-4">Select Students</h3>
                <div>
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <div className="flex items-center">
                      <FaUsers className="mr-2 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800">Select Students</h3>
                    </div>
                    <FaChevronDown 
                      className={`transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </div>

                  {isDropdownOpen && (
                    <div className="mt-4 space-y-4">
                      {/* Year Selection */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Select Year
                        </label>
                        <select
                          value={selectedYear}
                          onChange={(e) => setSelectedYear(e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Select a year</option>
                          {years.map((year) => (
                            <option key={year.id} value={year.id}>
                              {year.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Search Bar */}
                      {selectedYear && (
                        <div className="relative">
                          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Search students..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      )}

                      {/* Select All Button */}
                      {selectedYear && filteredStudents.length > 0 && (
                        <div className="flex justify-end">
                          <button
                            onClick={handleSelectAll}
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                          >
                            {filteredStudents.every((student) =>
                              selectedStudents.includes(student.username)
                            ) ? "Deselect All" : "Select All"}
                          </button>
                        </div>
                      )}

                      {/* Students Grid */}
                      {selectedYear && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {filteredStudents.map((student) => (
                            <div
                              key={student.id}
                              className={`bg-white p-4 rounded-lg border-2 transition-all duration-200 ${
                                selectedStudents.includes(student.username)
                                  ? "border-blue-500 shadow-md"
                                  : "border-gray-200 hover:border-blue-300"
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <input
                                  type="checkbox"
                                  checked={selectedStudents.includes(student.username)}
                                  onChange={() => handleStudentSelect(student.username)}
                                  className="mt-1 h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
                                />
                                <div>
                                  <h4 className="font-medium text-gray-900">
                                    {student.name ||
                                      `${student.first_name || ''} ${student.last_name || ''}`.trim() ||
                                      'Unknown Student'}
                                  </h4>
                                  <p className="text-sm text-gray-600 mt-1">
                                    @{student.username}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleReset}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reset
              </button>
              <button
                onClick={handleSearch}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <FaSpinner className="animate-spin text-4xl text-blue-600" />
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        ) : reports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => {
              // Construct the data URL for the PDF
              const pdfUrl = `data:application/pdf;base64,${report.pdf_data}`;
              return (
                <div
                  key={report.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <FaFilePdf className="text-2xl text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {report.username}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {formatDate(report.reported_at)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedPdf(selectedPdf === report.id ? null : report.id)}
                        className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        {selectedPdf === report.id ? <FaEyeSlash /> : <FaEye />}
                        {selectedPdf === report.id ? 'Hide' : 'View'}
                      </button>
                      <a
                        href={pdfUrl}
                        download={`report_${report.username}_${report.id}.pdf`}
                        className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <FaDownload />
                        Download
                      </a>
                    </div>
                  </div>

                  {/* Conditionally render the iframe for viewing the PDF */}
                  {selectedPdf === report.id && (
                    <div className="border-t border-gray-200">
                      <iframe
                        src={pdfUrl}
                        className="w-full h-[500px]"
                        title={`PDF Report ${report.id}`}
                      ></iframe>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : selectedStudents.length > 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <FaFilePdf className="text-6xl text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-600">No reports found</h2>
            <p className="text-gray-500">No reports available for the selected students</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherReport;
