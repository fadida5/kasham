import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Route, Switch, Redirect, withRouter } from "react-router-dom";

import AdminRoute from "auth/AdminRoute.js";
import GdodRoute from "auth/GdodRoute";
import HativaRoute from "auth/HativaRoute";
import OgdaRoute from "auth/OgdaRoute";
import PikodRoute from "auth/PikodRoute";

import SignInLayout from "layouts/general/authentication/SignInScreen";
import SignUpLayout from "layouts/general/authentication/SignUpScreen";
import ManageUsersLayout from "layouts/general/authentication/ManageUsersScreen";
import EditUserLayout from "layouts/general/authentication/EditUserScreen";

import AdminDashboardLayout from "layouts/general/adminscreens/AdminDashboardLayout";

import FormView from "views/forms/form";

import EditPikodScreen from "layouts/general/unitforms/editformslayouts/EditPikodScreen";
import EditOgdaScreen from "layouts/general/unitforms/editformslayouts/EditOgdaScreen";
import EditHativaScreen from "layouts/general/unitforms/editformslayouts/EditHativaScreen";

import AddPikodScreen from "layouts/general/unitforms/addformslayout/AddPikodScreen";
import AddOgdaScreen from "layouts/general/unitforms/addformslayout/AddOgdaScreen";
import AddHativaScreen from "layouts/general/unitforms/addformslayout/AddHativaScreen";
import AddGdodScreen from "layouts/general/unitforms/addformslayout/AddGdodScreen";


import GdodDashboardLayout from "layouts/general/usergdod/GdodDashboardLayout";
import HativaDashboardLayout from "layouts/general/userhativa/HativaDashboardLayout";
import OgdaDashboardLayout from "layouts/general/userogda/OgdaDashboardLayout";
import PikodDashboardLayout from "layouts/general/userpikod/PikodDashboardLayout";
import SuperAdminRoute from "auth/SuperAdminRoute";
import LoggedinLayout from "layouts/LoggedinLayout";

const routesgeneral =
    (
        <>
            <Route path="/signin" exact component={SignInLayout} />
            <Route path="/signup" exact component={SignUpLayout} />
            {/*///////////////////////////////////////////Admin User/////////////////////////////////////////////////*/}
           

            <SuperAdminRoute path="/admindashboard" exact component={AdminDashboardLayout} />
            {/*///////////////////////////////////////////Admin User/////////////////////////////////////////////////*/}
            <AdminRoute path="/manageusers" exact component={ManageUsersLayout} />
            <AdminRoute path="/edituser/:userid" exact component={EditUserLayout} />

            <AdminRoute path="/dashboard" exact component={AdminDashboardLayout} />
            {/*////////////////////////////////////////Gdod User//////////////////////////////////////////////////*/}
            <Route path="/form/:id" exact component={FormView}/>
            <GdodRoute path="/gdoddashboard/:gdodid" exact component={GdodDashboardLayout} />
            {/*////////////////////////////////////////Gdod User//////////////////////////////////////////////////*/}

            {/*////////////////////////////////////////Hativa User//////////////////////////////////////////////////*/}
            <HativaRoute path="/hativadashboard/:hativaid" exact component={HativaDashboardLayout} />
            {/*////////////////////////////////////////Hativa User//////////////////////////////////////////////////*/}

            {/*////////////////////////////////////////Ogda User//////////////////////////////////////////////////*/}
            <OgdaRoute path="/ogdadashboard/:ogdaid" exact component={OgdaDashboardLayout} />
            {/*////////////////////////////////////////Ogda User//////////////////////////////////////////////////*/}

            {/*////////////////////////////////////////Ogda User//////////////////////////////////////////////////*/}
            <PikodRoute path="/pikoddashboard/:pikodid" exact component={PikodDashboardLayout} />
            {/*////////////////////////////////////////Ogda User//////////////////////////////////////////////////*/}
        </>
    )

export default routesgeneral;