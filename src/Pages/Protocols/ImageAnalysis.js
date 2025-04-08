// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useNavigate, useParams, useLocation } from "react-router-dom";
// // // // // import { useUser } from "../../UserContext";

// // // // // // Helper function to convert a data URI to a Blob
// // // // // const dataURLtoBlob = (dataurl) => {
// // // // //   const arr = dataurl.split(',');
// // // // //   const mimeMatch = arr[0].match(/:(.*?);/);
// // // // //   const mime = mimeMatch ? mimeMatch[1] : "";
// // // // //   const bstr = atob(arr[1]);
// // // // //   let n = bstr.length;
// // // // //   const u8arr = new Uint8Array(n);
// // // // //   while (n--) {
// // // // //     u8arr[n] = bstr.charCodeAt(n);
// // // // //   }
// // // // //   return new Blob([u8arr], { type: mime });
// // // // // };

// // // // // function ImageAnalysis() {
// // // // //   const [finding, setFinding] = useState("");
// // // // //   const [impression, setImpression] = useState("");
// // // // //   const [selectedImages, setSelectedImages] = useState([]); // Array of data URI strings (from fetched images)
// // // // //   const [images, setImages] = useState([]); // Fetched images (data URI strings)

// // // // //   const { topicId, courseId } = useParams();
// // // // //   const location = useLocation();
// // // // //   const navigate = useNavigate();
// // // // //   const { user } = useUser();

// // // // //   // Retrieve registration_id passed from previous page
// // // // //   const registrationId = location.state?.registration_id || "";

// // // // //   // Fetch images from the backend using the registrationId
// // // // //   useEffect(() => {
// // // // //     if (registrationId) {
// // // // //       fetch(`${process.env.REACT_APP_API_URL}/api/patient-scan-images/${registrationId}`)
// // // // //         .then((response) => {
// // // // //           if (!response.ok) {
// // // // //             throw new Error("Failed to fetch images");
// // // // //           }
// // // // //           return response.json();
// // // // //         })
// // // // //         .then((data) => {
// // // // //           console.log("Fetched data:", data);
// // // // //           // Handle different possible response formats:
// // // // //           if (Array.isArray(data)) {
// // // // //             setImages(data);
// // // // //           } else if (typeof data === "object" && data !== null) {
// // // // //             // If the response is an object, extract keys that include "image"
// // // // //             const imageArray = Object.keys(data)
// // // // //               .filter((key) => key.toLowerCase().includes("image"))
// // // // //               .map((key) => data[key]);
// // // // //             setImages(imageArray);
// // // // //           } else {
// // // // //             console.error("Unexpected data format for images:", data);
// // // // //           }
// // // // //         })
// // // // //         .catch((error) => {
// // // // //           console.error("Error fetching images:", error);
// // // // //         });
// // // // //     }
// // // // //   }, [registrationId]);

// // // // //   const handleInputChange = (event) => {
// // // // //     setFinding(event.target.value);
// // // // //   };

// // // // //   const handleImpressionChange = (event) => {
// // // // //     setImpression(event.target.value);
// // // // //   };

// // // // //   // Toggle selection for a single image only
// // // // //   const handleImageSelect = (imgUrl) => {
// // // // //     setSelectedImages((prevSelected) => {
// // // // //       if (prevSelected.includes(imgUrl)) {
// // // // //         // Remove image if already selected
// // // // //         return prevSelected.filter((url) => url !== imgUrl);
// // // // //       } else {
// // // // //         // Add the image if not selected
// // // // //         return [...prevSelected, imgUrl];
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   // Handle submission using FormData and convert data URI images to File objects
// // // // //   const handleSubmit = async () => {
// // // // //     const formData = new FormData();
// // // // //     formData.append("user_id", user?.id || "");
// // // // //     formData.append("registration_id", registrationId);
// // // // //     formData.append("finding", finding);
// // // // //     formData.append("impression", impression);

// // // // //     // Convert each selected image (data URI) to a File object and append it.
// // // // //     selectedImages.forEach((dataURI, index) => {
// // // // //       const blob = dataURLtoBlob(dataURI);
// // // // //       // Create a File object (optional: you can use blob directly if your backend supports it)
// // // // //       const file = new File([blob], `image_${index}.jpeg`, { type: blob.type });
// // // // //       formData.append("selected_images", file);
// // // // //     });

// // // // //     try {
// // // // //       // Do not set the Content-Type header manually; let the browser add the multipart boundary.
// // // // //       const response = await fetch(`${process.env.REACT_APP_API_URL}/api/image-analysis`, {
// // // // //         method: "POST",
// // // // //         body: formData,
// // // // //       });

// // // // //       if (!response.ok) {
// // // // //         throw new Error("Failed to submit image analysis");
// // // // //       }
// // // // //       const result = await response.json();
// // // // //       console.log("✅ Image Analysis Submission:", result);
// // // // //       alert("Submission successful!");

// // // // //       // Navigate to image reporting page, passing the registration_id in state
// // // // //       navigate(
// // // // //         `/student-dashboard/courses/ongoing/${topicId}/protocols/image-reporting/${courseId}`,
// // // // //         { state: { registration_id: registrationId } }
// // // // //       );
// // // // //     } catch (error) {
// // // // //       console.error("Error submitting image analysis:", error);
// // // // //       alert("Failed to submit. Please try again later.");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gray-100">
// // // // //       <h1 className="text-3xl font-bold text-gray-900 mb-8 mt-4">Image Analysis</h1>

// // // // //       {/* Display Fetched Images with Selection */}
// // // // //       <div className="w-full max-w-6xl mb-8">
// // // // //         <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Images for Analysis</h2>
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //           {Array.isArray(images) &&
// // // // //             images.map((imgUrl, index) => (
// // // // //               <div 
// // // // //                 className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 ${
// // // // //                   selectedImages.includes(imgUrl) 
// // // // //                     ? "border-blue-500 bg-blue-50 shadow-md" 
// // // // //                     : "border-gray-200 bg-white"
// // // // //                 }`} 
// // // // //                 key={index}
// // // // //               >
// // // // //                 <img
// // // // //                   src={imgUrl}
// // // // //                   alt={`Scan ${index + 1}`}
// // // // //                   className="w-full h-auto max-h-64 object-contain rounded-md mb-3"
// // // // //                 />
// // // // //                 <div className="flex items-center mt-2">
// // // // //                   <input
// // // // //                     type="checkbox"
// // // // //                     id={`image-${index}`}
// // // // //                     checked={selectedImages.includes(imgUrl)}
// // // // //                     onChange={() => handleImageSelect(imgUrl)}
// // // // //                     className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // // // //                   />
// // // // //                   <label htmlFor={`image-${index}`} className="ml-2 text-sm font-medium text-gray-700">
// // // // //                     Select Image {index + 1}
// // // // //                   </label>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Input Fields Section */}
// // // // //       <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 mb-8">
// // // // //         <div className="mb-6">
// // // // //           <label htmlFor="findingInput" className="block text-lg font-medium text-gray-700 mb-2">
// // // // //             Findings
// // // // //           </label>
// // // // //           <textarea
// // // // //             id="findingInput"
// // // // //             value={finding}
// // // // //             onChange={handleInputChange}
// // // // //             placeholder="Enter your finding here"
// // // // //             className="w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
// // // // //             style={{ height: "200px" }}
// // // // //           />
// // // // //         </div>

// // // // //         <div className="mb-6">
// // // // //           <label htmlFor="impressionInput" className="block text-lg font-medium text-gray-700 mb-2">
// // // // //             Impression
// // // // //           </label>
// // // // //           <textarea
// // // // //             id="impressionInput"
// // // // //             value={impression}
// // // // //             onChange={handleImpressionChange}
// // // // //             placeholder="Enter your impression here"
// // // // //             className="w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
// // // // //             style={{ height: "200px" }}
// // // // //           />
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="flex justify-center mb-8">
// // // // //         <button
// // // // //           onClick={handleSubmit}
// // // // //           className="px-8 py-3 rounded-lg text-base font-medium transition duration-200 shadow-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// // // // //         >
// // // // //           Generate Report
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default ImageAnalysis;

// // // // import React, { useState, useEffect } from "react";
// // // // import { useNavigate, useParams, useLocation } from "react-router-dom";
// // // // import { useUser } from "../../UserContext";

// // // // // Helper function to convert a data URI to a Blob
// // // // const dataURLtoBlob = (dataurl) => {
// // // //   const arr = dataurl.split(',');
// // // //   const mimeMatch = arr[0].match(/:(.*?);/);
// // // //   const mime = mimeMatch ? mimeMatch[1] : "";
// // // //   const bstr = atob(arr[1]);
// // // //   let n = bstr.length;
// // // //   const u8arr = new Uint8Array(n);
// // // //   while (n--) {
// // // //     u8arr[n] = bstr.charCodeAt(n);
// // // //   }
// // // //   return new Blob([u8arr], { type: mime });
// // // // };

// // // // function ImageAnalysis() {
// // // //   const [finding, setFinding] = useState("");
// // // //   const [impression, setImpression] = useState("");
// // // //   const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Store the index of the selected image
// // // //   const [images, setImages] = useState([]); // Fetched images (data URI strings)

// // // //   const { topicId, courseId } = useParams();
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();
// // // //   const { user } = useUser();

// // // //   // Retrieve registration_id passed from previous page
// // // //   const registrationId = location.state?.registration_id || "";

// // // //   // Fetch images from the backend using the registrationId
// // // //   useEffect(() => {
// // // //     if (registrationId) {
// // // //       fetch(`${process.env.REACT_APP_API_URL}/api/patient-scan-images/${registrationId}`)
// // // //         .then((response) => {
// // // //           if (!response.ok) {
// // // //             throw new Error("Failed to fetch images");
// // // //           }
// // // //           return response.json();
// // // //         })
// // // //         .then((data) => {
// // // //           console.log("Fetched data:", data);
// // // //           // Handle different possible response formats:
// // // //           if (Array.isArray(data)) {
// // // //             setImages(data);
// // // //           } else if (typeof data === "object" && data !== null) {
// // // //             // If the response is an object, extract keys that include "image"
// // // //             const imageArray = Object.keys(data)
// // // //               .filter((key) => key.toLowerCase().includes("image"))
// // // //               .map((key) => data[key]);
// // // //             setImages(imageArray);
// // // //           } else {
// // // //             console.error("Unexpected data format for images:", data);
// // // //           }
// // // //         })
// // // //         .catch((error) => {
// // // //           console.error("Error fetching images:", error);
// // // //         });
// // // //     }
// // // //   }, [registrationId]);

// // // //   const handleInputChange = (event) => {
// // // //     setFinding(event.target.value);
// // // //   };

// // // //   const handleImpressionChange = (event) => {
// // // //     setImpression(event.target.value);
// // // //   };

// // // //   // Only one image can be selected at a time.
// // // //   // If the same image is clicked, it toggles off.
// // // //   const handleImageSelect = (index) => {
// // // //     if (selectedImageIndex === index) {
// // // //       setSelectedImageIndex(null);
// // // //     } else {
// // // //       setSelectedImageIndex(index);
// // // //     }
// // // //   };

// // // //   // Handle submission using FormData and converting the selected image from a data URI to a File object
// // // //   const handleSubmit = async () => {
// // // //     if (selectedImageIndex === null || !images[selectedImageIndex]) {
// // // //       alert("Please select an image for analysis.");
// // // //       return;
// // // //     }

// // // //     const formData = new FormData();
// // // //     formData.append("user_id", user?.id || "");
// // // //     formData.append("registration_id", registrationId);
// // // //     formData.append("finding", finding);
// // // //     formData.append("impression", impression);

// // // //     // Convert the selected image (data URI) to a File object and append it.
// // // //     const dataURI = images[selectedImageIndex];
// // // //     const blob = dataURLtoBlob(dataURI);
// // // //     const file = new File([blob], `image_${selectedImageIndex}.jpeg`, { type: blob.type });
// // // //     formData.append("selected_images", file);

// // // //     try {
// // // //       const response = await fetch(`${process.env.REACT_APP_API_URL}/api/image-analysis`, {
// // // //         method: "POST",
// // // //         body: formData,
// // // //       });

// // // //       if (!response.ok) {
// // // //         throw new Error("Failed to submit image analysis");
// // // //       }
// // // //       const result = await response.json();
// // // //       console.log("✅ Image Analysis Submission:", result);
// // // //       alert("Submission successful!");

// // // //       // Navigate to image reporting page, passing the registration_id in state
// // // //       navigate(
// // // //         `/student-dashboard/courses/ongoing/${topicId}/protocols/image-reporting/${courseId}`,
// // // //         { state: { registration_id: registrationId } }
// // // //       );
// // // //     } catch (error) {
// // // //       console.error("Error submitting image analysis:", error);
// // // //       alert("Failed to submit. Please try again later.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gray-100">
// // // //       <h1 className="text-3xl font-bold text-gray-900 mb-8 mt-4">Image Analysis</h1>

// // // //       {/* Display Fetched Images with Selection */}
// // // //       <div className="w-full max-w-6xl mb-8">
// // // //         <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Image for Analysis</h2>
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //           {images.map((imgUrl, index) => (
// // // //             <div
// // // //               key={index}
// // // //               onClick={() => handleImageSelect(index)}
// // // //               className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 ${
// // // //                 selectedImageIndex === index
// // // //                   ? "border-blue-500 bg-blue-50 shadow-md"
// // // //                   : "border-gray-200 bg-white"
// // // //               }`}
// // // //             >
// // // //               <img
// // // //                 src={imgUrl}
// // // //                 alt={`Scan ${index + 1}`}
// // // //                 className="w-full h-auto max-h-64 object-contain rounded-md mb-3"
// // // //               />
// // // //               <div className="flex items-center mt-2">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   id={`image-${index}`}
// // // //                   checked={selectedImageIndex === index}
// // // //                   readOnly
// // // //                   className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // // //                 />
// // // //                 <label htmlFor={`image-${index}`} className="ml-2 text-sm font-medium text-gray-700">
// // // //                   Select Image {index + 1}
// // // //                 </label>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* Input Fields Section */}
// // // //       <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 mb-8">
// // // //         <div className="mb-6">
// // // //           <label htmlFor="findingInput" className="block text-lg font-medium text-gray-700 mb-2">
// // // //             Findings
// // // //           </label>
// // // //           <textarea
// // // //             id="findingInput"
// // // //             value={finding}
// // // //             onChange={handleInputChange}
// // // //             placeholder="Enter your finding here"
// // // //             className="w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
// // // //             style={{ height: "200px" }}
// // // //           />
// // // //         </div>

// // // //         <div className="mb-6">
// // // //           <label htmlFor="impressionInput" className="block text-lg font-medium text-gray-700 mb-2">
// // // //             Impression
// // // //           </label>
// // // //           <textarea
// // // //             id="impressionInput"
// // // //             value={impression}
// // // //             onChange={handleImpressionChange}
// // // //             placeholder="Enter your impression here"
// // // //             className="w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
// // // //             style={{ height: "200px" }}
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       <div className="flex justify-center mb-8">
// // // //         <button
// // // //           onClick={handleSubmit}
// // // //           className="px-8 py-3 rounded-lg text-base font-medium transition duration-200 shadow-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// // // //         >
// // // //           Generate Report
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default ImageAnalysis;
// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate, useParams, useLocation } from "react-router-dom";
// // // import { useUser } from "../../UserContext";

// // // // Helper function to convert a data URI to a Blob
// // // const dataURLtoBlob = (dataurl) => {
// // //   const arr = dataurl.split(',');
// // //   const mimeMatch = arr[0].match(/:(.*?);/);
// // //   const mime = mimeMatch ? mimeMatch[1] : "";
// // //   const bstr = atob(arr[1]);
// // //   let n = bstr.length;
// // //   const u8arr = new Uint8Array(n);
// // //   while (n--) {
// // //     u8arr[n] = bstr.charCodeAt(n);
// // //   }
// // //   return new Blob([u8arr], { type: mime });
// // // };

// // // function ImageAnalysis() {
// // //   const [finding, setFinding] = useState("");
// // //   const [impression, setImpression] = useState("");
// // //   const [selectedImages, setSelectedImages] = useState([]); // Store selected image URLs (data URI strings)
// // //   const [images, setImages] = useState([]); // Fetched images (data URI strings)
// // //   const [isLoading, setIsLoading] = useState(true); // Loader state

// // //   const { topicId, courseId } = useParams();
// // //   const location = useLocation();
// // //   const navigate = useNavigate();
// // //   const { user } = useUser();

// // //   // Retrieve registration_id passed from previous page
// // //   const registrationId = location.state?.registration_id || "";

// // //   // Fetch images from the backend using the registrationId and set loader accordingly
// // //   useEffect(() => {
// // //     if (registrationId) {
// // //       setIsLoading(true);
// // //       fetch(`${process.env.REACT_APP_API_URL}/api/patient-scan-images/${registrationId}`)
// // //         .then((response) => {
// // //           if (!response.ok) {
// // //             throw new Error("Failed to fetch images");
// // //           }
// // //           return response.json();
// // //         })
// // //         .then((data) => {
// // //           console.log("Fetched data:", data);
// // //           if (Array.isArray(data)) {
// // //             setImages(data);
// // //           } else if (typeof data === "object" && data !== null) {
// // //             const imageArray = Object.keys(data)
// // //               .filter((key) => key.toLowerCase().includes("image"))
// // //               .map((key) => data[key]);
// // //             setImages(imageArray);
// // //           } else {
// // //             console.error("Unexpected data format for images:", data);
// // //           }
// // //         })
// // //         .catch((error) => {
// // //           console.error("Error fetching images:", error);
// // //         })
// // //         .finally(() => {
// // //           setIsLoading(false);
// // //         });
// // //     }
// // //   }, [registrationId]);

// // //   const handleInputChange = (event) => {
// // //     setFinding(event.target.value);
// // //   };

// // //   const handleImpressionChange = (event) => {
// // //     setImpression(event.target.value);
// // //   };

// // //   // Toggle manual selection of an image
// // //   const handleImageSelect = (imgUrl) => {
// // //     setSelectedImages((prevSelected) => {
// // //       if (prevSelected.includes(imgUrl)) {
// // //         // Deselect if already selected
// // //         return prevSelected.filter((url) => url !== imgUrl);
// // //       } else {
// // //         // Add image to selected array
// // //         return [...prevSelected, imgUrl];
// // //       }
// // //     });
// // //   };

// // //   // Convert selected data URI images to File objects and submit via FormData
// // //   const handleSubmit = async () => {
// // //     if (selectedImages.length === 0) {
// // //       alert("Please select at least one image for analysis.");
// // //       return;
// // //     }

// // //     const formData = new FormData();
// // //     formData.append("user_id", user?.id || "");
// // //     formData.append("registration_id", registrationId);
// // //     formData.append("finding", finding);
// // //     formData.append("impression", impression);

// // //     selectedImages.forEach((dataURI, index) => {
// // //       const blob = dataURLtoBlob(dataURI);
// // //       const file = new File([blob], `image_${index}.jpeg`, { type: blob.type });
// // //       formData.append("selected_images", file);
// // //     });

// // //     try {
// // //       const response = await fetch(`${process.env.REACT_APP_API_URL}/api/image-analysis`, {
// // //         method: "POST",
// // //         body: formData,
// // //       });

// // //       if (!response.ok) {
// // //         throw new Error("Failed to submit image analysis");
// // //       }
// // //       const result = await response.json();
// // //       console.log("✅ Image Analysis Submission:", result);
// // //       alert("Submission successful!");

// // //       navigate(
// // //         `/student-dashboard/courses/ongoing/${topicId}/protocols/image-reporting/${courseId}`,
// // //         { state: { registration_id: registrationId } }
// // //       );
// // //     } catch (error) {
// // //       console.error("Error submitting image analysis:", error);
// // //       alert("Failed to submit. Please try again later.");
// // //     }
// // //   };

// // //   // Loader component (simple text or you can replace with an actual spinner)
// // //   if (isLoading) {
// // //     return (
// // //       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// // //         <div className="text-2xl font-semibold text-gray-700">Loading images...</div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gray-100">
// // //       <h1 className="text-3xl font-bold text-gray-900 mb-8 mt-4">Image Analysis</h1>

// // //       {/* Display Fetched Images with Manual Multiple Selection */}
// // //       <div className="w-full max-w-6xl mb-8">
// // //         <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Images for Analysis</h2>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {images.map((imgUrl, index) => (
// // //             <div
// // //               key={index}
// // //               className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 ${
// // //                 selectedImages.includes(imgUrl)
// // //                   ? "border-blue-500 bg-blue-50 shadow-md"
// // //                   : "border-gray-200 bg-white"
// // //               }`}
// // //             >
// // //               <img
// // //                 src={imgUrl}
// // //                 alt={`Scan ${index + 1}`}
// // //                 className="w-full h-auto max-h-64 object-contain rounded-md mb-3"
// // //               />
// // //               <div className="flex items-center mt-2">
// // //                 <input
// // //                   type="checkbox"
// // //                   id={`image-${index}`}
// // //                   checked={selectedImages.includes(imgUrl)}
// // //                   onChange={() => handleImageSelect(imgUrl)}
// // //                   className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // //                 />
// // //                 <label htmlFor={`image-${index}`} className="ml-2 text-sm font-medium text-gray-700">
// // //                   Select Image {index + 1}
// // //                 </label>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Input Fields Section */}
// // //       <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 mb-8">
// // //         <div className="mb-6">
// // //           <label htmlFor="findingInput" className="block text-lg font-medium text-gray-700 mb-2">
// // //             Findings
// // //           </label>
// // //           <textarea
// // //             id="findingInput"
// // //             value={finding}
// // //             onChange={handleInputChange}
// // //             placeholder="Enter your finding here"
// // //             className="w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
// // //             style={{ height: "200px" }}
// // //           />
// // //         </div>

// // //         <div className="mb-6">
// // //           <label htmlFor="impressionInput" className="block text-lg font-medium text-gray-700 mb-2">
// // //             Impression
// // //           </label>
// // //           <textarea
// // //             id="impressionInput"
// // //             value={impression}
// // //             onChange={handleImpressionChange}
// // //             placeholder="Enter your impression here"
// // //             className="w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
// // //             style={{ height: "200px" }}
// // //           />
// // //         </div>
// // //       </div>

// // //       <div className="flex justify-center mb-8">
// // //         <button
// // //           type="button"
// // //           onClick={handleSubmit}
// // //           className="px-8 py-3 rounded-lg text-base font-medium transition duration-200 shadow-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// // //         >
// // //           Generate Report
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default ImageAnalysis;
// // import React, { useState, useEffect } from "react";
// // import { useNavigate, useParams, useLocation } from "react-router-dom";
// // import { useUser } from "../../UserContext";

// // // Helper function to convert a data URI to a Blob
// // const dataURLtoBlob = (dataurl) => {
// //   const arr = dataurl.split(',');
// //   const mimeMatch = arr[0].match(/:(.*?);/);
// //   const mime = mimeMatch ? mimeMatch[1] : "";
// //   const bstr = atob(arr[1]);
// //   let n = bstr.length;
// //   const u8arr = new Uint8Array(n);
// //   while (n--) {
// //     u8arr[n] = bstr.charCodeAt(n);
// //   }
// //   return new Blob([u8arr], { type: mime });
// // };

// // function ImageAnalysis() {
// //   const [finding, setFinding] = useState("");
// //   const [impression, setImpression] = useState("");
// //   const [selectedIndices, setSelectedIndices] = useState([]); // Track selected image indices
// //   const [images, setImages] = useState([]); // Fetched images (data URI strings)
// //   const [isLoading, setIsLoading] = useState(true); // Loader state

// //   const { topicId, courseId } = useParams();
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { user } = useUser();

// //   // Retrieve registration_id passed from previous page
// //   const registrationId = location.state?.registration_id || "";

// //   // Fetch images from the backend using the registrationId and show loader
// //   useEffect(() => {
// //     if (registrationId) {
// //       setIsLoading(true);
// //       fetch(`${process.env.REACT_APP_API_URL}/api/patient-scan-images/${registrationId}`)
// //         .then((response) => {
// //           if (!response.ok) {
// //             throw new Error("Failed to fetch images");
// //           }
// //           return response.json();
// //         })
// //         .then((data) => {
// //           // Handle different response formats
// //           if (Array.isArray(data)) {
// //             setImages(data);
// //           } else if (typeof data === "object" && data !== null) {
// //             const imageArray = Object.keys(data)
// //               .filter((key) => key.toLowerCase().includes("image"))
// //               .map((key) => data[key]);
// //             setImages(imageArray);
// //           } else {
// //             console.error("Unexpected data format for images:", data);
// //           }
// //         })
// //         .catch((error) => {
// //           console.error("Error fetching images:", error);
// //         })
// //         .finally(() => {
// //           setIsLoading(false);
// //         });
// //     }
// //   }, [registrationId]);

// //   const handleInputChange = (event) => {
// //     setFinding(event.target.value);
// //   };

// //   const handleImpressionChange = (event) => {
// //     setImpression(event.target.value);
// //   };

// //   // Toggle selection by image index
// //   const toggleImageSelection = (index) => {
// //     setSelectedIndices((prevSelected) => {
// //       if (prevSelected.includes(index)) {
// //         return prevSelected.filter((i) => i !== index);
// //       } else {
// //         return [...prevSelected, index];
// //       }
// //     });
// //   };

// //   // Submit the selected images along with findings and impressions
// //   const handleSubmit = async () => {
// //     if (selectedIndices.length === 0) {
// //       alert("Please select at least one image for analysis.");
// //       return;
// //     }
// //     const formData = new FormData();
// //     formData.append("user_id", user?.id || "");
// //     formData.append("registration_id", registrationId);
// //     formData.append("finding", finding);
// //     formData.append("impression", impression);

// //     selectedIndices.forEach((index, idx) => {
// //       const dataURI = images[index];
// //       const blob = dataURLtoBlob(dataURI);
// //       const file = new File([blob], `image_${idx}.jpeg`, { type: blob.type });
// //       formData.append("selected_images", file);
// //     });

// //     try {
// //       const response = await fetch(`${process.env.REACT_APP_API_URL}/api/image-analysis`, {
// //         method: "POST",
// //         body: formData,
// //       });

// //       if (!response.ok) {
// //         throw new Error("Failed to submit image analysis");
// //       }
// //       const result = await response.json();
// //       alert("Submission successful!");
// //       navigate(
// //         `/student-dashboard/courses/ongoing/${topicId}/protocols/image-reporting/${courseId}`,
// //         { state: { registration_id: registrationId } }
// //       );
// //     } catch (error) {
// //       console.error("Error submitting image analysis:", error);
// //       alert("Failed to submit. Please try again later.");
// //     }
// //   };

// //   // Display loader while images are being fetched
// //   if (isLoading) {
// //     return (
// //       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
// //         <div className="text-2xl font-semibold text-gray-700">Loading images...</div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
// //       <h1 className="text-3xl font-bold text-gray-900 mb-8 mt-4">Image Analysis</h1>

// //       {/* Display Fetched Images with Manual Multiple Selection */}
// //       <div className="w-full max-w-6xl mb-8">
// //         <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Images for Analysis</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {images.map((imgUrl, index) => (
// //             <div
// //               key={index}
// //               className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 ${
// //                 selectedIndices.includes(index)
// //                   ? "border-blue-500 bg-blue-50 shadow-md"
// //                   : "border-gray-200 bg-white"
// //               }`}
// //             >
// //               <img
// //                 src={imgUrl}
// //                 alt={`Scan ${index + 1}`}
// //                 className="w-full h-auto max-h-64 object-contain rounded-md mb-3"
// //               />
// //               <div className="flex items-center mt-2">
// //                 <input
// //                   type="checkbox"
// //                   id={`image-${index}`}
// //                   checked={selectedIndices.includes(index)}
// //                   onChange={() => toggleImageSelection(index)}
// //                   className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// //                 />
// //                 <label htmlFor={`image-${index}`} className="ml-2 text-sm font-medium text-gray-700">
// //                   Select Image {index + 1}
// //                 </label>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Input Fields for Findings and Impression */}
// //       <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 mb-8">
// //         <div className="mb-6">
// //           <label htmlFor="findingInput" className="block text-lg font-medium text-gray-700 mb-2">
// //             Findings
// //           </label>
// //           <textarea
// //             id="findingInput"
// //             value={finding}
// //             onChange={handleInputChange}
// //             placeholder="Enter your finding here"
// //             className="w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
// //             style={{ height: "200px" }}
// //           />
// //         </div>
// //         <div className="mb-6">
// //           <label htmlFor="impressionInput" className="block text-lg font-medium text-gray-700 mb-2">
// //             Impression
// //           </label>
// //           <textarea
// //             id="impressionInput"
// //             value={impression}
// //             onChange={handleImpressionChange}
// //             placeholder="Enter your impression here"
// //             className="w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
// //             style={{ height: "200px" }}
// //           />
// //         </div>
// //       </div>

// //       <div className="flex justify-center mb-8">
// //         <button
// //           type="button"
// //           onClick={handleSubmit}
// //           className="px-8 py-3 rounded-lg text-base font-medium transition duration-200 shadow-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// //         >
// //           Generate Report
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ImageAnalysis;
// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams, useLocation } from "react-router-dom";
// import { useUser } from "../../UserContext";

// // Helper function to convert a data URI to a Blob
// const dataURLtoBlob = (dataurl) => {
//   const arr = dataurl.split(',');
//   const mimeMatch = arr[0].match(/:(.*?);/);
//   const mime = mimeMatch ? mimeMatch[1] : "";
//   const bstr = atob(arr[1]);
//   let n = bstr.length;
//   const u8arr = new Uint8Array(n);
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }
//   return new Blob([u8arr], { type: mime });
// };

// function ImageAnalysis() {
//   const [finding, setFinding] = useState("");
//   const [impression, setImpression] = useState("");
//   const [selectedIndices, setSelectedIndices] = useState([]); // Track selected image indices
//   const [images, setImages] = useState([]); // Fetched images (data URI strings)
//   const [isLoading, setIsLoading] = useState(true); // Loader state for image fetch
//   const [isSubmitting, setIsSubmitting] = useState(false); // Loader state for form submission

//   const { topicId, courseId } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { user } = useUser();

//   // Retrieve registration_id passed from previous page
//   const registrationId = location.state?.registration_id || "";

//   // Fetch images from the backend using the registrationId and show loader
//   useEffect(() => {
//     if (registrationId) {
//       setIsLoading(true);
//       fetch(`${process.env.REACT_APP_API_URL}/api/patient-scan-images/${registrationId}`)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Failed to fetch images");
//           }
//           return response.json();
//         })
//         .then((data) => {
//           if (Array.isArray(data)) {
//             setImages(data);
//           } else if (typeof data === "object" && data !== null) {
//             const imageArray = Object.keys(data)
//               .filter((key) => key.toLowerCase().includes("image"))
//               .map((key) => data[key]);
//             setImages(imageArray);
//           } else {
//             console.error("Unexpected data format for images:", data);
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching images:", error);
//         })
//         .finally(() => {
//           setIsLoading(false);
//         });
//     }
//   }, [registrationId]);

//   const handleInputChange = (event) => {
//     setFinding(event.target.value);
//   };

//   const handleImpressionChange = (event) => {
//     setImpression(event.target.value);
//   };

//   // Toggle selection by image index
//   const toggleImageSelection = (index) => {
//     setSelectedIndices((prevSelected) => {
//       if (prevSelected.includes(index)) {
//         return prevSelected.filter((i) => i !== index);
//       } else {
//         return [...prevSelected, index];
//       }
//     });
//   };

//   // Submit the selected images along with findings and impressions
//   const handleSubmit = async () => {
//     if (selectedIndices.length === 0) {
//       alert("Please select at least one image for analysis.");
//       return;
//     }

//     setIsSubmitting(true);
//     const formData = new FormData();
//     formData.append("user_id", user?.id || "");
//     formData.append("registration_id", registrationId);
//     formData.append("finding", finding);
//     formData.append("impression", impression);

//     selectedIndices.forEach((index, idx) => {
//       const dataURI = images[index];
//       const blob = dataURLtoBlob(dataURI);
//       const file = new File([blob], `image_${idx}.jpeg`, { type: blob.type });
//       formData.append("selected_images", file);
//     });

//     try {
//       const response = await fetch(`${process.env.REACT_APP_API_URL}/api/image-analysis`, {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit image analysis");
//       }
//       // Directly log the response JSON without assigning to a variable
//       console.log("✅ Image Analysis Submission:", await response.json());
//       alert("Submission successful!");
//       navigate(
//         `/student-dashboard/courses/ongoing/${topicId}/protocols/image-reporting/${courseId}`,
//         { state: { registration_id: registrationId } }
//       );
//     } catch (error) {
//       console.error("Error submitting image analysis:", error);
//       alert("Failed to submit. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Display loader while images are being fetched
//   if (isLoading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <div className="text-2xl font-semibold text-gray-700">Loading images...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-gray-900 mb-8 mt-4">Image Analysis</h1>

//       {/* Display Fetched Images with Manual Multiple Selection */}
//       <div className="w-full max-w-6xl mb-8">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Images for Analysis</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {images.map((imgUrl, index) => (
//             <div
//               key={index}
//               className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 ${
//                 selectedIndices.includes(index)
//                   ? "border-blue-500 bg-blue-50 shadow-md"
//                   : "border-gray-200 bg-white"
//               }`}
//             >
//               <img
//                 src={imgUrl}
//                 alt={`Scan ${index + 1}`}
//                 className="w-full h-auto max-h-64 object-contain rounded-md mb-3"
//               />
//               <div className="flex items-center mt-2">
//                 <input
//                   type="checkbox"
//                   id={`image-${index}`}
//                   checked={selectedIndices.includes(index)}
//                   onChange={() => toggleImageSelection(index)}
//                   className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <label htmlFor={`image-${index}`} className="ml-2 text-sm font-medium text-gray-700">
//                   Select Image {index + 1}
//                 </label>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Input Fields for Findings and Impression */}
//       <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 mb-8">
//         <div className="mb-6">
//           <label htmlFor="findingInput" className="block text-lg font-medium text-gray-700 mb-2">
//             Findings
//           </label>
//           <textarea
//             id="findingInput"
//             value={finding}
//             onChange={handleInputChange}
//             placeholder="Enter your finding here"
//             className="w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             style={{ height: "200px" }}
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="impressionInput" className="block text-lg font-medium text-gray-700 mb-2">
//             Impression
//           </label>
//           <textarea
//             id="impressionInput"
//             value={impression}
//             onChange={handleImpressionChange}
//             placeholder="Enter your impression here"
//             className="w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             style={{ height: "200px" }}
//           />
//         </div>
//       </div>

//       <div className="flex justify-center mb-8">
//         <button
//           type="button"
//           onClick={handleSubmit}
//           disabled={isSubmitting}
//           className={`px-8 py-3 rounded-lg text-base font-medium transition duration-200 shadow-md ${
//             isSubmitting
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           }`}
//         >
//           {isSubmitting ? "Submitting..." : "Generate Report"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ImageAnalysis;
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useUser } from "../../UserContext";

// Helper function to convert a data URI to a Blob
const dataURLtoBlob = (dataurl) => {
  const arr = dataurl.split(',');
  const mimeMatch = arr[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : "";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

function ImageAnalysis() {
  const [finding, setFinding] = useState("");
  const [impression, setImpression] = useState("");
  const [selectedIndices, setSelectedIndices] = useState([]); // Track selected image indices
  const [images, setImages] = useState([]); // Fetched images (data URI strings)
  const [isLoading, setIsLoading] = useState(true); // Loader state for image fetch
  const [isSubmitting, setIsSubmitting] = useState(false); // Loader state for form submission

  const { topicId, courseId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();

  // Retrieve registration_id passed from previous page
  const registrationId = location.state?.registration_id || "";

  // Fetch images from the backend using the registrationId and show loader
  useEffect(() => {
    if (registrationId) {
      setIsLoading(true);
      fetch(`${process.env.REACT_APP_API_URL}/api/patient-scan-images/${registrationId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch images");
          }
          return response.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setImages(data);
          } else if (typeof data === "object" && data !== null) {
            const imageArray = Object.keys(data)
              .filter((key) => key.toLowerCase().includes("image"))
              .map((key) => data[key]);
            setImages(imageArray);
          } else {
            console.error("Unexpected data format for images:", data);
          }
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [registrationId]);

  const handleInputChange = (event) => {
    setFinding(event.target.value);
  };

  const handleImpressionChange = (event) => {
    setImpression(event.target.value);
  };

  // Toggle selection by image index
  const toggleImageSelection = (index) => {
    setSelectedIndices((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((i) => i !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  // Submit the selected images along with findings and impressions
  const handleSubmit = async () => {
    if (selectedIndices.length === 0) {
      alert("Please select at least one image for analysis.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("user_id", user?.id || "");
    formData.append("registration_id", registrationId);
    formData.append("finding", finding);
    formData.append("impression", impression);

    selectedIndices.forEach((index, idx) => {
      const dataURI = images[index];
      const blob = dataURLtoBlob(dataURI);
      const file = new File([blob], `image_${idx}.jpeg`, { type: blob.type });
      formData.append("selected_images", file);
    });

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/image-analysis`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit image analysis");
      }
      // Directly log the response JSON without assigning to a variable
      console.log("✅ Image Analysis Submission:", await response.json());
      alert("Submission successful!");
      navigate(
        `/student-dashboard/courses/ongoing/${topicId}/protocols/image-reporting/${courseId}`,
        { state: { registration_id: registrationId } }
      );
    } catch (error) {
      console.error("Error submitting image analysis:", error);
      alert("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Display loader while images are being fetched
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white rounded-lg shadow-sm p-6 max-w-sm w-full">
          <div className="flex flex-col items-center space-y-4">
            {/* Simple Loading Icon */}
            <div className="relative">
              <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin"></div>
            </div>

            {/* Loading Text */}
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-800">Loading Scans</h3>
              <p className="text-sm text-gray-500 mt-1">Please wait...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 mt-4">Image Analysis</h1>

      {/* Display Fetched Images with Manual Multiple Selection */}
      <div className="w-full max-w-6xl mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Images for Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((imgUrl, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedIndices.includes(index)
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-white"
              }`}
            >
              <img
                src={imgUrl}
                alt={`Scan ${index + 1}`}
                className="w-full h-auto max-h-64 object-contain rounded-md mb-3"
              />
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id={`image-${index}`}
                  checked={selectedIndices.includes(index)}
                  onChange={() => toggleImageSelection(index)}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor={`image-${index}`} className="ml-2 text-sm font-medium text-gray-700">
                  Select Image {index + 1}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Fields for Findings and Impression */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-6">
          <label htmlFor="findingInput" className="block text-lg font-medium text-gray-700 mb-2">
            Findings
          </label>
          <textarea
            id="findingInput"
            value={finding}
            onChange={handleInputChange}
            placeholder="Enter your finding here"
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            style={{ height: "200px" }}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="impressionInput" className="block text-lg font-medium text-gray-700 mb-2">
            Impression
          </label>
          <textarea
            id="impressionInput"
            value={impression}
            onChange={handleImpressionChange}
            placeholder="Enter your impression here"
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            style={{ height: "200px" }}
          />
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`px-8 py-3 rounded-lg text-base font-medium transition duration-200 shadow-md ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Generate Report"}
        </button>
      </div>
    </div>
  );
}

export default ImageAnalysis;