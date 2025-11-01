import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Common/Layout";
import HomeIndex from "../components/Home/HomeIndex";
import AboutPage from "../Pages/AboutPage";
import ProductPage from "../Pages/ProductPage";
import ApplicationPage from "../Pages/ApplicationPage";
import ReachPage from "../Pages/ReachPage";
import ContactPage from "../Pages/ContactPage";
import NotFoundPage from "../Pages/NotFoundPage";
import PetroleumJellyPage from "../components/productsPage/petroleumJelly/PetroleumJellyPage";
import WhiteMineralOilsPage from "../components/productsPage/whiteMineralOils/WhiteMineralOilsPage";
import StandardProductPage from "../components/productsPage/StandardProductPage";
// removed dynamic product fallback to avoid confusion and ensure explicit pages per product
import DPanthenolPage from "../components/productsPage/dPanthenol/DPanthenolPage";
import MicrocrystallineWaxPage from "../components/productsPage/microcrystallineWax/MicrocrystallineWaxPage";
import ParaffinWaxPage from "../components/productsPage/paraffinWax/ParaffinWaxPage";
import EmulsifyingWaxPage from "../components/productsPage/emulsifyingWax/EmulsifyingWaxPage";
import NaturalBeeswaxPage from "../components/productsPage/naturalBeeswax/NaturalBeeswaxPage";
import PreservativesPage from "../components/productsPage/preservatives/PreservativesPage";
import SurfactantsPage from "../components/productsPage/surfactants/SurfactantsPage";
import UVFiltersPage from "../components/productsPage/uvFilters/UVFiltersPage";

// About pages - consolidated into single page

// Applications pages
import PharmaceuticalPage from "../components/applicationPage/pharmaceutical/PharmaceuticalPage";
import CosmeticsPage from "../components/applicationPage/cosmetics/CosmeticsPage";
import BulkChemicalPage from "../components/applicationPage/bulkChemical/BulkChemicalPage";
import PersonalCarePage from "../components/applicationPage/personalCare/PersonalCarePage";
import LubricantsPage from "../components/applicationPage/lubricants/LubricantsPage";
import AgrochemicalPage from "../components/applicationPage/agrochemical/AgrochemicalPage";
import TextilePage from "../components/applicationPage/textile/TextilePage";

// Coming Soon pages
import ComingSoon from "../Common/ComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomeIndex /> },
      { path: "/about", element: <AboutPage /> },
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
      { path: "/products/d-panthenol", element: <DPanthenolPage /> },
      { path: "/products/preservatives", element: <PreservativesPage /> },
      { path: "/products/parabens", element: <StandardProductPage title="Parabens" description="" /> },
      { path: "/products/phenoxyethanol", element: <StandardProductPage title="Phenoxyethanol" description="" /> },
      { path: "/products/surfactants", element: <SurfactantsPage /> },
      { path: "/products/anionic", element: <StandardProductPage title="Anionic Surfactants" description="" /> },
      { path: "/products/nonionic", element: <StandardProductPage title="Nonionic Surfactants" description="" /> },
      { path: "/products/uv-filters", element: <UVFiltersPage /> },
      { path: "/products/organic-filters", element: <StandardProductPage title="Organic UV Filters" description="" /> },
      { path: "/products/inorganic-filters", element: <StandardProductPage title="Inorganic UV Filters" description="" /> },
      // Dynamic fallback removed: add explicit pages only
      { path: "/applications", element: <ApplicationPage /> },
      { path: "/applications/pharmaceutical", element: <PharmaceuticalPage /> },
      { path: "/applications/cosmetics", element: <CosmeticsPage /> },
      { path: "/applications/bulk-chemical", element: <BulkChemicalPage /> },
      { path: "/applications/personal-care", element: <PersonalCarePage /> },
      { path: "/applications/lubricants", element: <LubricantsPage /> },
      { path: "/applications/agrochemical", element: <AgrochemicalPage /> },
      { path: "/applications/textile", element: <TextilePage /> },
      { path: "/reach", element: <ReachPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/privacy", element: <ComingSoon title="Privacy Policy" breadcrumbs={[{ text: "Home", link: "/" }, { text: "Privacy Policy" }]} /> },
      { path: "/terms", element: <ComingSoon title="Terms of Use" breadcrumbs={[{ text: "Home", link: "/" }, { text: "Terms of Use" }]} /> },
      // 404 catch-all route
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function Routing() {
  return <RouterProvider router={router} />;
}

export default Routing;
