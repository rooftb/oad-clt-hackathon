import React from 'react';
import {
  Card, CardText, CardBody, Fade,
  CardTitle, CardSubtitle, Col, Container, Badge, Row, Button, TabContent, TabPane, NavItem, Nav, NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Risk extends React.Component {
  state = {
  };

  constructor(props) {
    super(props);

    this.setState({

    });
  }

  componentWillMount() {
    this.setState({
      methuse: this.props.methuse,
      prescriptions: this.props.prescriptions,
      treatment: this.props.treatment,
      arrests: this.props.arrests,
      riskGrade: this.props.riskGrade
    });
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>
              <h2 className="lifeTitle">  <FontAwesomeIcon icon="pills" className="icon" /> Risks</h2>
            </CardTitle>
            <Container>
              <Row>
                <Col l="4">
                  <span id="riskGrade" className="riskGrade">{this.state.riskGrade}</span>
                </Col>
              </Row>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Medical Assisted Opiod Use</span><br />
                  <span className="addictDesc">{this.state.methuse}</span>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Treatment</span><br />
                  <span className="addictDesc">{this.state.treatment}</span>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Prescriptions</span><br />
                  <span className="addictDesc">{this.state.prescriptions}</span>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Arrests</span><br />
                  <span className="addictDesc">{this.state.arrests}</span>
                </Col>
              </Row>
            </Container>
          </CardBody >
          
        </Card>
      </div>
    );
  }
}

export default Risk;
