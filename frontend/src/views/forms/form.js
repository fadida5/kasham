import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
// import { singleFileUpload } from "../../../../data/api";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Container,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Alert,
    Spinner,
    Label,
    Col,
} from "reactstrap";
import axios from "axios";
import history from "history.js";
import { produce } from 'immer';
import { generate } from 'shortid';
import { toast } from "react-toastify";
import { isAuthenticated } from "auth";

const FormCreator = ({ match }) => {
    const [state, setState] = useState({});
    const [fieldKey, setFieldKey] = useState([])
    const [categoryKey, setCategoryKey] = useState([])

    async function init() {
    }

    function handleChange(evt) {
        const value = evt.target.value;
        setState({ ...state, [evt.target.name]: value });
    }

    const clickSubmit = async (event) => {
        CheckFormData();
    };

    const CheckFormData = () => {
        let flag = true;
        let error = "";

        if (flag == true) {
            SubmitData();
            toast.success("הטופס עודכן בהצלחה");
        }
        else {
            toast.error(error)
        }
    }

    async function SubmitData() {
        let tempstate={...state}
        tempstate.category=categoryKey;
        tempstate.fields=fieldKey;
        if (match.params.id == "0") {
            let result = await axios.post(
                "http://localhost:8000/api/form",
                tempstate
            );
        } else {
            let tempWithDeleteId = tempstate;
            delete tempWithDeleteId._id;
            let result = await axios.put(
                `http://localhost:8000/api/form/${match.params.id}`,
                tempWithDeleteId
            );
        }
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <Card>
            <CardHeader style={{ direction: "rtl" }}>
                <CardTitle
                    tag="h3"
                    style={{ direction: "rtl", textAlign: "center", fontWeight: "bold" }}
                >
                    טופס יצירת טופס
                </CardTitle>
                {/*headline*/}
            </CardHeader>
            <CardBody style={{ direction: "rtl" }}>
                <Container>
                    <Row>
                    <Col xs={12} md={4}>
                            <div style={{ textAlign: "right", padding: "10px 0px 10px 0px", fontWeight: "bold", fontSize: '20px' }}>
                                שם הטופס
                            </div>
                            <Input value={state.formName} name={"formName"} type="text" placeholder="שם הטופס"  onChange={handleChange} style={{width: "8rem", padding: '0', margin: '0'}}/>
                            </Col>
                            </Row>
                            <Row>
                        <Col xs={12} md={4}>
                            <div style={{ textAlign: "right", padding: "10px 0px 10px 0px", fontWeight: "bold", fontSize: '20px' }}>
                                קטגוריות
                            </div>
                            <Row>
                                {categoryKey.length == 0 ?
                                    <>
                                        <Button style={{ float: "right" }} type="button" onClick={() => {
                                            setCategoryKey(currentSpec => [
                                                ...currentSpec,
                                                {
                                                    id: generate(),
                                                    category: "",
                                                    categoryIndex: "",
                                                }
                                            ])
                                        }}>
                                            הוסף קטגוריה
                                        </Button>
                                    </>
                                    :
                                    categoryKey.map((p, index) => {
                                        return (
                                            <div>
                                                {index == 0 ?
                                                    <Row>
                                                        <Button style={{ float: "right" }} type="button" onClick={() => {
                                                            setCategoryKey(currentSpec => [
                                                                ...currentSpec,
                                                                {
                                                                    id: generate(),
                                                                    category: "",
                                                                    categoryIndex: "",
                                                                }
                                                            ])
                                                        }}>
                                                            הוסף קטגוריה
                                                        </Button>
                                                    </Row>
                                                    : null}

                                                <Row>
                                                    <Col xs={12} md={4}>
                                                        <div>
                                                            <p style={{ margin: '10px 0px 0px 0px', float: 'right', width: '8rem' }}></p>
                                                            <Input onChange={(e) => {
                                                                const category = e.target.value
                                                                setCategoryKey(currentSpec =>
                                                                    produce(currentSpec, v => {
                                                                        v[index].category = category
                                                                    })
                                                                )
                                                                // handleChange
                                                            }}
                                                                value={p.category} type="text" placeholder="קטגוריה" 
                                                                style={{width: "8rem", padding: '0', margin: '0'}}/>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} md={4}>
                                                        <div>
                                                            <p style={{ margin: '10px 0px 0px 0px', float: 'right', width: '8rem' }}></p>
                                                            <Input onChange={(e) => {
                                                                const categoryIndex = e.target.value
                                                                setCategoryKey(currentSpec =>
                                                                    produce(currentSpec, v => {
                                                                        v[index].categoryIndex = categoryIndex
                                                                    })
                                                                )
                                                                // handleChange
                                                            }}
                                                                value={p.categoryIndex} type="number" placeholder="סדר" 
                                                                style={{width: "8rem", padding: '0', margin: '0'}}/>
                                                        </div>
                                                    </Col>
                                           

                                                <Button type="button" style={{float: "left", marginRight: "30px"}} onClick={() => {
                                                    setCategoryKey(currentSpec => currentSpec.filter(x => x.id !== p.id))
                                                }

                                                }>
                                                    x</Button> 
                                                        </Row>
                                            </div>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <div style={{ textAlign: "right", padding: "10px 0px 10px 0px", fontWeight: "bold", fontSize: '20px' }}>
                                שדות
                            </div>
                            <Row>
                                {fieldKey.length == 0 ?
                                    <>
                                        <Button style={{ float: "right" }} type="button" onClick={() => {
                                            setFieldKey(currentSpec => [
                                                ...currentSpec,
                                                {
                                                    id: generate(),
                                                    field: "",
                                                    categoryId: "",
                                                    type: "",
                                                    percent: "",
                                                    fieldIndex: "",
                                                }
                                            ])
                                        }}>
                                            הוסף שדה
                                        </Button>
                                    </>
                                    :
                                    fieldKey.map((p, index) => {
                                        return (
                                            <div>
                                                {index == 0 ?
                                                    <Row>
                                                        <Button style={{ float: "right" }} type="button" onClick={() => {
                                                            setFieldKey(currentSpec => [
                                                                ...currentSpec,
                                                                {
                                                                    id: generate(),
                                                                    field: "",
                                                                    categoryId: "",
                                                                    type: "",
                                                                    percent: "",
                                                                    fieldIndex: "",
                                                                }
                                                            ])
                                                        }}>
                                                            הוסף שדה
                                                        </Button>
                                                    </Row>
                                                    : null}

                                                <Row>
                                                    <Col xs={12} md={4}>
                                                        <div>
                                                            <p style={{ margin: '10px 0px 0px 0px', float: 'right', width: '8rem' }}></p>
                                                            <Input onChange={(e) => {
                                                                const field = e.target.value
                                                                setFieldKey(currentSpec =>
                                                                    produce(currentSpec, v => {
                                                                        v[index].field = field
                                                                    })
                                                                )
                                                            }}
                                                                value={p.field} type="text" placeholder="שדה" 
                                                                style={{width: "8rem", padding: '0', margin: '0'}}/>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} md={4}>
                                                        <div>
                                                            <p style={{ margin: '10px 0px 0px 0px', float: 'right', width: '8rem' }}></p>
                                                            <Input onChange={(e) => {
                                                                const categoryId = e.target.value
                                                                setFieldKey(currentSpec =>
                                                                    produce(currentSpec, v => {
                                                                        v[index].categoryId = categoryId
                                                                    })
                                                                )
                                                            }}
                                                                value={p.categoryId} type="number" placeholder="קטגוריה" 
                                                                style={{width: "8rem", padding: '0', margin: '0'}}/>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} md={4}>
                                                        <div>
                                                            <p style={{ margin: '10px 0px 0px 0px', float: 'right', width: '8rem' }}></p>
                                                            <Input onChange={(e) => {
                                                                const type = e.target.value
                                                                setFieldKey(currentSpec =>
                                                                    produce(currentSpec, v => {
                                                                        v[index].type = type
                                                                    })
                                                                )
                                                            }}
                                                                value={p.type} type="number" placeholder="סוג" 
                                                                style={{width: "8rem", padding: '0', margin: '0'}}/>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} md={4}>
                                                        <div>
                                                            <p style={{ margin: '10px 0px 0px 0px', float: 'right', width: '8rem' }}></p>
                                                            <Input onChange={(e) => {
                                                                const percent = e.target.value
                                                                setFieldKey(currentSpec =>
                                                                    produce(currentSpec, v => {
                                                                        v[index].percent = percent
                                                                    })
                                                                )
                                                            }}
                                                                value={p.percent} type="number" placeholder="אחוז" 
                                                                style={{width: "8rem", padding: '0', margin: '0'}}/>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} md={4}>
                                                        <div>
                                                            <p style={{ margin: '10px 0px 0px 0px', float: 'right', width: '8rem' }}></p>
                                                            <Input onChange={(e) => {
                                                                const fieldIndex = e.target.value
                                                                setFieldKey(currentSpec =>
                                                                    produce(currentSpec, v => {
                                                                        v[index].fieldIndex = fieldIndex
                                                                    })
                                                                )
                                                            }}
                                                                value={p.fieldIndex} type="number" placeholder="סדר" 
                                                                style={{width: "8rem", padding: '0', margin: '0'}}/>
                                                        </div>
                                                    </Col>
                                           

                                                <Button type="button" style={{float: "left", marginRight: "30px"}} onClick={() => {
                                                    setFieldKey(currentSpec => currentSpec.filter(x => x.id !== p.id))
                                                }

                                                }>
                                                    x</Button> 
                                                        </Row>
                                            </div>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                    <hr style={{ borderTop: "1px solid darkGray" }} />
                    <Row>
                        <Col xs={12} md={4}></Col>
                        <Col xs={12} md={4}>
                            <Button
                                type="primary"
                                className="btn btn-info"
                                style={{ width: "100%" }}
                                onClick={() => clickSubmit()}
                            >
                          צור טופס
                            </Button>
                        </Col>
                        <Col xs={12} md={4}></Col>
                    </Row>
                </Container>
            </CardBody>
        </Card>
    );
};
export default withRouter(FormCreator);
