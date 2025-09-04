import React from "react";
import ComingSoon from "../Common/ComingSoon";

const ReachPage = () => {
  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Global Reach" }
  ];
  return <ComingSoon title="Global Reach" breadcrumbs={breadcrumbs} />;
};

export default ReachPage;
