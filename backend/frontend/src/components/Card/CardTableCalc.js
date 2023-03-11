import React, { useEffect, useState, useMemo, useRef } from "react";
import Axios from "axios";
import CertificationIcon from "@material-ui/icons/VerifiedUser";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import { Link } from "react-router-dom";
import moment from "moment";

// const useStyles = makeStyles(dashboardStyle);
// const classes = useStyles();

const CardTableCalc = (props) => {
  const [validData, setValidData] = useState("");
  const [expiredData, setExpiredData] = useState("");
  const [isExpiredData, setIsExpiredData] = useState("");
  const [isAlertData, setIsAlertData] = useState("");

  const DataLoad = () => {
    const validity = props.name[3];
    Axios.get(`http://localhost:8000/api/${props.name[4]}`).then((response) => {
      // console.log(response.data);
      // console.log(response.data[0].certificationValidity);
      var valid = 0;
      var expired = 0;
      var isExpired = false;
      var isAlert = false;
      var today = new Date();
      for (var i = 0; i < response.data.length; i++) {
        console.log(validity);
        if (props.name[3] == "certificationValidity") {
          if (Date.parse(response.data[i].certificationValidity) > today) {
            valid++;
          } else {
            expired++;
            isExpired = true;
          }
          if (
            moment(response.data[i].certificationValidity).diff(
              moment(today),
              "days"
            ) < 14
          ) {
            isAlert = true;
          }
        }
        if (props.name[3] == "nextTestDate") {
          if (Date.parse(response.data[i].nextTestDate) > today) {
            valid++;
          } else {
            expired++;
            isExpired = true;
          }
          if (
            moment(response.data[i].nextTestDate).diff(moment(today), "days") <
            14
          ) {
            isAlert = true;
          }
        }
        if (props.name[3] == "nextMonitoringDate") {
          if (Date.parse(response.data[i].nextMonitoringDate) > today) {
            valid++;
          } else {
            expired++;
            isExpired = true;
          }
          if (
            moment(response.data[i].nextMonitoringDate).diff(
              moment(today),
              "days"
            ) < 14
          ) {
            isAlert = true;
          }
        }
      }
      // console.log(valid);
      // console.log(isAlert);
      setIsAlertData(isAlert);
      setExpiredData(expired);
      setValidData(valid);
      setIsExpiredData(isExpired);
      // console.log("test")
    });
  };

  useEffect(() => {
    DataLoad();
  }, []);

  return (
    <>
      <GridItem xs={12} sm={6} md={3}>
        <Link to={props.name[1]}>
          <Card
            style={{
              color: "#000",
              height: "15rem",
              borderRadius: "15px",
              backgroundColor: "#B5CFD8",
              boxShadow: "0 0 1rem 0",
              overflow: "auto",
            }}
          >
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <CertificationIcon />
              </CardIcon>
              <br />
              <h3
                style={{ color: "black", fontSize: "26px", fontWeight: "bold" }}
                // className={classes.cardCategory}
              >
                {props.name[0]}
              </h3>
              <h3 style={{ color: "black", fontSize: "20px" }}>
                {validData}/{validData + expiredData} <small> בתוקף</small>
              </h3>
            </CardHeader>
            {isExpiredData ? (
              <CardFooter stats>
                <div>
                  {/* <Danger>
                        <Warning />
                      </Danger> */}
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    style={{ color: "red", fontSize: "22px" }}
                  >
                    {props.name[2]}
                  </a>
                </div>
              </CardFooter>
            ) : (
              <CardFooter stats>
                <div style={{ color: "black", fontSize: "22px" }}>
                  {/* <Check /> */}
                  לא נדרשת פעולה מיידית
                </div>
              </CardFooter>
            )}

            {isAlertData ? (
              <CardFooter stats>
                <div>
                  {/* <Danger>
                        <DateRange />
                      </Danger> */}
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    style={{ color: "crimson ", fontSize: "22px" }}
                  >
                    הסמכות מסוימות יפוגו בשבועיים הקרובים
                  </a>
                </div>
              </CardFooter>
            ) : (
              <></>
            )}
          </Card>
        </Link>
      </GridItem>
    </>
  );
};

export default CardTableCalc;
