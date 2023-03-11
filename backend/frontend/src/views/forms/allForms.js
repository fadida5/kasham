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

const AllForms = ({ match }) => {
    const [forms, setForms] = useState([]);

    async function init() {
        loadForms();
    }

    const loadForms = () => {
        axios
          .get("http://localhost:8000/api/form")
          .then((response) => {
            let tempdata = response.data
            setForms(tempdata);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    useEffect(() => {
        init();
        console.log(forms)
    }, []);

    return (
       <div>
        <Row>
            {forms.map((form) => (
            <Card style={{ borderRadius: "15px", backgroundColor: "#dee9ed", boxShadow: "0 0 1rem 0", height: "15rem", width: "15rem", margin: "1rem" }}>
            <CardHeader color="#BCB6FF" stats icon>
                <h1>{form.formName}</h1>
                {form.fields ? form.fields.map((field) => (
                    <h2>{field.field}</h2>
                 )):null} 
                {form.category ? form.category.map((category) => (
                    <h2>{category.category}</h2>
                 )):null} 
            </CardHeader>
            </Card>
            ))} 
            </Row>
       </div>
    );
};
export default withRouter(AllForms);
