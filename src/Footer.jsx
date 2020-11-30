import React from "react";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="w-100 bg-light text-center">
      <p>All rights reserved @{currYear}</p>
    </footer>
  );
};

export default Footer;
