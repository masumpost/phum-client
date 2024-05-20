import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPtahs = [
    {
        name: "dashborad",
        path: "dashborad",
        element: <FacultyDashboard></FacultyDashboard>
    },
    {
        name: "Offered Courses",
        path: "offered-courses",
        element: <OfferedCourse></OfferedCourse>
    }
];