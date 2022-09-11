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
    const [forms, setForms] = useState({});

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
            {/* {forms.map((form) => (
            <h1>
                {form.formName}
            </h1>
            ))}  */}
       </div>
    );
};
export default withRouter(AllForms);
