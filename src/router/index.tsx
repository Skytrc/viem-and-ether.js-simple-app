import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Lesson1 from "../lesson/lesson1";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/lesson1",
        element: <Lesson1 />
    }
])

export default router;