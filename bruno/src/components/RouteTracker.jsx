import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/404") {
      sessionStorage.setItem("lastVisitedPath", location.pathname + location.search);
    }
  }, [location]);

  return null;
}