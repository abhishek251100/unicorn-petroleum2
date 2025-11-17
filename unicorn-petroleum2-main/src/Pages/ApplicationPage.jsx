import React from "react";
import ComingSoon from "../Common/ComingSoon";
import { useMetaTags } from "../hooks/useMetaTags";

const ApplicationPage = () => {
  useMetaTags(
    "Applications - Unicorn Petroleum | Industry Solutions",
    "Discover how Unicorn Petroleum products are used across pharmaceutical, cosmetic, personal care, bulk chemical, lubricants, agrochemical, and textile industries. Tailored solutions for diverse applications.",
    "petroleum applications, pharmaceutical applications, cosmetic applications, industrial applications, personal care, bulk chemicals, lubricants, agrochemical, textile industry"
  );

  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Applications" }
  ];
  return <ComingSoon title="Applications" breadcrumbs={breadcrumbs} />;
};

export default ApplicationPage;
