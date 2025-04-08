// // // import './App.css';
// // // import Navbar from './Components/Navbar';
// // // import { UserProvider } from "./UserContext";
// // // import Login from './Components/Login';
// // // import SignUp from './Components/Signup';
// // // import { Route, Routes } from 'react-router-dom';
// // // import LandingPage from './Pages/LandingPage';
// // // import StudentDashboard from './Pages/StudentDashboard';
// // // import TeacherDashboard from './Pages/TeacherDashboard';
// // // import Assignments from './Components/Assignment';
// // // import TeacherHome from './Components/TeacherHome';
// // // import StudentHome from './Components/StudentHome';
// // // import TeacherCaseLibrary from './Components/TeacherCaseLibrary';
// // // import Chatbot from './Components/Chatbot';
// // // import { useState, useEffect } from 'react';
// // // import ImageAnalysis from './Pages/Protocols/ImageAnalysis';
// // // import CaseReview from './Components/CaseReview';
// // // import PatientRegistration from './Pages/Protocols/PatientRegistration';
// // // import ConsentForm from './Pages/Protocols/ConsentForm';
// // // import PatientPreparation from './Pages/Protocols/PatientPreparation';
// // // import PatientPositioning from './Pages/Protocols/PatientPositioning';
// // // import ImageAcquisition from './Pages/Protocols/ImageAcquisition';
// // // import PostCounselling from './Pages/Protocols/PostCounselling';
// // // import ImageReporting from './Pages/Protocols/ImageReporting';
// // // import Account from './Components/Account';
// // // import Positioning from './Pages/Protocols/Positioning';
// // // import CourseOverview from './Pages/Protocols/CourseOverview';
// // // import Topic from './Components/Topic';
// // // import Quiz from './Pages/Protocols/Quiz';
// // // import Forum from './Components/Forum';
// // // import Preloader from './Components/Preloader'; // ✅ Preloader import kiya

// // // function App() {
// // //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     // ✅ 1.2s ke baad fade-out aur 1.5s ke baad remove
// // //     const timer = setTimeout(() => {
// // //       setLoading(false);
// // //     }, 1500);
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   useEffect(() => {
// // //     const user = localStorage.getItem('user');
// // //     setIsLoggedIn(!!user);
// // //   }, []);

// // //   const handleLogin = () => {
// // //     setIsLoggedIn(true);
// // //   };

// // //   const handleLogout = () => {
// // //     localStorage.removeItem('user');
// // //     setIsLoggedIn(false);
// // //   };

// // //   return (
// // //     <UserProvider>
// // //       <div>
// // //         {loading ? (
// // //           <Preloader />
// // //         ) : (
// // //           <>
// // //             <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
// // //             <Routes>
// // //               <Route path='/login' element={<Login onLogin={handleLogin} />} />
// // //               <Route path='/signup' element={<SignUp />} />
// // //               <Route path='/' element={<LandingPage />} />
// // //               <Route path='/student-dashboard/*' element={<StudentDashboard />} >
// // //                 <Route path='home' element={<StudentHome />} />
// // //                 <Route path='topic' element={<Topic/>} />
// // //                 <Route path='forum' element={<Forum/>} />
// // //                 <Route path="courses/ongoing/:topicId" element={<Assignments studentName={localStorage.getItem("studentName")} />}/>
// // //                 <Route path='account' element={<Account/>} />
// // //                 <Route path='report' element={<Chatbot />} />
// // //                 {/* Protocol Routes inside Courses */}
// // //                 <Route path="courses/ongoing/:topicId/protocols/course-overview/:courseId" element={<CourseOverview />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/patient-registration/:courseId" element={<PatientRegistration />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/patient-preparation/:courseId" element={<PatientPreparation />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/consent/:courseId" element={<ConsentForm />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/patient-positioning/:courseId" element={<PatientPositioning />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/positioning/:courseId" element={<Positioning />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/image-acquisition/:courseId" element={<ImageAcquisition />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/post-counselling/:courseId" element={<PostCounselling />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/image-reporting/:courseId" element={<ImageReporting />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/image-analysis/:courseId" element={<ImageAnalysis />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/quiz/:courseId" element={<Quiz />} />
// // //               </Route>
// // //               <Route path='/teacher-dashboard/*' element={<TeacherDashboard />}>
// // //                 <Route path='home' element={<TeacherHome />} />
// // //                 <Route path='case-library' element={<TeacherCaseLibrary />} />
// // //                 <Route path='report' element={<CaseReview />} />
// // //                 <Route path='account' element={<Account />} />
// // //               </Route>
// // //             </Routes>
// // //           </>
// // //         )}
// // //       </div>
// // //     </UserProvider>
// // //   );
// // // }

// // // export default App;

// // // import './App.css';
// // // import Navbar from './Components/Navbar';
// // // import { UserProvider } from "./UserContext";
// // // import Login from './Components/Login';
// // // import SignUp from './Components/Signup';
// // // import { Route, Routes, useNavigate } from 'react-router-dom';
// // // import LandingPage from './Pages/LandingPage';
// // // import StudentDashboard from './Pages/StudentDashboard';
// // // import TeacherDashboard from './Pages/TeacherDashboard';
// // // import Assignments from './Components/Assignment';
// // // import TeacherHome from './Components/TeacherHome';
// // // import StudentHome from './Components/StudentHome';
// // // import TeacherCaseLibrary from './Components/TeacherCaseLibrary';
// // // import Chatbot from './Components/Chatbot';
// // // import { useState, useEffect } from 'react';
// // // import ImageAnalysis from './Pages/Protocols/ImageAnalysis';
// // // import CaseReview from './Components/CaseReview';
// // // import PatientRegistration from './Pages/Protocols/PatientRegistration';
// // // import ConsentForm from './Pages/Protocols/ConsentForm';
// // // import PatientPreparation from './Pages/Protocols/PatientPreparation';
// // // import PatientPositioning from './Pages/Protocols/PatientPositioning';
// // // import ImageAcquisition from './Pages/Protocols/ImageAcquisition';
// // // import PostCounselling from './Pages/Protocols/PostCounselling';
// // // import ImageReporting from './Pages/Protocols/ImageReporting';
// // // import Account from './Components/Account';
// // // import Positioning from './Pages/Protocols/Positioning';
// // // import CourseOverview from './Pages/Protocols/CourseOverview';
// // // import Topic from './Components/Topic';
// // // import Quiz from './Pages/Protocols/Quiz';
// // // import Forum from './Components/Forum';
// // // import LogoLoader from './Components/LogoLoader';
// // // import AccessDenied from './Components/AccessDenied';
// // // import ProtectedRoute from './Components/ProtectedRoute';

// // // function App() {
// // //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// // //   const [loading, setLoading] = useState(true);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     // Loading time for the LogoLoader
// // //     const timer = setTimeout(() => {
// // //       setLoading(false);
// // //     }, 3000);
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   useEffect(() => {
// // //     // Check for existing session
// // //     const user = localStorage.getItem('user');
// // //     if (user) {
// // //       setIsLoggedIn(true);
// // //       console.log("User is logged in:", user);
// // //     } else {
// // //       setIsLoggedIn(false);
// // //       console.log("User is not logged in");
// // //     }

// // //     // Clear user data when tab is closed
// // //     const handleTabClose = () => {
// // //       localStorage.removeItem('user');
// // //     };

// // //     // Add event listener for tab close
// // //     window.addEventListener('beforeunload', handleTabClose);

// // //     // Cleanup
// // //     return () => {
// // //       window.removeEventListener('beforeunload', handleTabClose);
// // //     };
// // //   }, []);

// // //   const handleLogin = () => {
// // //     localStorage.setItem('user', 'loggedIn');
// // //     setIsLoggedIn(true);
// // //     console.log("User logged in successfully");
// // //     navigate("/student-dashboard/home");
// // //   };

// // //   const handleLogout = () => {
// // //     localStorage.removeItem('user');
// // //     setIsLoggedIn(false);
// // //     console.log("User logged out");
// // //     navigate("/login");
// // //   };

// // //   return (
// // //     <UserProvider>
// // //       <div>
// // //         {loading ? (
// // //           <LogoLoader />
// // //         ) : (
// // //           <>
// // //             <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
// // //             <Routes>
// // //               <Route path='/login' element={<Login onLogin={handleLogin} />} />
// // //               <Route path='/signup' element={<SignUp />} />
// // //               <Route path='/' element={<LandingPage />} />
// // //               <Route path='/access-denied' element={<AccessDenied />} />
              
// // //               {/* Protected Student Dashboard */}
// // //               <Route 
// // //                 path='/student-dashboard/*' 
// // //                 element={
// // //                   <ProtectedRoute>
// // //                     <StudentDashboard />
// // //                   </ProtectedRoute>
// // //                 } 
// // //               >
// // //                 <Route path='home' element={<StudentHome />} />
// // //                 <Route path='topic' element={<Topic/>} />
// // //                 <Route path='forums' element={<Forum/>} />
// // //                 <Route path="courses/ongoing/:topicId" element={<Assignments studentName={localStorage.getItem("studentName")} />}/>
// // //                 <Route path='account' element={<Account/>} />
// // //                 <Route path='report' element={<Chatbot />} />
// // //                 {/* Protocol Routes inside Courses */}
// // //                 <Route path="courses/ongoing/:topicId/protocols/course-overview/:courseId" element={<CourseOverview />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/patient-registration/:courseId" element={<PatientRegistration />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/patient-preparation/:courseId" element={<PatientPreparation />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/consent/:courseId" element={<ConsentForm />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/patient-positioning/:courseId" element={<PatientPositioning />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/positioning/:courseId" element={<Positioning />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/image-acquisition/:courseId" element={<ImageAcquisition />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/post-counselling/:courseId" element={<PostCounselling />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/image-reporting/:courseId" element={<ImageReporting />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/image-analysis/:courseId" element={<ImageAnalysis />} />
// // //                 <Route path="courses/ongoing/:topicId/protocols/quiz/:courseId" element={<Quiz />} />
// // //               </Route>
              
// // //               {/* Protected Teacher Dashboard */}
// // //               <Route 
// // //                 path='/teacher-dashboard/*' 
// // //                 element={
// // //                   <ProtectedRoute>
// // //                     <TeacherDashboard />
// // //                   </ProtectedRoute>
// // //                 }
// // //               >
// // //                 <Route path='home' element={<TeacherHome />} />
// // //                 <Route path='case-library' element={<TeacherCaseLibrary />} />
// // //                 <Route path='report' element={<CaseReview />} />
// // //                 <Route path='account' element={<Account />} />
// // //               </Route>
              
// // //               {/* Fallback to access denied */}
// // //               <Route path="*" element={<AccessDenied />} />
// // //             </Routes>
// // //           </>
// // //         )}
// // //       </div>
// // //     </UserProvider>
// // //   );
// // // }

// // // export default App;
// // // console.log("Navbar:", Navbar);
// // // console.log("UserProvider:", UserProvider);
// // // console.log("Login:", Login);
// // // console.log("SignUp:", SignUp);
// // // console.log("LandingPage:", LandingPage);
// // // console.log("StudentDashboard:", StudentDashboard);
// // // console.log("TeacherDashboard:", TeacherDashboard);
// // // console.log("Assignments:", Assignments);
// // // console.log("TeacherHome:", TeacherHome);
// // // console.log("StudentHome:", StudentHome);
// // // console.log("TeacherCaseLibrary:", TeacherCaseLibrary);
// // // console.log("Chatbot:", Chatbot);
// // // console.log("ImageAnalysis:", ImageAnalysis);
// // // console.log("CaseReview:", CaseReview);
// // // console.log("PatientRegistration:", PatientRegistration);
// // // console.log("ConsentForm:", ConsentForm);
// // // console.log("PatientPreparation:", PatientPreparation);
// // // console.log("PatientPositioning:", PatientPositioning);
// // // console.log("ImageAcquisition:", ImageAcquisition);
// // // console.log("PostCounselling:", PostCounselling);
// // // console.log("ImageReporting:", ImageReporting);
// // // console.log("Account:", Account);
// // // console.log("Positioning:", Positioning);
// // // console.log("CourseOverview:", CourseOverview);
// // // console.log("Topic:", Topic);
// // // console.log("Quiz:", Quiz);
// // // console.log("Forum:", Forum);
// // // console.log("LogoLoader:", LogoLoader);
// // // console.log("AccessDenied:", AccessDenied);
// // // console.log("ProtectedRoute:", ProtectedRoute);
// // // console.log("Routes:", Routes);
// // // console.log("Route:", Route);
// // // console.log("useNavigate:", useNavigate);
// // // console.log("useState:", useState);
// // // console.log("useEffect:", useEffect);



// // import './App.css';
// // import Navbar from './Components/Navbar';
// // import { UserProvider } from "./UserContext";
// // import Login from './Components/Login';
// // import SignUp from './Components/Signup';
// // import { Route, Routes, useNavigate } from 'react-router-dom';
// // import LandingPage from './Pages/LandingPage';
// // import StudentDashboard from './Pages/StudentDashboard';
// // import TeacherDashboard from './Pages/TeacherDashboard';
// // import Assignments from './Components/Assignment';
// // import TeacherHome from './Components/TeacherHome';
// // import StudentHome from './Components/StudentHome';
// // import TeacherCaseLibrary from './Components/TeacherCaseLibrary';
// // import Chatbot from './Components/Chatbot';
// // import { useState, useEffect } from 'react';
// // import ImageAnalysis from './Pages/Protocols/ImageAnalysis';
// // import CaseReview from './Components/CaseReview';
// // import PatientRegistration from './Pages/Protocols/PatientRegistration';
// // import ConsentForm from './Pages/Protocols/ConsentForm';
// // import PatientPreparation from './Pages/Protocols/PatientPreparation';
// // import PatientPositioning from './Pages/Protocols/PatientPositioning';
// // import ImageAcquisition from './Pages/Protocols/ImageAcquisition';
// // import PostCounselling from './Pages/Protocols/PostCounselling';
// // import ImageReporting from './Pages/Protocols/ImageReporting';
// // import Account from './Components/Account';
// // import Positioning from './Pages/Protocols/Positioning';
// // import CourseOverview from './Pages/Protocols/CourseOverview';
// // import Topic from './Components/Topic';
// // import Quiz from './Pages/Protocols/Quiz';
// // import Forum from './Components/Forum';
// // import LogoLoader from './Components/LogoLoader';
// // // import AccessDenied from './Components/AccessDenied';
// // import ProtectedRoute from './Components/ProtectedRoute';





// // function App() {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [loading, setLoading] = useState(true);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Loading time for the LogoLoader
// //     const timer = setTimeout(() => {
// //       setLoading(false);
// //     }, 3000);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   useEffect(() => {
// //     // Check for existing session
// //     // Using sessionStorage instead of localStorage
// //     // sessionStorage persists during page refresh but is cleared when tab is closed
// //     const user = sessionStorage.getItem('user');
// //     if (user) {
// //       setIsLoggedIn(true);
// //       console.log("User is logged in:", user);
// //     } else {
// //       setIsLoggedIn(false);
// //       console.log("User is not logged in");
// //     }
// //   }, []);

// //   useEffect(() => {
// //     const handleUnload = () => {
// //       localStorage.removeItem("user");
// //       setIsLoggedIn(false);
// //       console.log("User logged out on tab close");
// //     };
  
// //     window.addEventListener("beforeunload", handleUnload);
  
// //     return () => {
// //       window.removeEventListener("beforeunload", handleUnload);
// //     };
// //   }, []);
  
  



// //   const handleLogin = () => {
// //     // Store user data as a valid JSON object
// //     sessionStorage.setItem('user', JSON.stringify({
// //       isLoggedIn: true,
// //       name: "User",
// //       role: "student"
// //     }));
// //     setIsLoggedIn(true);
// //     console.log("User logged in successfully");
// //     navigate("/student-dashboard/home");
// //   };

// //   const handleLogout = () => {
// //     // Clear from sessionStorage
// //     sessionStorage.removeItem('user');
// //     setIsLoggedIn(false);
// //     console.log("User logged out");
// //     navigate("/login");
// //   };

// //   return (
// //     <UserProvider>
// //       <div>
// //         {loading ? (
// //           <LogoLoader />
// //         ) : (
// //           <>
// //             <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
// //             <Routes>
// //               <Route path='/login' element={<Login onLogin={handleLogin} />} />
// //               <Route path='/signup' element={<SignUp />} />
// //               <Route path='/' element={<LandingPage />} />
// //               {/* <Route path='/access-denied' element={<AccessDenied />} /> */}
              
// //               {/* Protected Student Dashboard */}
// //               <Route 
// //                 path='/student-dashboard/*' 
// //                 element={
// //                   // <ProtectedRoute>
// //                     <StudentDashboard />
// //                   // </ProtectedRoute>
// //                 } 
// //               >
// //                 <Route path='home' element={<StudentHome />} />
// //                 <Route path='topic' element={<Topic/>} />
// //                 <Route path='forums' element={<Forum/>} />
// //                 <Route path="courses/ongoing/:topicId" element={<Assignments studentName={sessionStorage.getItem("studentName")} />}/>
// //                 <Route path='account' element={<Account/>} />
// //                 <Route path='report' element={<Chatbot />} />
// //                 {/* Protocol Routes inside Courses */}
// //                 <Route path="courses/ongoing/:topicId/protocols/course-overview/:courseId" element={<CourseOverview />} />
// //                 <Route path="courses/ongoing/:topicId/protocols/patient-registration/:courseId" element={<PatientRegistration />} />
// //                 <Route path="courses/ongoing/:topicId/protocols/patient-preparation/:courseId" element={<PatientPreparation />} />
// //                 <Route path="courses/ongoing/:topicId/protocols/consent/:courseId" element={<ConsentForm />} />
// //                 <Route path="courses/ongoing/:topicId/protocols/patient-positioning/:courseId" element={<PatientPositioning />} />
// //                 <Route path="courses/ongoing/:topicId/protocols/positioning/:courseId" element={<Positioning />} />
// //                 <Route path="courses/ongoing/:topicId/protocols/image-acquisition/:courseId" element={<ImageAcquisition />} />
// //                 <Route path="courses/ongoing/:topicId/protocols/post-counselling/:courseId" element={<PostCounselling />} />
// //                 <Route path="courses/ongoing/:topicId/protocols/image-reporting/:courseId" element={<ImageReporting />} />
// //                 <Route path="courses/ongoing/:topicId/protocols/image-analysis/:courseId" element={<ImageAnalysis />} />
// //                 <Route path="courses/ongoing/:topicId/protocols/quiz/:courseId" element={<Quiz />} />
// //               </Route>
              
// //               {/* Protected Teacher Dashboard */}
// //               <Route 
// //                 path='/teacher-dashboard/*' 
// //                 element={
// //                   <ProtectedRoute>
// //                     <TeacherDashboard />
// //                   </ProtectedRoute>
// //                 }
// //               >
// //                 <Route path='home' element={<TeacherHome />} />
// //                 <Route path='case-library' element={<TeacherCaseLibrary />} />
// //                 <Route path='report' element={<CaseReview />} />
// //                 <Route path='account' element={<Account />} />
// //               </Route>
              
// //               {/* Fallback to access denied */}
// //               {/* <Route path="*" element={<AccessDenied />} /> */}
// //             </Routes>
// //           </>
// //         )}
// //       </div>
// //     </UserProvider>
// //   );
// // }

// // export default App;





// import './App.css';
// import Navbar from './Components/Navbar';
// import { UserProvider } from "./UserContext";
// import Login from './Components/Login';
// import SignUp from './Components/Signup';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import LandingPage from './Pages/LandingPage';
// import StudentDashboard from './Pages/StudentDashboard';
// import TeacherDashboard from './Pages/TeacherDashboard';
// import Assignments from './Components/Assignment';
// import TeacherHome from './Components/TeacherHome';
// import StudentHome from './Components/StudentHome';
// import TeacherCaseLibrary from './Components/TeacherCaseLibrary';
// import Chatbot from './Components/Chatbot';
// import { useState, useEffect } from 'react';
// import ImageAnalysis from './Pages/Protocols/ImageAnalysis';
// import CaseReview from './Components/CaseReview';
// import PatientRegistration from './Pages/Protocols/PatientRegistration';
// import ConsentForm from './Pages/Protocols/ConsentForm';
// import PatientPreparation from './Pages/Protocols/PatientPreparation';
// import PatientPositioning from './Pages/Protocols/PatientPositioning';
// import ImageAcquisition from './Pages/Protocols/ImageAcquisition';
// import PostCounselling from './Pages/Protocols/PostCounselling';
// import ImageReporting from './Pages/Protocols/ImageReporting';
// import Account from './Components/Account';
// import Positioning from './Pages/Protocols/Positioning';
// import CourseOverview from './Pages/Protocols/CourseOverview';
// import Topic from './Components/Topic';
// import Quiz from './Pages/Protocols/Quiz';
// import Forum from './Components/Forum';
// import LogoLoader from './Components/LogoLoader';
// import ProtectedRoute from './Components/ProtectedRoute';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // ✅ Show the preloader for 3 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   // ✅ Check if user is logged in (using localStorage for persistence)
//   useEffect(() => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       setIsLoggedIn(true);
//       console.log("User is logged in:", JSON.parse(user));
//     } else {
//       setIsLoggedIn(false);
//       console.log("User is not logged in");
//     }

//     // ✅ Logout user after 10 minutes of inactivity
//     let logoutTimer = setTimeout(() => {
//       localStorage.removeItem('user');
//       setIsLoggedIn(false);
//       console.log("User logged out due to inactivity");
//       navigate("/login");
//     }, 10 * 60 * 1000); // 10 minutes

//     const resetTimeout = () => {
//       clearTimeout(logoutTimer);
//       logoutTimer = setTimeout(() => {
//         localStorage.removeItem('user');
//         setIsLoggedIn(false);
//         console.log("User logged out due to inactivity");
//         navigate("/login");
//       }, 10 * 60 * 1000);
//     };

//     window.addEventListener("mousemove", resetTimeout);
//     window.addEventListener("keydown", resetTimeout);

//     return () => {
//       clearTimeout(logoutTimer);
//       window.removeEventListener("mousemove", resetTimeout);
//       window.removeEventListener("keydown", resetTimeout);
//     };
//   }, [navigate]);

//   // ✅ Logout user when the tab is closed
//   useEffect(() => {
//     const handleUnload = () => {
//       localStorage.removeItem("user");
//       console.log("User logged out on tab close");
//     };

//     window.addEventListener("beforeunload", handleUnload);
//     return () => {
//       window.removeEventListener("beforeunload", handleUnload);
//     };
//   }, []);

//   // ✅ Handle login
//   const handleLogin = () => {
//     localStorage.setItem('user', JSON.stringify({
//       isLoggedIn: true,
//       name: "User",
//       role: "student"
//     }));
//     setIsLoggedIn(true);
//     console.log("User logged in successfully");
//     navigate("/student-dashboard/home");
//   };

//   // ✅ Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//     console.log("User logged out");
//     navigate("/login");
//   };

//   return (
//     <UserProvider>
//       <div>
//         {loading ? (
//           <LogoLoader />
//         ) : (
//           <>
//             <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
//             <Routes>
//               <Route path='/login' element={<Login onLogin={handleLogin} />} />
//               <Route path='/signup' element={<SignUp />} />
//               <Route path='/' element={<LandingPage />} />
              
//               {/* ✅ Protected Student Dashboard */}
//               <Route 
//                 path='/student-dashboard/*' 
//                 element={
//                   <ProtectedRoute>
//                     <StudentDashboard />
//                   </ProtectedRoute>
//                 } 
//               >
//                 <Route path='home' element={<StudentHome />} />
//                 <Route path='topic' element={<Topic />} />
//                 <Route path='forums' element={<Forum />} />
//                 <Route path="courses/ongoing/:topicId" element={<Assignments studentName={JSON.parse(localStorage.getItem("user"))?.name} />} />
//                 <Route path='account' element={<Account />} />
//                 <Route path='report' element={<Chatbot />} />
//                 <Route path="courses/ongoing/:topicId/protocols/course-overview/:courseId" element={<CourseOverview />} />
//                 <Route path="courses/ongoing/:topicId/protocols/patient-registration/:courseId" element={<PatientRegistration />} />
//                 <Route path="courses/ongoing/:topicId/protocols/patient-preparation/:courseId" element={<PatientPreparation />} />
//                 <Route path="courses/ongoing/:topicId/protocols/consent/:courseId" element={<ConsentForm />} />
//                 <Route path="courses/ongoing/:topicId/protocols/patient-positioning/:courseId" element={<PatientPositioning />} />
//                 <Route path="courses/ongoing/:topicId/protocols/positioning/:courseId" element={<Positioning />} />
//                 <Route path="courses/ongoing/:topicId/protocols/image-acquisition/:courseId" element={<ImageAcquisition />} />
//                 <Route path="courses/ongoing/:topicId/protocols/post-counselling/:courseId" element={<PostCounselling />} />
//                 <Route path="courses/ongoing/:topicId/protocols/image-reporting/:courseId" element={<ImageReporting />} />
//                 <Route path="courses/ongoing/:topicId/protocols/image-analysis/:courseId" element={<ImageAnalysis />} />
//                 <Route path="courses/ongoing/:topicId/protocols/quiz/:courseId" element={<Quiz />} />
//               </Route>
              
//               {/* ✅ Protected Teacher Dashboard */}
//               <Route 
//                 path='/teacher-dashboard/*' 
//                 element={
//                   <ProtectedRoute>
//                     <TeacherDashboard />
//                   </ProtectedRoute>
//                 }
//               >
//                 <Route path='home' element={<TeacherHome />} />
//                 <Route path='case-library' element={<TeacherCaseLibrary />} />
//                 <Route path='report' element={<CaseReview />} />
//                 <Route path='account' element={<Account />} />
//               </Route>
//             </Routes>
//           </>
//         )}
//       </div>
//     </UserProvider>
//   );
// }

// export default App;


import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import StudentDashboard from './Pages/StudentDashboard';
import TeacherDashboard from './Pages/TeacherDashboard';
import Assignments from './Components/Assignment';
import TeacherHome from './Components/TeacherHome';
import StudentHome from './Components/StudentHome';
// import TeacherAssignments from './Components/TeacherAssignments';
import Chatbot from './Components/Chatbot';
import { useState, useEffect } from 'react';
import ImageAnalysis from './Pages/Protocols/ImageAnalysis';
import PublishNewAssignment from './Components/PublishNewAssignment ';
import PublishExistingModule from './Components/PublishExistingModule';
// import CreateNewAssignment from './Components/CreateNewAssignment ';
import TeacherReport from './Components/TeacherReport';
// import PublishNewAssignment from './Components/PublishNewAssignment';
// import PublishExistingModule from './Components/PublishExistingModule';
// import CreateNewAssignment from './Components/CreateNewAssignment';
// import TeacherReport from './Components/TeacherReport';
// import CaseReview from './Components/CaseReview';
import PatientRegistration from './Pages/Protocols/PatientRegistration';
import ConsentForm from './Pages/Protocols/ConsentForm';
import PatientPreparation from './Pages/Protocols/PatientPreparation';
import PatientPositioning from './Pages/Protocols/PatientPositioning';
import ImageAcquisition from './Pages/Protocols/ImageAcquisition';
import PostCounselling from './Pages/Protocols/PostCounselling';
import ImageReporting from './Pages/Protocols/ImageReporting';
import Account from './Components/Account';
import Positioning from './Pages/Protocols/Positioning';
import CourseOverview from './Pages/Protocols/CourseOverview';
import Topic from './Components/Topic';
import Quiz from './Pages/Protocols/Quiz';
import Forum from './Components/Forum';
// import LogoLoader from './Components/LogoLoader';
// import AccessDenied from './Components/AccessDenied';
import ProtectedRoute from './Components/ProtectedRoute';
import AllReports from './Components/Allreport';
import QuizResult from './Pages/Protocols/QuizResult';
import PendingReport from './Components/PendingReport';
// import ReportGeneration from './Components/ReportGeneration';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
      console.log("User is logged in:", user);
    } else {
      setIsLoggedIn(false);
      console.log("User is not logged in");
    }
  }, []);

  const handleLogin = () => {
    // Store user data as a valid JSON object
    sessionStorage.setItem('user', JSON.stringify({
      isLoggedIn: true,
      name: "User",
      role: "student"
    }));
    setIsLoggedIn(true);
    console.log("User logged in successfully");
    navigate("/student-dashboard/home");
  };

  const handleLogout = () => {
    // Clear from sessionStorage
    sessionStorage.removeItem('user');
    setIsLoggedIn(false);
    console.log("User logged out");
    navigate("/login");
  };

  return (
    <div>
        <>
          <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          <Routes>
            <Route path='/login' element={<Login onLogin={handleLogin} />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<LandingPage />} />
            {/* <Route path='/access-denied' element={<AccessDenied />} /> */}
            
            {/* Protected Student Dashboard */}
            <Route 
              path='/student-dashboard/*' 
              element={
                <ProtectedRoute>
                  <StudentDashboard />
                </ProtectedRoute>
              } 
            >
              <Route path='home' element={<StudentHome />} />
              <Route path='topic' element={<Topic/>} />
              <Route path='forums' element={<Forum/>} />
              <Route path="courses/ongoing/" element={<AllReports />}/>
              <Route path="courses/ongoing/:topicId" element={<Assignments studentName={sessionStorage.getItem("studentName")} />}/>
              <Route path='account' element={<Account/>} />
              <Route path='report' element={<Chatbot />} />
              {/* Protocol Routes inside Courses */}
              <Route path="courses/ongoing/:topicId/protocols/course-overview/:courseId" element={<CourseOverview />} />
              <Route path="courses/ongoing/:topicId/protocols/patient-registration/:courseId" element={<PatientRegistration />} />
              <Route path="courses/ongoing/:topicId/protocols/patient-preparation/:courseId" element={<PatientPreparation />} />
              <Route path="courses/ongoing/:topicId/protocols/consent/:courseId" element={<ConsentForm />} />
              <Route path="courses/ongoing/:topicId/protocols/patient-positioning/:courseId" element={<PatientPositioning />} />
              <Route path="courses/ongoing/:topicId/protocols/positioning/:courseId" element={<Positioning />} />
              <Route path="courses/ongoing/:topicId/protocols/image-acquisition/:courseId" element={<ImageAcquisition />} />
              <Route path="courses/ongoing/:topicId/protocols/post-counselling/:courseId" element={<PostCounselling />} />
              <Route path="courses/ongoing/:topicId/protocols/image-reporting/:courseId" element={<ImageReporting />} />
              <Route path="courses/ongoing/:topicId/protocols/image-analysis/:courseId" element={<ImageAnalysis />} />
              <Route path="courses/ongoing/:topicId/protocols/quiz/:courseId" element={<Quiz />} />
              <Route path="courses/ongoing/:topicId/protocols/quiz-result/:courseId" element={<QuizResult />} />
            </Route>
            
            {/* Protected Teacher Dashboard */}
            <Route 
                path='/teacher-dashboard/*' 
                element={
                  <ProtectedRoute>
                    <TeacherDashboard />
                  </ProtectedRoute>
                }
              >
                <Route path='home' element={<TeacherHome />} />
                <Route path='teacher-new-modules' element={<PublishNewAssignment />} />
                <Route path='teacher-existing-modules' element={<PublishExistingModule />} />
                <Route path="teacher-pending-report" element={<PendingReport />} />
                <Route path="teacher-report" element={<TeacherReport />} />
                <Route path='account' element={<Account />} />
              </Route>
            
            {/* Fallback to access denied */}
            {/* <Route path="*" element={<AccessDenied />} /> */}
          </Routes>
        </>
    </div>
  );
}

export default App;