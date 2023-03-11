import React from "react";

// core components
import Sidebar from "components/general/Sidebar/Sidebar.js";import WorkplanNavbar from "components/general/Navbars/WorkplanNavbar.js";

import OgdaDashboard from "views/general/userogda/OgdaDashboard";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";

function OgdaDashboardLayout(props) {
  // on this page, we need on the body tag the classes .rtl and .menu-on-right
  document.body.classList.add("rtl", "menu-on-right");

  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <React.Fragment>
          <div className="wrapper">
            <Sidebar rtlActive />
            <div className="main-panel">
              <WorkplanNavbar />
              <div className="content" style={{direction: 'rtl'}}>
                <OgdaDashboard />
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default OgdaDashboardLayout;
