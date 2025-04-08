
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// // import { useUser } from '../UserContext'; // Import the custom hook from UserContext
// // import { Link } from 'react-router-dom';


// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [activeRole, setActiveRole] = useState('student');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();
// //   const { login } = useUser(); // Get the login function from UserContext

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     const apiUrl = process.env.REACT_APP_API_URL; // Correct variable name


// //     if (!apiUrl) {
// //         console.error("API base URL is not defined. Check your .env file.");
// //         return; // Exit the function if apiUrl is undefined
// //     }

// //     try {
// //         const response = await axios.post(`${apiUrl}/api/login`, {
// //             email,
// //             password,
// //             role: activeRole,
// //         });

// //         // Proceed with your logic for handling response
// //         const userData = {
// //             id: response.data.user.id,
// //             name: response.data.user.name,
// //             email: response.data.user.email,
// //             role: activeRole,
// //             token: response.data.user.token,
// //         };
// //         login(userData);

// //         if (activeRole === 'teacher') {
// //             navigate('/teacher-dashboard/home');
// //         } else {
// //             navigate('/student-dashboard/home');
// //         }
// //     } catch (err) {
// //         setError(err.response?.data?.error || 'An error occurred. Please try again.');
// //     }
// // };

// //   return (
// // <div className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-gradient-hero text-white overflow-x-hidden"
// //      style={{ backgroundImage: "" }}>


      
      
// //       <h1 className="text-4xl font-bold mb-6  text-white">
// //         Welcome to <span className="text-300 text-white">ONE</span> Simulation
// //       </h1>

      
// //       <div className="flex justify-center gap-6 mb-6">
// //     <button
// //         className={`w-[230px] py-3 text-lg font-bold rounded-lg shadow-lg transform transition-all duration-300 
// //         ${activeRole === 'student' 
// //             ? 'bg-gradient-to-r from-teal-500 to-green-400 text-white scale-105 shadow-teal-500/50' 
// //             : 'bg-gray-700 text-white hover:bg-teal-500 hover:shadow-teal-500/50 hover:-translate-y-1'}
// //         active:scale-95`}
// //         onClick={() => setActiveRole('student')}
// //     >
// //         Student
// //     </button>

// //     <button
// //         className={`w-[230px] py-3 text-lg font-bold rounded-lg shadow-lg transform transition-all duration-300 
// //         ${activeRole === 'teacher' 
// //             ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white scale-105 shadow-purple-500/50' 
// //             : 'bg-gray-700 text-white hover:bg-purple-600 hover:shadow-purple-500/50 hover:-translate-y-1'}
// //         active:scale-95`}
// //         onClick={() => setActiveRole('teacher')}
// //     >
// //         Faculty
// //     </button>
// // </div>

     
// //       <h2 className="text-lg font-semibold text-white mb-2">Welcome Back!</h2>
// //       {error && <p className="text-red-500 mb-4">{error}</p>}

// //       <form onSubmit={handleSubmit} className="mt-4 w-full max-w-md">
// //         <div className="mb-4">
// //           <label className="block  text-white text-sm font-bold text-left" htmlFor="email">
// //             Email:
// //           </label>
// //           <input
// //             type="email"
// //             id="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-white rounded-full bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
// //             placeholder="Enter your email"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block  text-white text-sm font-bold text-left" htmlFor="password">
// //             Password:
// //           </label>
// //           <input
// //             type="password"
// //             id="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             className="w-full px-4 py-2 border border-white rounded-full bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
// //             placeholder="Enter your password"
// //           />
// //         </div>
// //         <button
// //     type="submit"
// //     className="w-full py-3 font-bold text-white rounded-lg bg-gradient-to-r from-teal-500 to-purple-600 shadow-lg shadow-purple-500/50 hover:shadow-purple-700/70
// //     hover:from-teal-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
// // >
// //     <span className="absolute inset-0 bg-white opacity-10 blur-lg"></span>
// //     <span className="relative z-10 tracking-wide uppercase">Login</span>
// // </button>

// //       </form>

     
// //       <p className="mt-4 text-white">
// //         Don't have an account? <Link to="/signup" className="text-black font-semibold">Register</Link>
// //       </p>
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useUser } from '../UserContext'; // Import the custom hook from UserContext
// import { Link } from 'react-router-dom';


// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [activeRole, setActiveRole] = useState('student');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { loginUser } = useUser(); // Updated to use the renamed loginUser function



//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     // For testing, bypass the API call and use the onLogin prop directly
//     if (!process.env.REACT_APP_API_URL) {
//       console.log("API URL not set, using direct login");
//       // Use the onLogin prop from App.js
//       if (onLogin) {
//         onLogin();
//       } else {
//         // Fallback to UserContext if onLogin is not provided
//         const userData = {
//           id: "123",
//           name: "Test User",
//           email: email || "test@example.com",
//           role: activeRole,
//           token: "test-token"
//         };
//         loginUser(userData);
        
//         if (activeRole === 'teacher') {
//           navigate('/teacher-dashboard/home');
//         } else {
//           navigate('/student-dashboard/home');
//         }
//       }
//       return;
//     }
    
//     // Normal API login flow
//     try {
//         const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {
//             email,
//             password,
//             role: activeRole,
//         });

//         // Proceed with your logic for handling response
//         const userData = {
//             id: response.data.user.id,
//             name: response.data.user.name,
//             email: response.data.user.email,
//             role: activeRole,
//             token: response.data.user.token,
//         };
//         loginUser(userData); // Updated to use the renamed loginUser function

//         if (activeRole === 'teacher') {
//             navigate('/teacher-dashboard/home');
//         } else {
//             navigate('/student-dashboard/home');
//         }
//     } catch (err) {
//         setError(err.response?.data?.error || 'An error occurred. Please try again.');
//     }
// };

//   return (
// <div className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-gradient-hero text-white overflow-x-hidden"
//      style={{ backgroundImage: "" }}>

//       <h1 className="text-4xl font-bold mb-6 text-white">
//         Welcome to <span className="text-300 text-white">ONE</span> Simulation
//       </h1>

//       <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-full max-w-md">
//         <div className="flex justify-center mb-6">
//           <div className="bg-gray-200 p-1 rounded-lg flex w-full">
//             <button
//               className={`w-1/2 py-3 font-bold rounded-lg transition-all duration-300 ${
//                 activeRole === 'student'
//                   ? 'bg-blue-500 text-white shadow-lg'
//                   : 'bg-transparent text-gray-700 hover:bg-gray-300'
//               }`}
//               onClick={() => setActiveRole('student')}
//             >
//               Student
//             </button>
//             <button
//               className={`w-1/2 py-3 font-bold rounded-lg transition-all duration-300 ${
//                 activeRole === 'teacher'
//                   ? 'bg-indigo-600 text-white shadow-lg'
//                   : 'bg-transparent text-gray-700 hover:bg-gray-300'
//               }`}
//               onClick={() => setActiveRole('teacher')}
//             >
//               Faculty
//             </button>
//           </div>
//         </div>

//         <h2 className="text-xl font-semibold text-white mb-4 text-center">Welcome Back!</h2>
//         {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

//         <form onSubmit={handleSubmit} className="mt-4 w-full">
//           <div className="mb-4">
//             <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/70"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
//               Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/70"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 font-bold text-white rounded-lg bg-blue-600 shadow-lg hover:bg-blue-700 transition-all duration-300"
//           >
//             Login
//           </button>
//         </form>

//         <p className="mt-6 text-white text-center">
//           Don't have an account? <Link to="/signup" className="text-blue-300 hover:text-black font-semibold">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../UserContext'; // Import the custom hook from UserContext
import { Link } from 'react-router-dom';


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeRole, setActiveRole] = useState('student');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loginUser } = useUser(); // Updated to use the renamed loginUser function



  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // For testing, bypass the API call and use the onLogin prop directly
    if (!process.env.REACT_APP_API_URL) {
      console.log("API URL not set, using direct login");
      // Use the onLogin prop from App.js
      if (onLogin) {
        onLogin();
      } else {
        // Fallback to UserContext if onLogin is not provided
        const userData = {
          id: "123",
          name: "Test User",
          username: "testuser",
          email: email || "test@example.com",
          role: activeRole,
          token: "test-token"
        };
        loginUser(userData);
        
        if (activeRole === 'teacher') {
          navigate('/teacher-dashboard/home');
        } else {
          navigate('/student-dashboard/home');
        }
      }
      return;
    }
    
    // Normal API login flow
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {
            email,
            password,
            role: activeRole,
        });

        // Proceed with your logic for handling response
        const userData = {
            id: response.data.user.id,
            name: response.data.user.name,
            username: response.data.user.username,
            email: response.data.user.email,
            role: activeRole,
            token: response.data.user.token,
        };
        loginUser(userData);

        if (activeRole === 'teacher') {
            navigate('/teacher-dashboard/home');
        } else {
            navigate('/student-dashboard/home');
        }
    } catch (err) {
        setError(err.response?.data?.error || 'An error occurred. Please try again.');
    }
};

  return (
<div className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-gradient-hero text-white overflow-x-hidden"
     style={{ backgroundImage: "" }}>

      <h1 className="text-4xl font-bold mb-6 text-white">
        Welcome to <span className="text-300 text-white">ONE</span> Simulation
      </h1>

      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 p-1 rounded-lg flex w-full">
            <button
              className={`w-1/2 py-3 font-bold rounded-lg transition-all duration-300 ${
                activeRole === 'student'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-transparent text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveRole('student')}
            >
              Student
            </button>
            <button
              className={`w-1/2 py-3 font-bold rounded-lg transition-all duration-300 ${
                activeRole === 'teacher'
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-transparent text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveRole('teacher')}
            >
              Faculty
            </button>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-white mb-4 text-center">Welcome Back!</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-4 w-full">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/70"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/70"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white rounded-lg bg-blue-600 shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-white text-center">
          Don't have an account? <Link to="/signup" className="text-blue-300 hover:text-black font-semibold">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;