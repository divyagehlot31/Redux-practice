import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import { ROUTES } from "../const/Path";
import RqPage from "../pages/RqPage";

const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <AppLayout />,
    children: [
      { path: ROUTES.ROOT, element: <Home /> },
      { path: ROUTES.RqPage, element: <RqPage /> },

      //   { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
