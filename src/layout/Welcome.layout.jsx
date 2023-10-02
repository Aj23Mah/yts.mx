import React from "react";

import Nav from '../components/partials/Nav'
import PrimaryRoute from "../routes";

const WelcomeLayout = () => {
  return <>
    <Nav />
    <div>
      <PrimaryRoute />
    </div>
  </>
};

export default WelcomeLayout;
