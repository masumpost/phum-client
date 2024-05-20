import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const sutdentPaths = [
    {
        name: "dashboard",
        path: "dashboard",
        element: <StudentDashboard></StudentDashboard>
    },
    {
        name: "Offer Courses",
        path: "offerd-courses",
        element: <OfferedCourse></OfferedCourse>
    }
]