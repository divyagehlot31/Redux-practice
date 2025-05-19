import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import { ROUTES } from "../const/Path";

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <AppLayout />,
    children: [
      { path: ROUTES.ROOT, element: <Home /> },
    //   { path: ROUTES.ABOUT, element: <About /> },
    //   { path: ROUTES.CONTACT, element: <Contact /> },
    //   { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
