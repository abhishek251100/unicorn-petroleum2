import React from "react";
import ComingSoon from "../Common/ComingSoon";

const ContactPage = () => {
  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Contact" }
  ];
  return <ComingSoon title="Contact" breadcrumbs={breadcrumbs} />;
};

export default ContactPage;
