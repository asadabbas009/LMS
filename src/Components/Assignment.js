// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, } from "react-router-dom";

// const Assignments = () => {
//   const { topicId } = useParams();
//   // const location = useLocation();
//   const navigate = useNavigate();

//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // const topicTitle = location.state?.title || "Unknown Topic";

//   useEffect(() => {
//     const fetchCourses = async () => {
//       setLoading(true);
//       try {
//         const apiUrl = process.env.REACT_APP_API_URL; // Using the environment variable
//         const response = await fetch(`${apiUrl}/api/courses/${topicId}`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch courses: ${response.statusText}`);
//         }
//         const data = await response.json();
//         setCourses(data);
//       } catch (err) {
//         console.error("Error fetching courses:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, [topicId]);

//   const handleSeeOverview = (courseId, courseTitle) => {
//     navigate(`/student-dashboard/courses/ongoing/${topicId}/protocols/course-overview/${courseId}`, {
//       state: { title: courseTitle }
//     });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-xl md:text-2xl lg:text-3xl text-blue-600 font-bold text-center mb-6">
//         Courses 
//       </h1>
//       {loading && <p className="text-center text-gray-600">Loading courses...</p>}
//       {error && <p className="text-red-500 text-center">{error}</p>}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {courses.length > 0 ? (
//           courses.map((course) => (
//             <div key={course.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg bg-gradient-hero transition-shadow duration-300">
//               <h2 className="text-[200px] md:text-xl text-white font-semibold mb-2">{course.title}</h2>
//               <p className="text-white">{course.description}</p>
//               <button
//                 className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-green-600 transition-colors duration-300 mt-4"
//                 onClick={() => handleSeeOverview(course.id, course.title)}
//               >
//                 See Overview
//               </button>
//             </div>
//           ))
//         ) : (!loading && !error && <p className="text-gray-600 text-center col-span-full">
//             No courses available for this topic.
//           </p>)
//         }
//       </div>
//     </div>
//   );
// };

// export default Assignments;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from '../UserContext'; // Adjust the path as needed

const Assignments = () => {
  const { topicId } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssignedCourses = async () => {
      setLoading(true);
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await fetch(`${apiUrl}/api/student/courses/${topicId}/${user.id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch courses: ${response.statusText}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        console.error("Error fetching assigned courses:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (topicId && user && user.id) {
      fetchAssignedCourses();
    }
  }, [topicId, user]);

  const handleSeeOverview = (courseId, courseTitle) => {
    navigate(`/student-dashboard/courses/ongoing/${topicId}/protocols/course-overview/${courseId}`, {
      state: { title: courseTitle }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-blue-600 font-bold text-center mb-6">
        Courses 
      </h1>
      {loading && <p className="text-center text-gray-600">Loading courses...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg bg-gradient-hero transition-shadow duration-300"
            >
              <h2 className="text-[200px] md:text-xl text-white font-semibold mb-2">
                {course.title}
              </h2>
              <p className="text-white">{course.description}</p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-green-600 transition-colors duration-300 mt-4"
                onClick={() => handleSeeOverview(course.id, course.title)}
              >
                See Overview
              </button>
            </div>
          ))
        ) : (!loading && !error && (
          <p className="text-gray-600 text-center col-span-full">
            No courses assigned for this module.
          </p>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
