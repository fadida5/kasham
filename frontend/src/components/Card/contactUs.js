import React, { useEffect, useState, useMemo, useRef } from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import Mail from "assets/img/outlook.png"

import {
    Row,
    Col,
} from "reactstrap";

// const useStyles = makeStyles(dashboardStyle);
// const classes = useStyles();

const ContactUs = (props) => {
    return (
        <>
            <div>
                <Row>
                    <Col>
                        <Card style={{ borderRadius: "15px", backgroundColor: "#E8ECF1", boxShadow: "0 0 1rem 0", height: "210px", margin: "0" }}>
                            <CardHeader color="#BCB6FF" stats icon>
                                <Row>
                                    <Col>
                                        <h1 style={{ paddingTop: "20px", paddingBottom: "10px", textDecoration: "underline"}}>
                                            ניתן לפנות אלינו!
                                        </h1>
                                        <h2>
                                            מנחה בטיחות חילי, רנ"ג גיא דגן
                                        </h2>
                                        <h3 style={{ textAlign: "center", color: "blue"}}>
                                             052-945-3904
                                        </h3>
                                        <h2>
                                            קמ"ד בטיחות, רס"ל שובל לוגסי
                                        </h2>
                                        <h3 style={{ textAlign: "center", color: "blue"}}>
                                             054-227-1878
                                        </h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                        </Card>
                    </Col>
                    <Col>

                        <Card style={{ borderRadius: "15px", backgroundColor: "#E8ECF1", boxShadow: "0 0 1rem 0", height: "210px", margin: "0" }}>
                            <CardHeader color="#BCB6FF" stats icon>
                                <Row>
                                    <Col>

                                    <a href="mailto: team100@army.idf.il" rel="nofollow"><img src={Mail} style={{ height: "210px", float: "left", paddingLeft: "150px" }}></img></a>
                                    </Col>
                                </Row>
                            </CardHeader>
                        </Card>

                        {/* <Mail /> */}
                    </Col>
                </Row>

            </div>
        </>
    );
};

export default ContactUs;
