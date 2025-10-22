import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import QuoteFormSection from "./QuoteFormSection";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();

  const pathname = location.pathname;

  const isHomePage = pathname === "/"; 

  // Scroll to top on every route change
 useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="app-layout">
      <Navbar />
      <main className="">
        <Outlet />
      </main>

      {isHomePage ? <QuoteFormSection /> : null}
      <Footer />
    </div>
  );
}

export default Layout;
