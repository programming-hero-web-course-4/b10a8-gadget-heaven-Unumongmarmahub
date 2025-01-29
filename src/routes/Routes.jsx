import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Result from "../layouts/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Result />,
  },
]);

export default router;
