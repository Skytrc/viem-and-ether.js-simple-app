import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Lesson1 from "../lesson/lesson1";
import Lesson2 from "../lesson/lesson2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/lesson1",
        element: <Lesson1 />
    },
    {
        path: "/lesson2",
        element: <Lesson2 />
    }
])

export default router;