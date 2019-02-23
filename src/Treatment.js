import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Container, Row, Col, Badge
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Treatment extends React.Component {
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
              <h2 className="lifeTitle">  <FontAwesomeIcon icon="notes-medical" className="icon" /> Treatment Fast Facts</h2>
            </CardTitle>
            <Container>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Insurance</span><br />
                  <span className="addictDesc">{this.state.insurance}</span>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Diagnosis</span><br />
                  <span className="addictDesc">{this.state.dsm}</span>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Discharge</span><br />
                  <span className="addictDesc">{this.state.discharge}</span>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Age of First Use</span><br />
                  <span className="addictDesc">{this.state.firstUse}</span>
                </Col>
              </Row>
            </Container>
          </CardBody >
        </Card >
      </div >
    );
  }
}

export default Treatment;
