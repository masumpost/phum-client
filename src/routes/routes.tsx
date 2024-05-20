import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
// import { facultyPtahs } from "./faculty.routes";
// import { sutdentPaths } from "./student.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { facultyPtahs } from "./faculty.routes";
import { sutdentPaths } from "./student.routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/admin",
        element: <App />,
        children: routesGenerator(adminPaths)
    },
    {
        path: "/faculty",
        element: <App />,
        children: routesGenerator(facultyPtahs)
    },
    {
        path: "/student",
        element: <App />,
        children: routesGenerator(sutdentPaths)
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
]);

export default router;