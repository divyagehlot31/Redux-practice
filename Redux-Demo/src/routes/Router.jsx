import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../Pages/Home";
import { ROUTES } from "../const/Path";
import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <AppLayout />,
    children: [
      { path: ROUTES.ROOT, element: <Home /> },
      { path: ROUTES.ABOUT, element: <About /> },
    //   { path: ROUTES.CONTACT, element: <Contact /> },
    //   { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
