// // import React, { useEffect, useState } from 'react';
// // import UserDetails from './UserDetails';
// // import { FaUserCircle } from "react-icons/fa";

// // const TeacherHome = () => {
// //     const [user, setUser] = useState(null);

// //     useEffect(() => {
// //         const storedUser = JSON.parse(localStorage.getItem('user'));
// //         setUser(storedUser);
// //     }, []);

// //     return (
// //         <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
// //             {user ? (
// //                 <>
// //                     <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl mb-8">
// //                         <div className="flex flex-col items-center mb-8">
// //                             <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
// //                                 <FaUserCircle className="text-7xl drop-shadow-md" />
// //                             </div>
// //                             <div className="bg-gradient-to-r  from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg shadow-md">
// //                                 <h1 className="text-3xl font-bold">
// //                                     Welcome, {user.name}!
// //                                 </h1>
// //                                 <p className="text-lg text-center mt-1">
// //                                     {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
// //                                 </p>
// //                             </div>
// //                         </div>
                        
// //                         <UserDetails user={user} />
// //                     </div>

// //                     {/* <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
// //                         <RecentActivity />
// //                     </div> */}
// //                 </>
// //             ) : (
// //                 <div className="text-center bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
// //                     <h1 className="text-4xl font-bold text-red-500 mb-4">Access Denied</h1>
// //                     <p className="text-gray-700">No user information available. Please log in.</p>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default TeacherHome;


// import React, { useEffect, useState } from 'react';
// import UserDetails from './UserDetails';
// import { FaUserCircle } from "react-icons/fa";

// const TeacherHome = () => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         try {
//             const storedUser = JSON.parse(sessionStorage.getItem("user"));
//             if (storedUser && storedUser.name) {
//                 setUser(storedUser);
//             }
//         } catch (error) {
//             console.error("Error parsing user data:", error);
//         }
//     }, []);

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
//             {user ? (
//                 <>
//                     <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl mb-8">
//                         <div className="flex flex-col items-center mb-8">
//                             <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
//                                 <FaUserCircle className="text-7xl drop-shadow-md" />
//                             </div>
//                             <div className="bg-gradient-to-r  from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg shadow-md">
//                                 <h1 className="text-3xl font-bold">
//                                     Welcome, {user.name}
//                                 </h1>
//                                 <p className="text-lg text-center mt-1">
//                                     {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
//                                 </p>
//                             </div>
//                         </div>
                        
//                         <UserDetails user={user} />
//                     </div>

//                     {/* <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
//                         <RecentActivity />
//                     </div> */}
//                 </>
//             ) : (
//                 <div className="text-center bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//                     <h1 className="text-4xl font-bold text-red-500 mb-4">Access Denied</h1>
//                     <p className="text-gray-700">No user information available. Please log in.</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TeacherHome;
import React from "react";
import {
  FaUserCircle,
  FaClipboardList,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
import { useUser } from '../UserContext';

const TeacherHome = () => {
  const { user } = useUser();
  const dashboardStats = {
    pendingApproval: 5,
    approvedAssignments: 10,
    referredBack: 2,
  };

  return (
    <div className="flex flex-col mt-32">
      {/* Main Card */}
      <div className="w-[90%] mx-auto bg-white p-6 shadow-2xl backdrop-blur-lg border border-gray-300 rounded-xl">
        
        {user && user.role === "teacher" ? (
          <div className="text-center">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
                <FaUserCircle className="text-7xl drop-shadow-md" />
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold">
                  Welcome, {user.name || user.username}
                </h1>
                <p className="text-lg mt-1">
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </p>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="stat-card bg-purple-50 border border-purple-300 text-purple-900 p-6 rounded-lg shadow-lg">
                <FaClipboardList className="text-4xl mx-auto text-purple-600 mb-2" />
                <h3 className="text-lg font-semibold">Pending Approval</h3>
                <p className="text-3xl font-bold">{dashboardStats.pendingApproval}</p>
              </div>
  
              <div className="stat-card bg-green-50 border border-green-300 text-green-900 p-6 rounded-lg shadow-lg">
                <FaExclamationTriangle className="text-4xl mx-auto text-green-600 mb-2" />
                <h3 className="text-lg font-semibold">Approved Assignments</h3>
                <p className="text-3xl font-bold">{dashboardStats.approvedAssignments}</p>
              </div>
  
              <div className="stat-card bg-orange-50 border border-orange-300 text-orange-900 p-6 rounded-lg shadow-lg">
                <FaCheckCircle className="text-4xl mx-auto text-orange-600 mb-2" />
                <h3 className="text-lg font-semibold">Referred Back</h3>
                <p className="text-3xl font-bold">{dashboardStats.referredBack}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500">Access Denied. Please log in as a teacher.</p>
        )}
      </div>
    </div>
  );
};

export default TeacherHome;