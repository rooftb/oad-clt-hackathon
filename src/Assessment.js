import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Container, Row, Col, Badge
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Assessment extends React.Component {
  state = {
    value: 'one'
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  constructor(props) {
    super(props);

    this.setState({

    });
  }

  componentWillMount() {
    this.setState({
      insurance: this.props.insurance,
      dsm: this.props.dsm,
      discharge: this.props.discharge,
      stayDuration: this.props.stayDuration,
      firstUse: this.props.firstUse
    });
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>
              <h2 className="lifeTitle">  <FontAwesomeIcon icon="notes-medical" className="check" /> Assessment</h2>
            </CardTitle>
            <Container>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Insurance</span><br />
                  <select className="addictDesc">
                    <option>Private</option>
                    <option>Medicaid</option>
                    <option>Medicare</option>
                    <option>None</option>
                  </select>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Diagnosis</span><br />
                  <select className="addictDesc">
                    <option>None</option>
                    <option>Alcohol Abuse</option>
                    <option>Cannabis Abuse</option>
                    <option>Opiod Abuse</option>
                    <option>Cocaine Abuse</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Marital Status</span><br />
                  <select className="addictDesc">
                    <option>Never Married</option>
                    <option>Married</option>
                    <option>Separated</option>
                    <option>Divorced / Widowed</option>
                  </select>
                </Col>
              </Row>
            </Container>
          </CardBody >
        </Card >
      </div >
    );
  }
}

export default Assessment;
