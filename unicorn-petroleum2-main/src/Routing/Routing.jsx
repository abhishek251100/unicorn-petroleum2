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
import StandardProductPage from "../components/productsPage/StandardProductPage";
import MicrocrystallineWaxPage from "../components/productsPage/microcrystallineWax/MicrocrystallineWaxPage";
import ParaffinWaxPage from "../components/productsPage/paraffinWax/ParaffinWaxPage";
import EmulsifyingWaxPage from "../components/productsPage/emulsifyingWax/EmulsifyingWaxPage";
import NaturalBeeswaxPage from "../components/productsPage/naturalBeeswax/NaturalBeeswaxPage";

// About pages
import CorporateProfilePage from "../components/aboutUs/corporateProfile/CorporateProfilePage";
import ValuesPage from "../components/aboutUs/values/ValuesPage";
import VisionMissionPage from "../components/aboutUs/visionMission/VisionMissionPage";
import CertificationsPage from "../components/aboutUs/certifications/CertificationsPage";

// Applications pages
import PharmaceuticalPage from "../components/applicationPage/pharmaceutical/PharmaceuticalPage";
import CosmeticsPage from "../components/applicationPage/cosmetics/CosmeticsPage";

// Coming Soon pages
import ComingSoon from "../Common/ComingSoon";

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
      { path: "/products/light-mineral-oil", element: <StandardProductPage title="Light Mineral Oil" description="" /> },
      { path: "/products/heavy-mineral-oil", element: <StandardProductPage title="Heavy Mineral Oil" description="" /> },
      { path: "/products/microcrystalline-wax", element: <MicrocrystallineWaxPage /> },
      { path: "/products/paraffin-wax", element: <ParaffinWaxPage /> },
      { path: "/products/soft-paraffin", element: <StandardProductPage title="Soft Paraffin" description="" /> },
      { path: "/products/hard-paraffin", element: <StandardProductPage title="Hard Paraffin" description="" /> },
      { path: "/products/natural-beeswax", element: <NaturalBeeswaxPage /> },
      { path: "/products/emulsifying-wax", element: <EmulsifyingWaxPage /> },
      { path: "/products/d-panthenol", element: <StandardProductPage title="D-Panthenol" description="" /> },
      { path: "/products/preservatives", element: <StandardProductPage title="Preservatives" description="" /> },
      { path: "/products/parabens", element: <StandardProductPage title="Parabens" description="" /> },
      { path: "/products/phenoxyethanol", element: <StandardProductPage title="Phenoxyethanol" description="" /> },
      { path: "/products/surfactants", element: <StandardProductPage title="Surfactants" description="" /> },
      { path: "/products/anionic", element: <StandardProductPage title="Anionic Surfactants" description="" /> },
      { path: "/products/nonionic", element: <StandardProductPage title="Nonionic Surfactants" description="" /> },
      { path: "/products/uv-filters", element: <StandardProductPage title="UV Filters" description="" /> },
      { path: "/products/organic-filters", element: <StandardProductPage title="Organic UV Filters" description="" /> },
      { path: "/products/inorganic-filters", element: <StandardProductPage title="Inorganic UV Filters" description="" /> },
      { path: "/applications", element: <ApplicationPage /> },
      { path: "/applications/pharmaceutical", element: <PharmaceuticalPage /> },
      { path: "/applications/cosmetics", element: <CosmeticsPage /> },
      { path: "/quality", element: <QualityPage /> },
      { path: "/reach", element: <ReachPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/privacy", element: <ComingSoon title="Privacy Policy" breadcrumbs={[{ text: "Home", link: "/" }, { text: "Privacy Policy" }]} /> },
      { path: "/terms", element: <ComingSoon title="Terms of Use" breadcrumbs={[{ text: "Home", link: "/" }, { text: "Terms of Use" }]} /> },
    ],
  },
]);

function Routing() {
  return <RouterProvider router={router} />;
}

export default Routing;
