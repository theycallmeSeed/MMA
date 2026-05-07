import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "@/lib/analytics";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const url = location.pathname + location.search;
    pageview(url);
  }, [location.pathname, location.search]);

  return null;
};

export default AnalyticsTracker;
