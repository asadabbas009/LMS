// import React, { useState, useEffect } from "react";
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock, FaCheck } from "react-icons/fa";

// const Account = () => {
//   const [userData, setUserData] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     address: "",
//     password: "",
//     confirmPassword: "",
//     profilePicture: ""
//   });
  
  

//   // Load user data from localStorage if available
//   useEffect(() => {
//     try {
//       const storedUser = JSON.parse(localStorage.getItem("user"));
//       if (storedUser) {
//         setUserData(prevData => ({
//           ...prevData,
//           username: storedUser.name || "",
//           email: storedUser.email || "",
//           phone: storedUser.phone || "",
//           address: storedUser.address || ""
//         }));
//       }
//     } catch (error) {
//       console.error("Failed to parse user data:", error);
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };


//   const handleSubmit = () => {
//     console.log("Account details submitted", userData);
//     // Show success message
//     alert("Account details updated successfully!");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 py-10">
//       <div className="w-full max-w-4xl mx-auto">
//         {/* Header Section */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-lg shadow-lg">
//           <h1 className="text-3xl font-bold text-center">Account Settings</h1>
//           <p className="text-center mt-2 text-blue-100">Manage your personal information and account preferences</p>
//         </div>
        
//         {/* Main Content */}
//         <div className="bg-white p-8 rounded-b-lg shadow-lg border border-gray-200">
          
          
//           {/* Form Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="flex flex-col">
//               <label className="text-gray-700 font-medium mb-1 flex items-center">
//                 <FaUser className="mr-2 text-blue-600" /> Username
//               </label>
//               <input 
//                 className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
//                 name="username" 
//                 value={userData.username}
//                 placeholder="Enter your username" 
//                 onChange={handleChange} 
//               />
//             </div>
            
//             <div className="flex flex-col">
//               <label className="text-gray-700 font-medium mb-1 flex items-center">
//                 <FaEnvelope className="mr-2 text-blue-600" /> Email
//               </label>
//               <input 
//                 className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
//                 name="email" 
//                 type="email" 
//                 value={userData.email}
//                 placeholder="Enter your email" 
//                 onChange={handleChange} 
//               />
//             </div>
            
//             <div className="flex flex-col">
//               <label className="text-gray-700 font-medium mb-1 flex items-center">
//                 <FaPhone className="mr-2 text-blue-600" /> Phone Number
//               </label>
//               <input 
//                 className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
//                 name="phone" 
//                 type="tel" 
//                 value={userData.phone}
//                 placeholder="Enter your phone number" 
//                 onChange={handleChange} 
//               />
//             </div>
            
//             <div className="flex flex-col">
//               <label className="text-gray-700 font-medium mb-1 flex items-center">
//                 <FaMapMarkerAlt className="mr-2 text-blue-600" /> Address
//               </label>
//               <input 
//                 className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
//                 name="address" 
//                 value={userData.address}
//                 placeholder="Enter your address" 
//                 onChange={handleChange} 
//               />
//             </div>
            
//             <div className="flex flex-col">
//               <label className="text-gray-700 font-medium mb-1 flex items-center">
//                 <FaLock className="mr-2 text-blue-600" /> New Password
//               </label>
//               <input 
//                 className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
//                 name="password" 
//                 type="password" 
//                 placeholder="Enter new password" 
//                 onChange={handleChange} 
//               />
//             </div>
            
//             <div className="flex flex-col">
//               <label className="text-gray-700 font-medium mb-1 flex items-center">
//                 <FaCheck className="mr-2 text-blue-600" /> Confirm Password
//               </label>
//               <input 
//                 className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
//                 name="confirmPassword" 
//                 type="password" 
//                 placeholder="Confirm new password" 
//                 onChange={handleChange} 
//               />
//             </div>
//           </div>
          
//           {/* Action Buttons */}
//           <div className="flex justify-end mt-8 pt-4 border-t border-gray-200">
//             <button 
//               className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 transition-all" 
//               onClick={handleSubmit}
//             >
//               Save Changes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;

import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt} from "react-icons/fa";

const Account = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    profilePicture: ""
  });
  
  

  // Load user data from sessionStorage if available
  useEffect(() => {
    try {
      const userStr = sessionStorage.getItem("user");
      if (!userStr) {
        console.log("No user in sessionStorage");
        return;
      }
      
      const storedUser = JSON.parse(userStr);
      if (storedUser) {
        // Make sure to properly map the user data to the form fields
        setUserData({
          username: storedUser.name || "", // Map the name from user to username field
          email: storedUser.email || "",
          phone: storedUser.phone || "",
          address: storedUser.address || "",
          // password: "",
          // confirmPassword: "",
          profilePicture: storedUser.profilePicture || ""
        });
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };


  const handleSubmit = () => {
    console.log("Account details submitted", userData);
    // Show success message
    alert("Account details updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 py-10">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center">Account Settings</h1>
          <p className="text-center mt-2 text-blue-100">Manage your personal information and account preferences</p>
        </div>
        
        {/* Main Content */}
        <div className="bg-white p-8 rounded-b-lg shadow-lg border border-gray-200">
          
          
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1 flex items-center">
                <FaUser className="mr-2 text-blue-600" /> Username
              </label>
              <input 
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                name="username" 
                value={userData.username}
                placeholder="Enter your username" 
                
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1 flex items-center">
                <FaEnvelope className="mr-2 text-blue-600" /> Email
              </label>
              <input 
                className="border border-gray-300 p-3 text- rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                name="email" 
                type="email" 
                value={userData.email}
                placeholder="Enter your email" 
                // onChange={handleChange} 
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1 flex items-center">
                <FaPhone className="mr-2 text-blue-600" /> Phone Number
              </label>
              <input 
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                name="phone" 
                type="tel" 
                value={userData.phone}
                placeholder="Enter your phone number" 
                onChange={handleChange} 
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-600" /> Address
              </label>
              <input 
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                name="address" 
                value={userData.address}
                placeholder="Enter your address" 
                onChange={handleChange} 
              />
            </div>

            {/* Password Section */}
            
            {/* <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1 flex items-center">
                <FaLock className="mr-2 text-blue-600" /> New Password
              </label>
              <input 
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                name="password" 
                type="password" 
                placeholder="Enter new password" 
                onChange={handleChange} 
              />
            </div> */}
            
            {/* Password Confirmation */}

            {/* <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1 flex items-center">
                <FaCheck className="mr-2 text-blue-600" /> Confirm Password
              </label>
              <input 
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                name="confirmPassword" 
                type="password" 
                placeholder="Confirm new password" 
                onChange={handleChange} 
              />
            </div> */}
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-end mt-8 pt-4 border-t border-gray-200">
            <button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 transition-all" 
              onClick={handleSubmit}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;