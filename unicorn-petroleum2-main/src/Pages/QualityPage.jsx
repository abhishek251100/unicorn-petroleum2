import React from "react";
import ComingSoon from "../Common/ComingSoon";

const QualityPage = () => {
  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Quality" }
  ];
  return <ComingSoon title="Quality" breadcrumbs={breadcrumbs} />;
};

export default QualityPage;
