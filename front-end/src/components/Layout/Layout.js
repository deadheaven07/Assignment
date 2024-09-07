import React from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";

const Layout = (props) => {
  return (
    <div>
      {/* Always render the Header */}
      <Header />
      <main style={{ minHeight: "80vh" }}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
