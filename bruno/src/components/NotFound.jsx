import { useNavigate, useLocation } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  

  const handleGoBack = () => {
    const lastPath = sessionStorage.getItem("lastVisitedPath");

    if (lastPath) {
      navigate(lastPath, {replace: true});
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/home", { replace: true });
    }
  };

  return (
    <main className="error-page-main">
      <div className="error-center">
        <div className="error-content">
          <div className="error-warning">
            <h1 className="error-heading">404! 404! 404!</h1>
            <p className="error-subheading">
              The page you're looking for doesn't exist or was removed recently.
            </p>
          </div>
          <button className="error-back-button" onClick={handleGoBack}>Go Back</button>
        </div>
      </div>
    </main>
  );
}