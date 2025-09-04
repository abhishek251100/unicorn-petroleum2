import React from "react";
import ComingSoon from "../Common/ComingSoon";

const ApplicationPage = () => {
  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Applications" }
  ];
  return <ComingSoon title="Applications" breadcrumbs={breadcrumbs} />;
};

export default ApplicationPage;
