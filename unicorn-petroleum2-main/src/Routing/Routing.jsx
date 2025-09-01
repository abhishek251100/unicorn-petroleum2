import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Common/Layout";
import HomeIndex from "../components/Home/HomeIndex";
import AboutPage from "../Pages/AboutPage";
import ProductPage from "../Pages/ProductPage";
import ApplicationPage from "../Pages/ApplicationPage";
import QualityPage from "../Pages/QualityPage";
import ReachPage from "../Pages/ReachPage";
import ContactPage from "../Pages/ContactPage";
import PetroleumJellyPage from "../components/productsPage/petroleumJelly/PetroleumJellyPage";
import WhiteMineralOilsPage from "../components/productsPage/whiteMineralOils/WhiteMineralOilsPage";

// About pages
import CorporateProfilePage from "../components/aboutUs/corporateProfile/CorporateProfilePage";
import ValuesPage from "../components/aboutUs/values/ValuesPage";
import VisionMissionPage from "../components/aboutUs/visionMission/VisionMissionPage";
import CertificationsPage from "../components/aboutUs/certifications/CertificationsPage";

// Applications pages
import PharmaceuticalPage from "../components/applicationPage/pharmaceutical/PharmaceuticalPage";
import CosmeticsPage from "../components/applicationPage/cosmetics/CosmeticsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomeIndex /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/about/profile", element: <CorporateProfilePage /> },
      { path: "/about/values", element: <ValuesPage /> },
      { path: "/about/vision-mission", element: <VisionMissionPage /> },
      { path: "/about/certifications", element: <CertificationsPage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/products/petroleum-jelly", element: <PetroleumJellyPage /> },
      { path: "/products/white-mineral-oils", element: <WhiteMineralOilsPage /> },
      { path: "/applications", element: <ApplicationPage /> },
      { path: "/applications/pharmaceutical", element: <PharmaceuticalPage /> },
      { path: "/applications/cosmetics", element: <CosmeticsPage /> },
      { path: "/quality", element: <QualityPage /> },
      { path: "/reach", element: <ReachPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

function Routing() {
  return <RouterProvider router={router} />;
}

export default Routing;
