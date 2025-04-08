// // import React, { useState, useEffect } from 'react';
// // import { Link, Outlet, useLocation } from 'react-router-dom';
// // import { FaTachometerAlt, FaUserCog, FaChalkboardTeacher } from 'react-icons/fa';
// // import { FileTextOutlined, LayoutOutlined } from '@ant-design/icons';

// // const TeacherDashboard = () => {
// //     const location = useLocation();
// //     const [teacherName, setTeacherName] = useState("Teacher");

// //     useEffect(() => {
// //         // Get teacher name from localStorage
// //         const user = localStorage.getItem('user');
// //         if (user) {
// //             try {
// //                 const userData = JSON.parse(user);
// //                 if (userData.name) {
// //                     setTeacherName(userData.name);
// //                 } else if (userData.username) {
// //                     setTeacherName(userData.username);
// //                 }
// //             } catch (error) {
// //                 console.error('Error parsing user data:', error);
// //             }
// //         }
// //     }, []);

// //     const isActive = (path) => location.pathname.startsWith(path);

// //     return (
// //         <div className="flex min-h-screen bg-gray-100">
            
// //             {/* Sidebar */}
// //             <aside className="w-64 bg-gradient-to-b from-teal-600 to-purple-700 text-white flex flex-col shadow-lg">
                
// //                 {/* Enhanced Profile Section */}
// //                 <div className="p-6 text-center border-b border-teal-700 bg-gradient-to-r from-teal-800 to-purple-800">
// //                     <div className="relative inline-block">
// //                         <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 flex items-center justify-center mx-auto mb-3 shadow-lg border-2 border-white">
// //                             <FaChalkboardTeacher className="text-3xl text-white" />
// //                         </div>
// //                         <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
// //                     </div>
// //                     <h2 className="text-xl font-bold text-white mb-1">Welcome!</h2>
// //                     <p className="text-lg font-semibold text-teal-200 mb-1">{teacherName}</p>
// //                     <div className="bg-teal-700/30 rounded-full px-3 py-1 text-xs text-teal-100 inline-block mt-1">
// //                         Teacher
// //                     </div>
// //                 </div>

// //                 {/* Sidebar Navigation */}
// //                 <nav className="mt-4 px-4 space-y-1">
// //                     <SidebarLink to="/teacher-dashboard/home" icon={FaTachometerAlt} label="Dashboard" isActive={isActive} />
// //                     <SidebarLink to="/teacher-dashboard/case-library" icon={LayoutOutlined} label="Case Library" isActive={isActive} />
// //                     <SidebarLink to="/teacher-dashboard/report" icon={FileTextOutlined} label="Report" isActive={isActive} />
// //                     <SidebarLink to="/teacher-dashboard/account" icon={FaUserCog} label="Account" isActive={isActive} />
// //                 </nav>
// //             </aside>

// //             {/* Main Content */}
// //             <main className="flex-grow bg-white shadow-lg">
                
// //                 {/* Top Navbar
// //                 <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4 flex justify-between items-center shadow-md">
// //                     <h2 className="text-lg font-semibold">User Dashboard</h2>
// //                     <div className="flex space-x-4">
// //                         <FaBell className="cursor-pointer hover:text-gray-200" />
// //                         <FaCog className="cursor-pointer hover:text-gray-200" />
// //                     </div>
// //                 </header> */}

// //                 {/* Page Content */}
// //                 <div className="p-6">
// //                     <Outlet />
// //                 </div>
// //             </main>
// //         </div>
// //     );
// // };

// // // Sidebar Link Component
// // const SidebarLink = ({ to, icon: Icon, label, isActive }) => (
// //     <Link
// //         to={to}
// //         className={`flex items-center space-x-2 px-4 py-3 text-white hover:bg-purple-700 rounded-lg transition ${isActive(to) ? "bg-purple-600" : ""}`}
// //     >
// //         <Icon className="mr-3" />
// //         <span>{label}</span>
// //     </Link>
// // );

// // export default TeacherDashboard;


// import React, { useState, useEffect } from 'react';
// import { Link, Outlet, useLocation} from 'react-router-dom';
// import { FaTachometerAlt, FaUserCog, FaChalkboardTeacher, FaPlus, FaFileAlt } from 'react-icons/fa';
// import { FileTextOutlined } from '@ant-design/icons';
// import { useUser } from '../UserContext'; // Import the UserContext hook`


// const TeacherDashboard = () => {
//     const location = useLocation();
//     // const navigate = useNavigate();
//     const { user } = useUser(); // Get user from context
//     const [teacherName, setTeacherName] = useState("Teacher");
//     // const [isSidebarOpen, setIsSidebarOpen] = useState(true);



//     useEffect(() => {
//         // Get teacher name from UserContext
//         if (user) {
//             if (user.name) {
//                 setTeacherName(user.name);
//             } else if (user.username) {
//                 setTeacherName(user.username);
//             }
//         }
//     }, [user]); // Depend on user from context
    

//     const isActive = (path) => {
//         const currentPath = location.pathname;
        
//         // For Assignments section - keep selected for all assignment related pages
//         if (path === '/teacher-dashboard/teacher-existing-modules') {
//             return currentPath.includes('/teacher-dashboard/teacher-assignments') || 
//                    currentPath.includes('/teacher-dashboard/teacher-existing-modules') ||
//                    currentPath.includes('/teacher-dashboard/teacher-new-modules') ||
//                    currentPath.includes('/teacher-dashboard/teacher-publish-new-assignment') ||
//                    currentPath.includes('/teacher-dashboard/publish-existing-module');
//         }
        
//         // For Dashboard and Account - exact path matching
//         if (path === '/teacher-dashboard/home' || path === '/teacher-dashboard/account') {
//             return currentPath === path;
//         }
        
//         // For all other paths
//         return currentPath.startsWith(path);
//     };

//     return (
//         <div className="flex min-h-screen bg-gray-100">
            
//             {/* Sidebar */}
//             <aside className="w-64 bg-gradient-to-b from-teal-600 to-purple-700 text-white flex flex-col shadow-lg">
                
//                 {/* Enhanced Profile Section */}
//                 <div className="p-6 text-center border-b border-teal-700 bg-gradient-to-r from-teal-800 to-purple-800">
//                     <div className="relative inline-block">
//                         <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 flex items-center justify-center mx-auto mb-3 shadow-lg border-2 border-white">
//                             <FaChalkboardTeacher className="text-3xl text-white" />
//                         </div>
//                         <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
//                     </div>
//                     <h2 className="text-xl font-bold text-white mb-1">Welcome!</h2>
//                     <p className="text-lg font-semibold text-teal-200 mb-1">{teacherName}</p>
//                     <div className="bg-teal-700/30 rounded-full px-3 py-1 text-xs text-teal-100 inline-block mt-1">
//                         Teacher
//                     </div>
//                 </div>

//                 {/* Sidebar Navigation */}
//                 <nav className="mt-4 px-4 space-y-1">

//                     {/* Dashboard section  */}
//                     <SidebarLink to="/teacher-dashboard/home" icon={FaTachometerAlt} label="Dashboard" isActive={isActive} />
                   
//                     {/* Assignments section  */}
//                     <SidebarLink to="/teacher-dashboard/teacher-existing-modules" icon={FileTextOutlined} label="Assignments" isActive={isActive} />

//                     {/* create new  */}
//                     <SidebarLink to="/teacher-dashboard/teacher-create-new-assignment" icon={FaPlus} label="Create New" isActive={isActive} />

//                     {/* Teacher Report */}
//                     <SidebarLink to="/teacher-dashboard/teacher-report" icon={FaFileAlt} label="Report" isActive={isActive} />
                    
//                     {/* Account section  */}
//                     <SidebarLink to="/teacher-dashboard/account" icon={FaUserCog} label="Account" isActive={isActive} />

//                 </nav>
//             </aside>

//             {/* Main Content */}
//             <main className="flex-grow bg-white shadow-lg">
                
//                 <div className="p-6">
//                     <Outlet />
//                 </div>
//             </main>
//         </div>
//     );
// };

// // Sidebar Link Component
// const SidebarLink = ({ to, icon: Icon, label, isActive }) => (
//     <Link
//         to={to}
//         className={`flex items-center space-x-2 px-4 py-3 text-white hover:bg-purple-700 rounded-lg transition ${isActive(to) ? "bg-purple-600" : ""}`}
//     >
//         <Icon className="mr-3" />
//         <span>{label}</span>
//     </Link>
// );

// export default TeacherDashboard;

import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation} from 'react-router-dom';
import { FaTachometerAlt, FaUserCog, FaChalkboardTeacher, FaFileAlt } from 'react-icons/fa';
import { FileTextOutlined } from '@ant-design/icons';
import { useUser } from '../UserContext'; // Import the UserContext hook`


const TeacherDashboard = () => {
    const location = useLocation();
    // const navigate = useNavigate();
    const { user } = useUser(); // Get user from context
    const [teacherName, setTeacherName] = useState("Teacher");
    // const [isSidebarOpen, setIsSidebarOpen] = useState(true);



    useEffect(() => {
        // Get teacher name from UserContext
        if (user) {
            if (user.name) {
                setTeacherName(user.name);
            } else if (user.username) {
                setTeacherName(user.username);
            }
        }
    }, [user]); // Depend on user from context
    

    const isActive = (path) => {
        const currentPath = location.pathname;
        
        // For Assignments section - keep selected for all assignment related pages
        if (path === '/teacher-dashboard/teacher-existing-modules') {
            return currentPath.includes('/teacher-dashboard/teacher-assignments') || 
                   currentPath.includes('/teacher-dashboard/teacher-existing-modules') ||
                   currentPath.includes('/teacher-dashboard/teacher-new-modules') ||
                   currentPath.includes('/teacher-dashboard/teacher-publish-new-assignment') ||
                   currentPath.includes('/teacher-dashboard/publish-existing-module');
        }
        
        // For Dashboard and Account - exact path matching
        if (path === '/teacher-dashboard/home' || path === '/teacher-dashboard/account') {
            return currentPath === path;
        }
        
        // For all other paths
        return currentPath.startsWith(path);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            
            {/* Sidebar */}
            <aside className="w-64 bg-gradient-to-b from-teal-600 to-purple-700 text-white flex flex-col shadow-lg">
                
                {/* Enhanced Profile Section */}
                <div className="p-6 text-center border-b border-teal-700 bg-gradient-to-r from-teal-800 to-purple-800">
                    <div className="relative inline-block">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 flex items-center justify-center mx-auto mb-3 shadow-lg border-2 border-white">
                            <FaChalkboardTeacher className="text-3xl text-white" />
                        </div>
                        <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-1">Welcome!</h2>
                    <p className="text-lg font-semibold text-teal-200 mb-1">{teacherName}</p>
                    <div className="bg-teal-700/30 rounded-full px-3 py-1 text-xs text-teal-100 inline-block mt-1">
                        Teacher
                    </div>
                </div>

                {/* Sidebar Navigation */}
                <nav className="mt-4 px-4 space-y-1">

                    {/* Dashboard section  */}
                    <SidebarLink to="/teacher-dashboard/home" icon={FaTachometerAlt} label="Dashboard" isActive={isActive} />
                   
                    {/* Assignments section  */}
                    <SidebarLink to="/teacher-dashboard/teacher-existing-modules" icon={FileTextOutlined} label="Assignments" isActive={isActive} />

                    {/* create new  */}
                    {/* <SidebarLink to="/teacher-dashboard/teacher-create-new-assignment" icon={FaPlus} label="Create New" isActive={isActive} /> */}

                    {/* Teacher Report */}
                    <SidebarLink to="/teacher-dashboard/teacher-report" icon={FaFileAlt} label="Search Report" isActive={isActive} />

                    {/* Pending Report */}
                    <SidebarLink to="/teacher-dashboard/teacher-pending-report" icon={FaFileAlt} label="Pending Report" isActive={isActive} />
                    
                    {/* Account section  */}
                    <SidebarLink to="/teacher-dashboard/account" icon={FaUserCog} label="Account" isActive={isActive} />

                    
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-grow bg-white shadow-lg">
                
                <div className="p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

// Sidebar Link Component
const SidebarLink = ({ to, icon: Icon, label, isActive }) => (
    <Link
        to={to}
        className={`flex items-center space-x-2 px-4 py-3 text-white hover:bg-purple-700 rounded-lg transition ${isActive(to) ? "bg-purple-600" : ""}`}
    >
        <Icon className="mr-3" />
        <span>{label}</span>
    </Link>
);

export default TeacherDashboard;