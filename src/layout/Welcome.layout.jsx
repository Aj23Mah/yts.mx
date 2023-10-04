import React from "react";

import Nav from '../components/partials/Nav'
import PrimaryRoute from "../routes";
import Footer from "../components/partials/Footer";

const WelcomeLayout = () => {
  return <>
    <Nav />
    <div>
      <PrimaryRoute />
    </div>
    <Footer />
  </>
};

export default WelcomeLayout;
