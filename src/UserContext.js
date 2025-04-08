// // // // import React, { createContext, useContext, useState, useEffect } from "react";

// // // // // Create the context
// // // // const UserContext = createContext();

// // // // // Create the provider
// // // // export const UserProvider = ({ children }) => {
// // // //     const [user, setUser] = useState(null);

// // // //     // Function to log in a user
// // // //     const login = (userData) => {
// // // //         localStorage.setItem("user", JSON.stringify(userData)); // Save user data to localStorage
// // // //         setUser(userData);
// // // //     };

// // // //     // Function to log out a user
// // // //     const logout = () => {
// // // //         localStorage.removeItem("user"); // Clear user data from localStorage
// // // //         setUser(null);
// // // //     };

// // // //     // Load user from localStorage on app start
// // // //     useEffect(() => {
// // // //         const storedUser = localStorage.getItem("user");
// // // //         if (storedUser) {
// // // //             setUser(JSON.parse(storedUser));
// // // //         }
// // // //     }, []);

// // // //     return (
// // // //         <UserContext.Provider value={{ user, login, logout }}>
// // // //             {children}
// // // //         </UserContext.Provider>
// // // //     );
// // // // };

// // // // // Create a custom hook for using the UserContext
// // // // export const useUser = () => {
// // // //     return useContext(UserContext);
// // // // };
// // // import React, { createContext, useContext, useState, useEffect } from "react";

// // // // Create the context
// // // const UserContext = createContext();

// // // // Create the provider
// // // export const UserProvider = ({ children }) => {
// // //     const [user, setUser] = useState(null);

// // //     // Function to log in a user
// // //     const loginUser = (userData) => {
// // //         sessionStorage.setItem("user", JSON.stringify(userData)); // Save user data to sessionStorage
// // //         setUser(userData);
// // //     };

// // //     // Function to log out a user
// // //     const logoutUser = () => {
// // //         sessionStorage.removeItem("user"); // Remove user data from sessionStorage
// // //         setUser(null);
// // //     };

// // //     // Load user from sessionStorage on app start
// // //     useEffect(() => {
// // //         try {
// // //             const storedUser = sessionStorage.getItem("user");
// // //             if (storedUser) {
// // //                 setUser(JSON.parse(storedUser));
// // //             }
// // //         } catch (error) {
// // //             console.error("Error parsing user data:", error);
// // //             // Clear invalid user data
// // //             sessionStorage.removeItem("user");
// // //         }
// // //     }, []);

// // //     return (
// // //         <UserContext.Provider value={{ user, loginUser, logoutUser }}>
// // //             {children}
// // //         </UserContext.Provider>
// // //     );
// // // };

// // // // Create a custom hook for using the UserContext
// // // export const useUser = () => {
// // //     return useContext(UserContext);
// // // };
// // // import React, { createContext, useContext, useState, useEffect } from "react";

// // // // Create the context
// // // const UserContext = createContext();

// // // // Create the provider
// // // export const UserProvider = ({ children }) => {
// // //     const [user, setUser] = useState(null);
// // //     const [username, setUsername] = useState("");

// // //     // Function to log in a user
// // //     const loginUser = (userData) => {
// // //         sessionStorage.setItem("user", JSON.stringify(userData)); // Save user data to sessionStorage
// // //         setUser(userData);
// // //         setUsername(userData.username || ""); // Save username separately
// // //     };

// // //     // Function to log out a user
// // //     const logoutUser = () => {
// // //         sessionStorage.removeItem("user"); // Remove user data from sessionStorage
// // //         setUser(null);
// // //         setUsername("");
// // //     };

// // //     // Load user from sessionStorage on app start
// // //     useEffect(() => {
// // //         try {
// // //             const storedUser = sessionStorage.getItem("user");
// // //             if (storedUser) {
// // //                 const parsedUser = JSON.parse(storedUser);
// // //                 setUser(parsedUser);
// // //                 setUsername(parsedUser.username || "");
// // //             }
// // //         } catch (error) {
// // //             console.error("Error parsing user data:", error);
// // //             sessionStorage.removeItem("user");
// // //         }
// // //     }, []);

// // //     return (
// // //         <UserContext.Provider value={{ user, username, loginUser, logoutUser }}>
// // //             {children}
// // //         </UserContext.Provider>
// // //     );
// // // };

// // // // Custom hook to use the context
// // // export const useUser = () => {
// // //     return useContext(UserContext);
// // // };


// // // UserContext.js
// // import React, { createContext, useContext, useState, useEffect } from "react";

// // // Create the context
// // const UserContext = createContext();

// // // Create the provider component
// // export const UserProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [username, setUsername] = useState("");

// //   // Function to log in a user
// //   const loginUser = (userData) => {
// //     sessionStorage.setItem("user", JSON.stringify(userData)); // Save user data to sessionStorage
// //     setUser(userData);
// //     setUsername(userData.username || ""); // Save username separately
// //   };

// //   // Function to log out a user
// //   const logoutUser = () => {
// //     sessionStorage.removeItem("user"); // Remove user data from sessionStorage
// //     setUser(null);
// //     setUsername("");
// //   };

// //   // Load user from sessionStorage on app start
// //   useEffect(() => {
// //     try {
// //       const storedUser = sessionStorage.getItem("user");
// //       if (storedUser) {
// //         const parsedUser = JSON.parse(storedUser);
// //         setUser(parsedUser);
// //         setUsername(parsedUser.username || "");
// //       }
// //     } catch (error) {
// //       console.error("Error parsing user data:", error);
// //       sessionStorage.removeItem("user");
// //     }
// //   }, []);

// //   return (
// //     <UserContext.Provider value={{ user, username, loginUser, logoutUser }}>
// //       {children}
// //     </UserContext.Provider>
// //   );
// // };

// // // Custom hook to use the context
// // export const useUser = () => {
// //   return useContext(UserContext);
// // };
// import React, { createContext, useContext, useState, useEffect } from "react";

// // Create the context
// const UserContext = createContext();

// // Create the provider component
// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [username, setUsername] = useState("");

//   // Function to log in a user
//   const loginUser = (userData) => {
//     sessionStorage.setItem("user", JSON.stringify(userData)); // Save user data to sessionStorage
//     setUser(userData);
//     // Set username using userData.username if it exists, otherwise fallback to userData.name
//     setUsername(userData.username || userData.name || "");
//   };

//   // Function to log out a user
//   const logoutUser = () => {
//     sessionStorage.removeItem("user"); // Remove user data from sessionStorage
//     setUser(null);
//     setUsername("");
//   };

//   // Load user from sessionStorage on app start
//   useEffect(() => {
//     try {
//       const storedUser = sessionStorage.getItem("user");
//       if (storedUser) {
//         const parsedUser = JSON.parse(storedUser);
//         setUser(parsedUser);
//         // Set username using parsedUser.username if it exists, otherwise fallback to parsedUser.name
//         setUsername(parsedUser.username || parsedUser.name || "");
//       }
//     } catch (error) {
//       console.error("Error parsing user data:", error);
//       sessionStorage.removeItem("user");
//     }
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, username, loginUser, logoutUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook to use the context
// export const useUser = () => {
//   return useContext(UserContext);
// };
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const UserContext = createContext();

// Create the provider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");

    // Function to log in a user
    const loginUser = (userData) => {
        // Ensure username is properly set from userData
        const userWithUsername = {
            ...userData,
            username: userData.username || userData.name || "" // Use username if available, fallback to name
        };
        
        sessionStorage.setItem("user", JSON.stringify(userWithUsername));
        setUser(userWithUsername);
        setUsername(userWithUsername.username);
    };

    // Function to log out a user
    const logoutUser = () => {
        sessionStorage.removeItem("user");
        setUser(null);
        setUsername("");
    };

    // Load user from sessionStorage on app start
    useEffect(() => {
        try {
            const storedUser = sessionStorage.getItem("user");
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                setUsername(parsedUser.username || parsedUser.name || "");
            }
        } catch (error) {
            console.error("Error parsing user data:", error);
            sessionStorage.removeItem("user");
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, username, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the context
export const useUser = () => {
    return useContext(UserContext);
};