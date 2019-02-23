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
    this.updateRecommendation = this.updateRecommendation.bind(this);
    this.setState({

    });
  }
  componentDidUpdate() {
    this.updateRecommendation();
  }
  updateRecommendation() {
    let grade = document.getElementById("riskGrade").innerHTML;
    if(grade == "A+" || grade == "A") {
      document.getElementById("recommendation").innerHTML = "Continue Pain Managment";
    }
    else if(grade == "B") {
      console.log("setting to b");
      document.getElementById("recommendation").innerHTML = "Opioid Dependence Treatment";
      console.log(document.getElementById("recommendation").innerHTML );
    }
    else if(grade == "C" || grade == "D") {
      document.getElementById("recommendation").innerHTML = "Inpatient Treatment";
    }
  }
  componentWillMount() {
    this.setState({
      methuse: this.props.methuse,
      prescriptions: this.props.prescriptions,
      treatment: this.props.treatment,
      arrests: this.props.arrests,
      riskGrade: this.props.riskGrade,
      recommendation: 'Loading'
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
                <Col sm={{ size: 'auto' }}>
                  <span id="riskGrade" className="riskGrade">{this.state.riskGrade}</span>
                </Col>
                <Col lg="6" className="recommendation">
                  <span className="addictDesc">Recommendation</span><br></br>
                  <span className="addictTitle bigRec" id="recommendation">{this.state.recommendation}</span>
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
