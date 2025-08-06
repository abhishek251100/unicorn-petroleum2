import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Common/Layout";
import HomeIndex from "../components/Home/HomeIndex";
import AboutPage from "../Pages/AboutPage";
import ProductPage from "../Pages/ProductPage";
import ApplicationPage from "../Pages/ApplicationPage";
import QualityPage from "../Pages/QualityPage";
import ReachPage from "../Pages/ReachPage";
import ContactPage from "../Pages/ContactPage";
import PetroleumJellyPage from "../components/productsPage/PetroleumJellyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeIndex />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/products/petroleum-jelly",
        element: <PetroleumJellyPage />,
      },
      {
        path: "/applications",
        element: <ApplicationPage />,
      },
      {
        path: "/quality",
        element: <QualityPage />,
      },
      {
        path: "/reach",
        element: <ReachPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

function Routing() {
  return <RouterProvider router={router} />;
}

export default Routing;
