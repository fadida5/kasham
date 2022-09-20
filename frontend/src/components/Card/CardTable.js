import React, { useEffect, useState, useMemo, useRef } from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import { Link } from "react-router-dom";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(dashboardStyle);
// const classes = useStyles();

const CardTable = (props) => {
  return (
    <>
      <GridItem xs={8} sm={4} md={2}>
        <Link to={`/${props.name[1]}`}>
          <Card style={{ borderRadius: "15px", backgroundColor: "#dee9ed", boxShadow: "0 0 1rem 0", height: "5rem" }}>
            <CardHeader color="#BCB6FF" stats icon>
              {/* <CardIcon color="#BCB6FF">
                <VerifiedUserIcon />
              </CardIcon> */}
              <h1
                style={{ color: "#000", fontSize: "20px", textAlign: "center" }}
                // className={classes.cardCategory}
              >
                <br />
                {props.name[0]}
              </h1>
            </CardHeader>
          </Card>
        </Link>
      </GridItem>
    </>
  );
};

export default CardTable;
