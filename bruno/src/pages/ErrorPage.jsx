import AppearanceToggle from "../components/AppearanceToggle";
import AppNavbar from "../components/AppNavbar";
import NotFound from "../components/NotFound";
import "../style/ErrorPage.css";
import { useLocation } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <NotFound />
    </>
  );
}

export default ErrorPage;