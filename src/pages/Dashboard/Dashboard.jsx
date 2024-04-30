import { useLocalStorage } from "@/utils/hooks";
import React from "react";

const Dashboard = () => {
  const [hasLogin] = useLocalStorage("hasLogin", "UTMx");
  // const[ storage]
  //   const hasLogin = false;
  if (!hasLogin) {
    return (
      <Redirect to={signInPageUrl(`${location.pathname}${location.search}`)} />
    );
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
