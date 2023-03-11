import React, { useEffect, useState } from 'react';
import axios from 'axios'
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import { Link, withRouter, Redirect } from "react-router-dom";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  Collapse,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import UnitSelect from 'components/general/Select/UnitSelect'
import CarSelect from 'components/general/Select/CarSelect'

import SortingTable from "components/workplan/CarsSortingTable/SortingTable";

const OgdaCarsTable = ({ match }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [carsfilter, setCarsfilter] = useState({
    gdods: [],
    hativas: [],
    ogdas: ["test"],
    pikods: ["test"],
    //
    cars: [],
    mkats: [],
    mkabazs: [],
    magads: [],
    magadals: [],
  })
  //
  const [gdods, setGdods] = useState([]);
  const [hativas, setHativas] = useState([]);
  //
  const [cars, setCars] = useState([]);
  const [mkats, setMkats] = useState([]);
  const [mkabazs, setMkabazs] = useState([]);
  const [magads, setMagads] = useState([]);
  const [magadals, setMagadals] = useState([]);

  function handleChange(evt) {
    const value = evt.target.value;
    setCarsfilter({ ...carsfilter, [evt.target.name]: value });
  }

  function handleChange2(selectedOptions, name) {
    let tempselectedOptions = [];
    for (let i = 0; i < selectedOptions.length; i++) {
      tempselectedOptions.push(selectedOptions[i].value._id)
    }
    setCarsfilter({ ...carsfilter, [name]: tempselectedOptions });
  }

  function init() {
    loadHativas();
    loadMagadals();
  };

  const loadMagadals = () => {
    axios.get("http://localhost:8000/api/magadal",)
      .then(response => {
        setMagadals(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const loadMagads = async () => {
    let tempmagadalsmagads = [];
    for (let i = 0; i < carsfilter.magadals.length; i++) {
      await axios.get(`http://localhost:8000/api/magadsbymagadal/${carsfilter.magadals[i]}`)
        .then(response => {
          for (let j = 0; j < response.data.length; j++)
            tempmagadalsmagads.push(response.data[j])
        })
        .catch((error) => {
          console.log(error);
        })
    }
    setMagads(tempmagadalsmagads);
  }

  const loadMkabazs = async () => {
    let tempmagadsmkabazs = [];
    for (let i = 0; i < carsfilter.magads.length; i++) {
      await axios.get(`http://localhost:8000/api/mkabazsbymagad/${carsfilter.magads[i]}`)
        .then(response => {
          for (let j = 0; j < response.data.length; j++)
            tempmagadsmkabazs.push(response.data[j])
        })
        .catch((error) => {
          console.log(error);
        })
    }
    setMkabazs(tempmagadsmkabazs);
  }

  const loadMkats = async () => {
    let tempmkabazsmkats = [];
    for (let i = 0; i < carsfilter.mkabazs.length; i++) {
      await axios.get(`http://localhost:8000/api/mkatsbymkabaz/${carsfilter.mkabazs[i]}`)
        .then(response => {
          for (let j = 0; j < response.data.length; j++)
            tempmkabazsmkats.push(response.data[j])
        })
        .catch((error) => {
          console.log(error);
        })
    }
    setMkats(tempmkabazsmkats);
  }

  const loadCars = async () => {
    let tempmkatscars = [];
    for (let i = 0; i < carsfilter.mkats.length; i++) {
      await axios.get(`http://localhost:8000/api/carsbymkat/${carsfilter.mkats[i]}`)
        .then(response => {
          for (let j = 0; j < response.data.length; j++) {
            let tempcar = response.data[j];
            tempcar.name = tempcar._id;
            tempmkatscars.push(tempcar)
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }
    setCars(tempmkatscars);
  }

  const loadHativas = () => {
    axios.post("http://localhost:8000/api/hativa/hativasbyogdaid", { ogda: match.params.ogdaid })
      .then(response => {
        setHativas(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const loadGdods = async () => {
    let temphativasgdods = [];
    for (let i = 0; i < carsfilter.hativas.length; i++) {
      await axios.post("http://localhost:8000/api/gdod/gdodsbyhativaid", { hativa: carsfilter.hativas[i] })
        .then(response => {
          for (let j = 0; j < response.data.length; j++)
            temphativasgdods.push(response.data[j])
        })
        .catch((error) => {
          console.log(error);
        })
    }
    setGdods(temphativasgdods);
  }

  useEffect(() => {
    setMagads([]);
    setCarsfilter({ ...carsfilter, magads: [] });
    loadMagads();
  }, [carsfilter.magadals]);

  useEffect(() => {
    setMkabazs([]);
    setCarsfilter({ ...carsfilter, mkabazs: [] });
    loadMkabazs();
  }, [carsfilter.magads]);

  useEffect(() => {
    setMkats([]);
    setCarsfilter({ ...carsfilter, mkats: [] });
    loadMkats();
  }, [carsfilter.mkabazs]);

  useEffect(() => {
    setCars([]);
    setCarsfilter({ ...carsfilter, cars: [] });
    loadCars();
  }, [carsfilter.mkats]);
  //

  useEffect(() => {
    setGdods([]);
    setCarsfilter({ ...carsfilter, gdods: [] });
    loadGdods();
  }, [carsfilter.hativas]);

  useEffect(() => {
    init();
  }, []);

  return (
    <Card>
      <CardBody>
        <Row>
          <Button color="" onClick={toggle} style={{ marginBottom: '1rem' }}>מסננים</Button>
        </Row>
        <Collapse isOpen={isOpen}>
          <UnitSelect pagefilter={carsfilter} hativas={hativas} gdods={gdods} handleChange2={handleChange2} level={"ogda"} />
          <CarSelect pagefilter={carsfilter} magadals={magadals} magads={magads} mkabazs={mkabazs} mkats={mkats} cars={cars} handleChange2={handleChange2} />
        </Collapse>
        <SortingTable
          gdodsid={carsfilter.gdods} hativasid={carsfilter.hativas} ogdasid={[match.params.ogdaid]}
          carsid={carsfilter.cars} mkatsid={carsfilter.mkats} mkabazsid={carsfilter.mkabazs} magadsid={carsfilter.magads} magadalsid={carsfilter.magadals}
        />
      </CardBody>
    </Card>
  );
}
export default withRouter(OgdaCarsTable);;