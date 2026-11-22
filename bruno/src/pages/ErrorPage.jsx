import AppearanceToggle from "../components/AppearanceToggle";
import AppNavbar from "../components/AppNavbar";
import { ScrollReveal } from "../components/ScrollBehaviour";


function ErrorPage() {
  return (
    <>
      <AppNavbar />
      <AppearanceToggle />
      <main className="home-page-main">
        <h1>404! 404! 404!</h1>
        <p><strong>The page you're looking for doesn't exist!</strong></p>
        <p>Return back to the Home Screen</p>
      </main>
    </>
  );
}

export default ErrorPage;