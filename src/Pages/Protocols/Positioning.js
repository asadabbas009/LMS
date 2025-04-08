// // // // import React, { useEffect, useState } from "react";
// // // // import { useNavigate, useParams,useLocation  } from "react-router-dom";

// // // // // Add CSS for animation with improved styling
// // // // const toastStyle = {
// // // //     position: 'fixed',
// // // //     bottom: '40px',
// // // //     left: '50%',
// // // //     transform: 'translateX(-50%)',
// // // //     backgroundColor: 'rgba(255, 250, 230, 0.98)',
// // // //     padding: '16px 24px',
// // // //     borderRadius: '12px',
// // // //     boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
// // // //     zIndex: 9999,
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     maxWidth: '500px',
// // // //     width: 'auto',
// // // //     border: '2px solid #f59e0b',
// // // //     animation: 'slideUpFade 5s ease-in-out forwards'
// // // // };

// // // // // Add keyframes for the animation
// // // // const styleTag = document.createElement('style');
// // // // styleTag.innerHTML = `
// // // // @keyframes slideUpFade {
// // // //     0% { opacity: 0; transform: translate(-50%, 30px); }
// // // //     10% { opacity: 1; transform: translate(-50%, 0); }
// // // //     90% { opacity: 1; transform: translate(-50%, 0); }
// // // //     100% { opacity: 0; transform: translate(-50%, -20px); }
// // // // }

// // // // @keyframes pulse {
// // // //     0% { transform: scale(1); }
// // // //     50% { transform: scale(1.05); }
// // // //     100% { transform: scale(1); }
// // // // }

// // // // .pulse-icon {
// // // //     animation: pulse 2s infinite;
// // // // }

// // // // .reminder-toast {
// // // //     transition: all 0.3s ease;
// // // // }

// // // // .reminder-toast:hover {
// // // //     transform: translateY(-5px);
// // // //     box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
// // // // }
// // // // `;
// // // // document.head.appendChild(styleTag);



// // // // const Positioning = () => {
// // // //     const { topicId, courseId } = useParams();
// // // //     const [imageUrl, setImageUrl] = useState("");
// // // //     const [positionName, setPositionName] = useState("");
// // // //     const [message, setMessage] = useState("Waiting for updates...");
// // // //     const [showPopup, setShowPopup] = useState(false);
// // // //     const [showPositionReminder, setShowPositionReminder] = useState(false);
// // // //     const [positionDetected, setPositionDetected] = useState(false);
// // // //     const navigate = useNavigate();
// // // //     const location = useLocation();
// // // //     const registrationId = location.state?.registration_id || "";



// // // //     // Set up periodic reminder every 20 seconds if position not detected
// // // //     useEffect(() => {
// // // //         if (positionDetected) return; // Don't set up timer if position already detected
        
// // // //         // Show first reminder after 20 seconds
// // // //         const timer = setTimeout(() => {
// // // //             setShowPositionReminder(true);
// // // //         }, 20000);
        
// // // //         // Set up interval for subsequent reminders
// // // //         const interval = setInterval(() => {
// // // //             setShowPositionReminder(true);
// // // //         }, 20000);
        
// // // //         return () => {
// // // //             clearTimeout(timer);
// // // //             clearInterval(interval);
// // // //         };
// // // //     }, [positionDetected]);
    
// // // //     // Auto-hide the position reminder toast after 5 seconds
// // // //     useEffect(() => {
// // // //         if (showPositionReminder) {
// // // //             const hideTimer = setTimeout(() => {
// // // //                 setShowPositionReminder(false);
// // // //             }, 5000);
            
// // // //             return () => clearTimeout(hideTimer);
// // // //         }
// // // //     }, [showPositionReminder]);


// // // //     const handleNext = () => {
// // // //                 if (!topicId || !courseId) {
// // // //                   console.error("Missing topicId or courseId");
// // // //                   return;
// // // //                 }
// // // //                 // Navigate to image acquisition page and pass the registration_id in state
// // // //                 navigate(
// // // //                   `/student-dashboard/courses/ongoing/${topicId}/protocols/image-acquisition/${courseId}`,
// // // //                   { state: { registration_id: registrationId } }
// // // //                 );
// // // //               };

// // // //     return (
// // // //         <div className="min-h-screen bg-gradient-hero pt-20 pb-24 px-4 md:px-8">
// // // //             <div className="relative max-w-4xl mx-auto">
// // // //                 {/* Verification Box */}
// // // //                 <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-20">
// // // //                     <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-6">
// // // //                         <h1 className="text-center text-2xl md:text-3xl font-bold text-white">Patient Position Verification</h1>
// // // //                     </div>
                    
// // // //                     <div className="p-6 space-y-6">
// // // //                         {imageUrl ? (
// // // //                             <div className="text-center">
// // // //                                 <div className="rounded-xl overflow-hidden shadow-lg mb-6">
// // // //                                     <img 
// // // //                                         // src={imageUrl} 
// // // //                                         // alt={positionName} 
// // // //                                         className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105" 
// // // //                                     />
// // // //                                 </div>
// // // //                                 <h2 className="text-xl font-semibold text-gray-800 mb-2">{positionName}</h2>
// // // //                                 <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
// // // //                                     <p className="text-md text-blue-800">{message}</p>
// // // //                                 </div>
// // // //                             </div>
// // // //                         ) : (
// // // //                             <div className="bg-gray-50 rounded-lg p-8 text-center">
// // // //                                 <svg className="mx-auto h-12 w-12 text-gray-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// // // //                                 </svg>
// // // //                                 <p className="text-center text-gray-500 mt-4">Waiting for position updates...</p>
// // // //                             </div>
// // // //                         )}
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Steps Section */}
// // // //                 <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
// // // //                     <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-4 px-6">
// // // //                         <h2 className="text-center text-2xl md:text-3xl font-bold text-white">Patient Placement Steps</h2>
// // // //                     </div>
                    
// // // //                     <div className="p-8">
// // // //                         <div className="space-y-6">
// // // //                             <div className="flex">
// // // //                                 <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
// // // //                                 <div className="ml-4 flex-1 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
// // // //                                     <p className="font-semibold text-blue-800 text-lg mb-2">Prepare the Couch</p>
// // // //                                     <p className="text-gray-700">Adjust and set up the examination couch for patient comfort and stability.</p>
// // // //                                 </div>
// // // //                             </div>

// // // //                             <div className="flex">
// // // //                                 <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
// // // //                                 <div className="ml-4 flex-1 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
// // // //                                     <p className="font-semibold text-blue-800 text-lg mb-2">Determine Patient Positioning</p>
// // // //                                     <p className="text-gray-700">Identify the correct placement, such as Head First Supine or Head First Prone, based on pre-counseling instructions.</p>
// // // //                                 </div>
// // // //                             </div>

// // // //                             <div className="flex">
// // // //                                 <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
// // // //                                 <div className="ml-4 flex-1 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
// // // //                                     <p className="font-semibold text-blue-800 text-lg mb-2">Align the Patient</p>
// // // //                                     <p className="text-gray-700">Position the patient at the center of the couch to ensure proper balance and alignment.</p>
// // // //                                 </div>
// // // //                             </div>

// // // //                             <div className="flex">
// // // //                                 <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
// // // //                                 <div className="ml-4 flex-1 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
// // // //                                     <p className="font-semibold text-blue-800 text-lg mb-2">Adjust Laser Marking</p>
// // // //                                     <p className="text-gray-700">Fine-tune the laser alignment to precisely mark the scanning area.</p>
// // // //                                 </div>
// // // //                             </div>

// // // //                             <div className="flex">
// // // //                                 <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
// // // //                                 <div className="ml-4 flex-1 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
// // // //                                     <p className="font-semibold text-blue-800 text-lg mb-2">Verify Positioning</p>
// // // //                                     <p className="text-gray-700">Check the display screen to confirm that the patient is correctly positioned for the scan.</p>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>

// // // //             {/* Next Button - Fixed at bottom right */}
// // // //             <div className="fixed bottom-8 right-8">
// // // //                 <button 
// // // //                     className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-700 transition-all"
// // // //                     onClick={handleNext}
// // // //                 >
// // // //                     Next ➡️
// // // //                 </button>
// // // //             </div>

// // // //             {/* Congratulations Popup */}
// // // //             {showPopup && (
// // // //                 <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
// // // //                     <div className="bg-white rounded-xl shadow-2xl p-8 text-center max-w-md mx-auto transform animate-fadeIn">
// // // //                         <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
// // // //                             <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
// // // //                             </svg>
// // // //                         </div>
// // // //                         <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
// // // //                         <p className="text-lg text-gray-700 mt-4">Position detected successfully!</p>
// // // //                         <button
// // // //                             className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
// // // //                             onClick={() => setShowPopup(false)}
// // // //                         >
// // // //                             Continue
// // // //                         </button>
// // // //                     </div>
// // // //                 </div>
// // // //             )}
            
// // // //             {/* Position Reminder Toast */}
// // // //             {showPositionReminder && !positionDetected && (
// // // //                 <div style={toastStyle} className="reminder-toast">
// // // //                     <div className="mr-4 pulse-icon">
// // // //                         <svg className="h-8 w-8 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// // // //                             <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
// // // //                         </svg>
// // // //                     </div>
// // // //                     <div>
// // // //                         <p className="font-bold text-amber-800 text-lg">Important Reminder</p>
// // // //                         <p className="text-amber-700 text-base">Kindly ensure the patient is positioned accurately</p>
// // // //                     </div>
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default Positioning;


// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate, useParams, useLocation } from "react-router-dom";

// // // // Add CSS for animation with improved styling
// // // const toastStyle = {
// // //     position: 'fixed',
// // //     bottom: '40px',
// // //     left: '50%',
// // //     transform: 'translateX(-50%)',
// // //     backgroundColor: 'rgba(255, 250, 230, 0.98)',
// // //     padding: '16px 24px',
// // //     borderRadius: '12px',
// // //     boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
// // //     zIndex: 9999,
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     maxWidth: '500px',
// // //     width: 'auto',
// // //     border: '2px solid #f59e0b',
// // //     animation: 'slideUpFade 5s ease-in-out forwards'
// // // };

// // // // Add keyframes for the animation
// // // const styleTag = document.createElement('style');
// // // styleTag.innerHTML = `
// // // @keyframes slideUpFade {
// // //     0% { opacity: 0; transform: translate(-50%, 30px); }
// // //     10% { opacity: 1; transform: translate(-50%, 0); }
// // //     90% { opacity: 1; transform: translate(-50%, 0); }
// // //     100% { opacity: 0; transform: translate(-50%, -20px); }
// // // }

// // // @keyframes pulse {
// // //     0% { transform: scale(1); }
// // //     50% { transform: scale(1.05); }
// // //     100% { transform: scale(1); }
// // // }

// // // .pulse-icon {
// // //     animation: pulse 2s infinite;
// // // }

// // // .reminder-toast {
// // //     transition: all 0.3s ease;
// // // }

// // // .reminder-toast:hover {
// // //     transform: translateY(-5px);
// // //     box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
// // // }
// // // `;
// // // document.head.appendChild(styleTag);

// // // const Positioning = () => {
// // //     const { topicId, courseId } = useParams();
// // //     const [showPopup, setShowPopup] = useState(false);
// // //     const [showPositionReminder, setShowPositionReminder] = useState(false);
// // //     const navigate = useNavigate();
// // //     const location = useLocation();
// // //     const registrationId = location.state?.registration_id || "";

// // //     // Set up periodic reminder every 20 seconds if position not detected
// // //     useEffect(() => {
// // //         // Show first reminder after 20 seconds
// // //         const timer = setTimeout(() => {
// // //             setShowPositionReminder(true);
// // //         }, 20000);
        
// // //         // Set up interval for subsequent reminders
// // //         const interval = setInterval(() => {
// // //             setShowPositionReminder(true);
// // //         }, 20000);
        
// // //         return () => {
// // //             clearTimeout(timer);
// // //             clearInterval(interval);
// // //         };
// // //     }, []);
    
// // //     // Auto-hide the position reminder toast after 5 seconds
// // //     useEffect(() => {
// // //         if (showPositionReminder) {
// // //             const hideTimer = setTimeout(() => {
// // //                 setShowPositionReminder(false);
// // //             }, 5000);
            
// // //             return () => clearTimeout(hideTimer);
// // //         }
// // //     }, [showPositionReminder]);

// // //     const handleNext = () => {
// // //         if (!topicId || !courseId) {
// // //             console.error("Missing topicId or courseId");
// // //             return;
// // //         }
// // //         // Navigate to image acquisition page and pass the registration_id in state
// // //         navigate(
// // //             `/student-dashboard/courses/ongoing/${topicId}/protocols/image-acquisition/${courseId}`,
// // //             { state: { registration_id: registrationId } }
// // //         );
// // //     };

// // //     return (
// // //         <div className="min-h-screen bg-gradient-hero pt-20 pb-24 px-4 md:px-8">
// // //             <div className="relative max-w-4xl mx-auto">
// // //                 {/* Verification Box */}
// // //                 <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-20">
// // //                     <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-6">
// // //                         <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
// // //                             Patient Position Verification
// // //                         </h1>
// // //                     </div>
                    
// // //                     <div className="p-6 space-y-6">
// // //                         <div className="bg-gray-50 rounded-lg p-8 text-center">
// // //                             <svg className="mx-auto h-12 w-12 text-gray-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
// // //                             </svg>
// // //                             <p className="text-center text-gray-500 mt-4">Waiting for position updates...</p>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Next Button - Fixed at bottom right */}
// // //             <div className="fixed bottom-8 right-8">
// // //                 <button 
// // //                     className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-700 transition-all"
// // //                     onClick={handleNext}
// // //                 >
// // //                     Next ➡️
// // //                 </button>
// // //             </div>

// // //             {/* Congratulations Popup */}
// // //             {showPopup && (
// // //                 <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
// // //                     <div className="bg-white rounded-xl shadow-2xl p-8 text-center max-w-md mx-auto transform animate-fadeIn">
// // //                         <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
// // //                             <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
// // //                             </svg>
// // //                         </div>
// // //                         <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
// // //                         <p className="text-lg text-gray-700 mt-4">Position detected successfully!</p>
// // //                         <button
// // //                             className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
// // //                             onClick={() => setShowPopup(false)}
// // //                         >
// // //                             Continue
// // //                         </button>
// // //                     </div>
// // //                 </div>
// // //             )}

// // //             {/* Position Reminder Toast */}
// // //             {showPositionReminder && (
// // //                 <div style={toastStyle} className="reminder-toast">
// // //                     <div className="mr-4 pulse-icon">
// // //                         <svg className="h-8 w-8 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// // //                             <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
// // //                         </svg>
// // //                     </div>
// // //                     <p className="font-bold text-amber-800 text-lg">Important Reminder</p>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default Positioning;
// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate, useParams, useLocation } from "react-router-dom";

// // // const Positioning = () => {
// // //     const { topicId, courseId } = useParams();
// // //     const [showPopup, setShowPopup] = useState(false);
// // //     const [checkedSteps, setCheckedSteps] = useState({
// // //         step1: false,
// // //         step2: false,
// // //         step3: false,
// // //         step4: false,
// // //         step5: false
// // //     });

// // //     const navigate = useNavigate();
// // //     const location = useLocation();
// // //     const registrationId = location.state?.registration_id || "";

// // //     // Show Congratulations popup 30 seconds after step 2 is checked
// // //     useEffect(() => {
// // //         let timer;
// // //         if (checkedSteps.step2) {
// // //             timer = setTimeout(() => {
// // //                 setShowPopup(true);
// // //             }, 30000); // 30 seconds delay
// // //         }
// // //         return () => clearTimeout(timer);
// // //     }, [checkedSteps.step2]);

// // //     const handleCheckboxChange = (step) => {
// // //         setCheckedSteps((prev) => ({
// // //             ...prev,
// // //             [step]: !prev[step]
// // //         }));
// // //     };

// // //     const handleNext = () => {
// // //         if (!topicId || !courseId) {
// // //             console.error("Missing topicId or courseId");
// // //             return;
// // //         }
// // //         navigate(
// // //             `/student-dashboard/courses/ongoing/${topicId}/protocols/image-acquisition/${courseId}`,
// // //             { state: { registration_id: registrationId } }
// // //         );
// // //     };

// // //     return (
// // //         <div className="min-h-screen bg-gradient-hero pt-20 pb-24 px-4 md:px-8">
// // //             <div className="relative max-w-4xl mx-auto">
// // //                 <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-20">
// // //                     <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-6">
// // //                         <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
// // //                             Patient Position Verification
// // //                         </h1>
// // //                     </div>
                    
// // //                     <div className="p-6 space-y-6">
// // //                         <div className="text-center">
// // //                             <div className="rounded-xl overflow-hidden shadow-lg mb-6">
// // //                                 {/* <img 
// // //                                     src="" 
// // //                                     alt="Position Preview" 
// // //                                     className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105" 
// // //                                 /> */}
// // //                             </div>
// // //                             <h2 className="text-xl font-semibold text-gray-800 mb-2">Patient Positioning Guide</h2>
// // //                             <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
// // //                                 <p className="text-md text-blue-800">Ensure the patient is aligned correctly as per the protocol.</p>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Steps Section with Checkboxes */}
// // //                 <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
// // //                     <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-4 px-6">
// // //                         <h2 className="text-center text-2xl md:text-3xl font-bold text-white">Patient Placement Steps</h2>
// // //                     </div>
                    
// // //                     <div className="p-8 space-y-6">
// // //                         {[
// // //                             { id: "step1", title: "Prepare the Couch", description: "Adjust and set up the examination couch for patient comfort and stability." },
// // //                             { id: "step2", title: "Determine Patient Positioning", description: "Identify the correct placement based on pre-counseling instructions." },
// // //                             { id: "step3", title: "Align the Patient", description: "Position the patient at the center of the couch to ensure proper alignment." },
// // //                             { id: "step4", title: "Adjust Laser Marking", description: "Fine-tune the laser alignment for precise marking of the scanning area." },
// // //                             { id: "step5", title: "Verify Positioning", description: "Check the display screen to confirm that the patient is correctly positioned." }
// // //                         ].map((step, index) => (
// // //                             <div className="flex items-center space-x-4" key={index}>
// // //                                 <input 
// // //                                     type="checkbox" 
// // //                                     id={step.id} 
// // //                                     checked={checkedSteps[step.id]} 
// // //                                     onChange={() => handleCheckboxChange(step.id)} 
// // //                                     className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
// // //                                 />
// // //                                 <div className="flex-1 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
// // //                                     <label htmlFor={step.id} className="flex items-center space-x-2 cursor-pointer">
// // //                                         <span className="font-semibold text-blue-800 text-lg">{step.title}</span>
// // //                                     </label>
// // //                                     <p className="text-gray-700">{step.description}</p>
// // //                                 </div>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Next Button */}
// // //             <div className="fixed bottom-8 right-8">
// // //                 <button 
// // //                     className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-700 transition-all"
// // //                     onClick={handleNext}
// // //                 >
// // //                     Next ➡️
// // //                 </button>
// // //             </div>

// // //             {/* Congratulations Popup (Appears 30s after step 2 is checked) */}
// // //             {showPopup && (
// // //                 <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
// // //                     <div className="bg-white rounded-xl shadow-2xl p-8 text-center max-w-md mx-auto transform animate-fadeIn">
// // //                         <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
// // //                             <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
// // //                             </svg>
// // //                         </div>
// // //                         <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
// // //                         <p className="text-lg text-gray-700 mt-4">Position detected successfully!</p>
// // //                         <button
// // //                             className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
// // //                             onClick={() => setShowPopup(false)}
// // //                         >
// // //                             Continue
// // //                         </button>
// // //                     </div>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default Positioning;
// // import React, { useEffect, useState } from "react";
// // import { useNavigate, useParams, useLocation } from "react-router-dom";

// // const Positioning = () => {
// //     const { topicId, courseId } = useParams();
// //     const [showPopup, setShowPopup] = useState(false);
// //     const [checkedSteps, setCheckedSteps] = useState({
// //         step1: false,
// //         step2: false,
// //         step3: false,
// //         step4: false,
// //         step5: false
// //     });
// //     const [imageUrl, setImageUrl] = useState(null); // ✅ FIX: Prevents empty string in <img>

// //     const navigate = useNavigate();
// //     const location = useLocation();
// //     const registrationId = location.state?.registration_id || "";

// //     // Show Congratulations popup 30 seconds after step 2 is checked
// //     useEffect(() => {
// //         let timer;
// //         if (checkedSteps.step2) {
// //             timer = setTimeout(() => {
// //                 setShowPopup(true);
// //             }, 30000); // 30 seconds delay
// //         }
// //         return () => clearTimeout(timer);
// //     }, [checkedSteps.step2]);

// //     const handleCheckboxChange = (step) => {
// //         setCheckedSteps((prev) => ({
// //             ...prev,
// //             [step]: !prev[step]
// //         }));
// //     };

// //     const handleNext = () => {
// //         if (!topicId || !courseId) {
// //             console.error("Missing topicId or courseId");
// //             return;
// //         }
// //         navigate(
// //             `/student-dashboard/courses/ongoing/${topicId}/protocols/image-acquisition/${courseId}`,
// //             { state: { registration_id: registrationId } }
// //         );
// //     };

// //     return (
// //         <div className="min-h-screen bg-gradient-hero pt-20 pb-24 px-4 md:px-8">
// //             <div className="relative max-w-4xl mx-auto">
// //                 <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-20">
// //                     <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-6">
// //                         <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
// //                             Patient Position Verification
// //                         </h1>
// //                     </div>
                    
// //                     <div className="p-6 space-y-6">
// //                         <div className="text-center">
// //                             {imageUrl && ( // ✅ FIX: Only render image if imageUrl is not null
// //                                 <div className="rounded-xl overflow-hidden shadow-lg mb-6">
// //                                     <img 
// //                                         src={imageUrl} 
// //                                         alt="Position Preview" 
// //                                         className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105" 
// //                                     />
// //                                 </div>
// //                             )}
// //                             <h2 className="text-xl font-semibold text-gray-800 mb-2">Patient Positioning Guide</h2>
// //                             <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
// //                                 <p className="text-md text-blue-800">Ensure the patient is aligned correctly as per the protocol.</p>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Steps Section with Checkboxes */}
// //                 <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
// //                     <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-4 px-6">
// //                         <h2 className="text-center text-2xl md:text-3xl font-bold text-white">Patient Placement Steps</h2>
// //                     </div>
                    
// //                     <div className="p-8 space-y-6">
// //                         {[
// //                             { id: "step1", title: "Prepare the Couch", description: "Adjust and set up the examination couch for patient comfort and stability." },
// //                             { id: "step2", title: "Determine Patient Positioning", description: "Identify the correct placement based on pre-counseling instructions." },
// //                             { id: "step3", title: "Align the Patient", description: "Position the patient at the center of the couch to ensure proper alignment." },
// //                             { id: "step4", title: "Adjust Laser Marking", description: "Fine-tune the laser alignment for precise marking of the scanning area." },
// //                             { id: "step5", title: "Verify Positioning", description: "Check the display screen to confirm that the patient is correctly positioned." }
// //                         ].map((step, index) => (
// //                             <div className="flex items-center space-x-4" key={index}>
// //                                 <input 
// //                                     type="checkbox" 
// //                                     id={step.id} 
// //                                     checked={checkedSteps[step.id]} 
// //                                     onChange={() => handleCheckboxChange(step.id)} 
// //                                     className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
// //                                 />
// //                                 <div className="flex-1 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
// //                                     <label htmlFor={step.id} className="flex items-center space-x-2 cursor-pointer">
// //                                         <span className="font-semibold text-blue-800 text-lg">{step.title}</span>
// //                                     </label>
// //                                     <p className="text-gray-700">{step.description}</p>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Next Button */}
// //             <div className="fixed bottom-8 right-8">
// //                 <button 
// //                     className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-700 transition-all"
// //                     onClick={handleNext}
// //                 >
// //                     Next ➡️
// //                 </button>
// //             </div>

// //             {/* Congratulations Popup (Appears 30s after step 2 is checked) */}
// //             {showPopup && (
// //                 <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
// //                     <div className="bg-white rounded-xl shadow-2xl p-8 text-center max-w-md mx-auto transform animate-fadeIn">
// //                         <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
// //                             <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
// //                             </svg>
// //                         </div>
// //                         <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
// //                         <p className="text-lg text-gray-700 mt-4">Position detected successfully!</p>
// //                         <button
// //                             className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
// //                             onClick={() => setShowPopup(false)}
// //                         >
// //                             Continue
// //                         </button>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default Positioning; // ✅ Ensure Correct Export
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams, useLocation } from "react-router-dom";

// const Positioning = () => {
//     const { topicId, courseId } = useParams();
//     const [showPopup, setShowPopup] = useState(false);
//     const [checkedSteps, setCheckedSteps] = useState({
//         step1: false,
//         step2: false,
//         step3: false,
//         step4: false,
//         step5: false
//     });
//     const [imageUrl, setImageUrl] = useState(null); // Prevents empty src in <img>

//     const navigate = useNavigate();
//     const location = useLocation();
//     const registrationId = location.state?.registration_id || "";

//     // Show Congratulations popup 30 seconds after step 2 is checked
//     useEffect(() => {
//         let timer;
//         if (checkedSteps.step2) {
//             timer = setTimeout(() => {
//                 setShowPopup(true);
//             }, 30000); // 30 seconds delay
//         }
//         return () => clearTimeout(timer);
//     }, [checkedSteps.step2]);

//     const handleCheckboxChange = (step) => {
//         setCheckedSteps((prev) => ({
//             ...prev,
//             [step]: !prev[step]
//         }));
//     };

//     const handleNext = () => {
//         if (!topicId || !courseId) {
//             console.error("Missing topicId or courseId");
//             return;
//         }
//         navigate(
//             `/student-dashboard/courses/ongoing/${topicId}/protocols/image-acquisition/${courseId}`,
//             { state: { registration_id: registrationId } }
//         );
//     };

//     return (
//         <div className="min-h-screen bg-gradient-hero pt-20 pb-24 px-4 md:px-8">
//             <div className="relative max-w-4xl mx-auto">
//                 <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-20">
//                     <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-6">
//                         <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
//                             Patient Position Verification
//                         </h1>
//                     </div>
                    
//                     <div className="p-6 space-y-6">
//                         <div className="text-center">
//                             {imageUrl && (
//                                 <div className="rounded-xl overflow-hidden shadow-lg mb-6">
//                                     <img 
//                                         src={imageUrl} 
//                                         alt="Position Preview" 
//                                         className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105" 
//                                     />
//                                 </div>
//                             )}
//                             <h2 className="text-xl font-semibold text-gray-800 mb-2">Patient Positioning Guide</h2>
//                             <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
//                                 <p className="text-md text-blue-800">Ensure the patient is aligned correctly as per the protocol.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Steps Section with Checkboxes */}
//                 <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
//                     <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-4 px-6">
//                         <h2 className="text-center text-2xl md:text-3xl font-bold text-white">Patient Placement Steps</h2>
//                     </div>
                    
//                     <div className="p-8 space-y-6">
//                         {[
//                             { id: "step1", title: "Prepare the Couch", description: "Adjust and set up the examination couch for patient comfort and stability." },
//                             { id: "step2", title: "Determine Patient Positioning", description: "Identify the correct placement based on pre-counseling instructions." },
//                             { id: "step3", title: "Align the Patient", description: "Position the patient at the center of the couch to ensure proper alignment." },
//                             { id: "step4", title: "Adjust Laser Marking", description: "Fine-tune the laser alignment for precise marking of the scanning area." },
//                             { id: "step5", title: "Verify Positioning", description: "Check the display screen to confirm that the patient is correctly positioned." }
//                         ].map((step, index) => (
//                             <div className="flex items-center space-x-4" key={index}>
//                                 <input 
//                                     type="checkbox" 
//                                     id={step.id} 
//                                     checked={checkedSteps[step.id]} 
//                                     onChange={() => handleCheckboxChange(step.id)} 
//                                     className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                                 />
//                                 <div className="flex-1 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
//                                     <label htmlFor={step.id} className="flex items-center space-x-2 cursor-pointer">
//                                         <span className="font-semibold text-blue-800 text-lg">{step.title}</span>
//                                     </label>
//                                     <p className="text-gray-700">{step.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Next Button */}
//             <div className="fixed bottom-8 right-8">
//                 <button 
//                     className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-700 transition-all"
//                     onClick={handleNext}
//                 >
//                     Next ➡️
//                 </button>
//             </div>

//             {/* Congratulations Popup (Appears 30s after step 2 is checked) */}
//             {showPopup && (
//                 <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
//                     <div className="bg-white rounded-xl shadow-2xl p-8 text-center max-w-md mx-auto transform animate-fadeIn">
//                         <div className="w-40 h-40 mx-auto mb-6">
//                             <img 
//                                 src="/images/success.png"  // ✅ Your image stored in "public/images/success.png"
//                                 alt="Success" 
//                                 className="w-full h-full object-cover rounded-lg"
//                             />
//                         </div>
//                         <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
//                         <p className="text-lg text-gray-700 mt-4">Position detected successfully!</p>
//                         <button
//                             className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
//                             onClick={() => setShowPopup(false)}
//                         >
//                             Continue
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Positioning;
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams, useLocation } from "react-router-dom";
// import img from "../../Assest/supine.jpeg"
// const Positioning = () => {
//     const { topicId, courseId } = useParams();
//     const [showPopup, setShowPopup] = useState(false);
//     const [checkedSteps, setCheckedSteps] = useState({
//         step1: false,
//         step2: false,
//         step3: false,
//         step4: false,
//         step5: false
//     });

//     const navigate = useNavigate();
//     const location = useLocation();
//     const registrationId = location.state?.registration_id || "";

//     // Show Congratulations popup 30 seconds after step 2 is checked
//     useEffect(() => {
//         let timer;
//         if (checkedSteps.step2) {
//             timer = setTimeout(() => {
//                 setShowPopup(true);
//             }, 30000); // 30 seconds delay
//         }
//         return () => clearTimeout(timer);
//     }, [checkedSteps.step2]);

//     const handleCheckboxChange = (step) => {
//         setCheckedSteps((prev) => ({
//             ...prev,
//             [step]: !prev[step]
//         }));
//     };

//     const handleNext = () => {
//         if (!topicId || !courseId) {
//             console.error("Missing topicId or courseId");
//             return;
//         }
//         navigate(
//             `/student-dashboard/courses/ongoing/${topicId}/protocols/image-acquisition/${courseId}`,
//             { state: { registration_id: registrationId } }
//         );
//     };

//     return (
//         <div className="min-h-screen bg-gradient-hero pt-20 pb-24 px-4 md:px-8">
//             <div className="relative max-w-4xl mx-auto">
//                 {/* Patient Position Guide Section */}
//                 <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-20">
//                     <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-6">
//                         <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
//                             Patient Position Guide
//                         </h1>
//                     </div>
                    
//                     <div className="p-6 space-y-6 text-center">
//                         {/* ✅ Display Image from the "public/images" folder */}
//                         <div className="rounded-xl overflow-hidden shadow-lg mb-6">
//                             <img 
//                                 src={img}  // Replace with your actual image name
//                                 alt="Patient Position Guide" 
//                                 className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105" 
//                             />
//                         </div>

//                         <h2 className="text-xl font-semibold text-gray-800 mb-2">Ensure Correct Patient Positioning</h2>
//                         <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
//                             <p className="text-md text-blue-800">
//                                 Follow the instructions carefully to align the patient correctly.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Steps Section with Checkboxes */}
//                 <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
//                     <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-4 px-6">
//                         <h2 className="text-center text-2xl md:text-3xl font-bold text-white">Patient Placement Steps</h2>
//                     </div>
                    
//                     <div className="p-8 space-y-6">
//                         {[
//                             { id: "step1", title: "Prepare the Couch", description: "Adjust and set up the examination couch for patient comfort and stability." },
//                             { id: "step2", title: "Determine Patient Positioning", description: "Identify the correct placement based on pre-counseling instructions." },
//                             { id: "step3", title: "Align the Patient", description: "Position the patient at the center of the couch to ensure proper alignment." },
//                             { id: "step4", title: "Adjust Laser Marking", description: "Fine-tune the laser alignment for precise marking of the scanning area." },
//                             { id: "step5", title: "Verify Positioning", description: "Check the display screen to confirm that the patient is correctly positioned." }
//                         ].map((step, index) => (
//                             <div className="flex items-center space-x-4" key={index}>
//                                 <input 
//                                     type="checkbox" 
//                                     id={step.id} 
//                                     checked={checkedSteps[step.id]} 
//                                     onChange={() => handleCheckboxChange(step.id)} 
//                                     className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                                 />
//                                 <div className="flex-1 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
//                                     <label htmlFor={step.id} className="flex items-center space-x-2 cursor-pointer">
//                                         <span className="font-semibold text-blue-800 text-lg">{step.title}</span>
//                                     </label>
//                                     <p className="text-gray-700">{step.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Next Button */}
//             <div className="fixed bottom-8 right-8">
//                 <button 
//                     className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-700 transition-all"
//                     onClick={handleNext}
//                 >
//                     Next ➡️
//                 </button>
//             </div>

//             {/* Congratulations Popup (Appears 30s after step 2 is checked) */}
//             {showPopup && (
//                 <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
//                     <div className="bg-white rounded-xl shadow-2xl p-8 text-center max-w-md mx-auto transform animate-fadeIn">
//                         <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
//                         <p className="text-lg text-gray-700 mt-4">Position detected successfully!</p>
//                         <button
//                             className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
//                             onClick={() => setShowPopup(false)}
//                         >
//                             Continue
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Positioning;
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import img from "../../Assest/supine.jpeg"; // ✅ Main guide image (will appear after pop-up)
import confetti from 'canvas-confetti';



const Positioning = () => {
    const { topicId, courseId } = useParams();
    const [showPopup, setShowPopup] = useState(false);
    const [showImage, setShowImage] = useState(false); // ✅ State to control when to show the image
    const [checkedSteps, setCheckedSteps] = useState({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false
    });

    const navigate = useNavigate();
    const location = useLocation();
    const registrationId = location.state?.registration_id || "";

    // Show Congratulations popup 30 seconds after step 2 is checked
    // useEffect(() => {
    //     let timer;
    //     if (checkedSteps.step2) {
    //         timer = setTimeout(() => {
    //             setShowPopup(true);
    //         }, 30000); // 30 seconds delay
    //     }
    //     return () => clearTimeout(timer);
    // }, [checkedSteps.step2]);
    useEffect(() => {
        let timer;
        if (checkedSteps.step2) {
            timer = setTimeout(() => {
                setShowPopup(true);
                
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }, 30000); // 30 seconds delay
        }
        return () => clearTimeout(timer);
    }, [checkedSteps.step2]);

    // After closing the pop-up, show the image in the guide section
    const handlePopupClose = () => {
        setShowPopup(false);
        setShowImage(true); // ✅ Show the main image after the pop-up is closed
    };

    const handleCheckboxChange = (step) => {
        setCheckedSteps((prev) => ({
            ...prev,
            [step]: !prev[step]
        }));
    };

    const handleNext = () => {
        if (!topicId || !courseId) {
            console.error("Missing topicId or courseId");
            return;
        }
        navigate(
            `/student-dashboard/courses/ongoing/${topicId}/protocols/image-acquisition/${courseId}`,
            { state: { registration_id: registrationId } }
        );
    };

    return (
        <div className="min-h-screen bg-gradient-hero pt-20 pb-24 px-4 md:px-8">
            <div className="relative max-w-4xl mx-auto">
                {/* Patient Position Guide Section */}
                <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-20">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-6">
                        <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
                            Patient Position Guide
                        </h1>
                    </div>
                    
                    <div className="p-6 space-y-6 text-center">
                        {/* ✅ Image appears only after the pop-up */}
                        {showImage && (
                            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                                <img 
                                    src={img}  
                                    alt="Patient Position Guide" 
                                    className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105" 
                                />
                            </div>
                        )}

                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Ensure Correct Patient Positioning</h2>
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                            <p className="text-md text-blue-800">
                                Follow the instructions carefully to align the patient correctly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Steps Section with Checkboxes */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-4 px-6">
                        <h2 className="text-center text-2xl md:text-3xl font-bold text-white">Patient Placement Steps</h2>
                    </div>
                    
                    <div className="p-8 space-y-6">
                        {[
                            { id: "step1", title: "Prepare the Couch", description: "Adjust and set up the examination couch for patient comfort and stability." },
                            { id: "step2", title: "Determine Patient Positioning", description: "Identify the correct placement based on pre-counseling instructions." },
                            { id: "step3", title: "Align the Patient", description: "Position the patient at the center of the couch to ensure proper alignment." },
                            { id: "step4", title: "Adjust Laser Marking", description: "Fine-tune the laser alignment for precise marking of the scanning area." },
                            { id: "step5", title: "Verify Positioning", description: "Check the display screen to confirm that the patient is correctly positioned." }
                        ].map((step, index) => (
                            <div className="flex items-center space-x-4" key={index}>
                                <input 
                                    type="checkbox" 
                                    id={step.id} 
                                    checked={checkedSteps[step.id]} 
                                    onChange={() => handleCheckboxChange(step.id)} 
                                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <div className="flex-1 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                                    <label htmlFor={step.id} className="flex items-center space-x-2 cursor-pointer">
                                        <span className="font-semibold text-blue-800 text-lg">{step.title}</span>
                                    </label>
                                    <p className="text-gray-700">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Next Button */}
            <div className="fixed bottom-8 right-8">
                <button 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-700 transition-all"
                    onClick={handleNext}
                >
                    Next ➡️
                </button>
            </div>

            {/* Congratulations Popup (Appears 30s after step 2 is checked) */}
            {showPopup && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-2xl p-8 text-center max-w-md mx-auto transform animate-fadeIn">
                        <h2 className="text-3xl font-bold text-green-600">Congratulations!</h2>
                        <p className="text-lg text-gray-700 mt-4">Position detected successfully!</p>
                        <button
                            className="mt-8 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
                            onClick={handlePopupClose} // ✅ Close popup & show image
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Positioning;
