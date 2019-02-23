import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Container, Row, Col, Badge
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Risk from './Risk';
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
  handleSubmit = (event) => {
    event.preventDefault()
    let EDUC = event.target.elements.education.value;
    let Employed = event.target.elements.income.value;
    if(Employed > 2) {
        document.getElementById("riskGrade").innerHTML = "C"
    }
    else {
      document.getElementById("riskGrade").innerHTML = "B"
    }
    this.setState({
      riskGrade: "B" 
    })
  }
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {riskGrade: 'A+'};
  }

  componentWillMount() {
    this.setState({
      riskGrade: 'A+'
    });
  }
  render() {
    return (
      <div>
        <Risk {...this.state} methuse="True" prescriptions="Often" arrests="3" treatment="4" />
        <Card>
          <CardBody>
            <CardTitle>
              <h2 className="lifeTitle">  <FontAwesomeIcon icon="check" className="icon" /> Assessment</h2>
            </CardTitle>
            <form ref="form" onSubmit={this.handleSubmit}>
            <Container>

              <Row>
                {/* PAGE 1 */}
                <Col s="6">
                  <span className="addictTitle">Insurance</span><br />
                  <select className="addictDesc">
                    <option value="1">Private</option>
                    <option value="1">Medicaid</option>
                    <option value="1">Medicare</option>
                    <option value="1">None</option>
                  </select>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Diagnosis</span><br />
                  <select className="addictDesc">
                    <option value="1">None</option>
                    <option value="1">Alcohol Abuse</option>
                    <option value="1">Cannabis Abuse</option>
                    <option value="1">Opiod Abuse</option>
                    <option value="1">Cocaine Abuse</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Age at First Use</span><br />
                  <select className="addictDesc">
                    <option value="1">11 and Under</option>
                    <option value="2">12 - 14</option>
                    <option value="3">15 - 17</option>
                    <option value="4">18 - 20</option>
                    <option value="5">21 - 25</option>
                    <option value="6">26 - 30</option>
                    <option value="7">31+</option>
                  </select>
                </Col>
              </Row>
              <Row>


                {/* PAGE 2 */}
                <Col s="6">
                  <span className="addictTitle">Marital Status</span><br />
                  <select name="marital" className="addictDesc">
                    <option value="1">Never Married</option>
                    <option value="2">Married</option>
                    <option value="3">Separated</option>
                    <option value="4">Divorced / Widowed</option>
                  </select>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Education</span><br />
                  <select name="education" className="addictDesc">
                    <option value="1">8 Years or Less</option>
                    <option value="2">9 - 11 Years</option>
                    <option value="3">12 Years</option>
                    <option value="4">13 - 15 Years</option>
                    <option value="5">16 Years+</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Not in Labor</span><br />
                  <select name="notinlabor" className="addictDesc">
                    <option value="1">Homemaker</option>
                    <option value="1">Student</option>
                    <option value="1">Retired/Disabled</option>
                    <option value="1">Inmate of Institution</option>
                  </select>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Number of Prior Treatments</span><br />
                  <select name="priortreatment" className="addictDesc">
                    <option>No Prior Treatments</option>
                    <option>1 Prior Treatment</option>
                    <option>2 Prior Treatments</option>
                    <option>3 Prior Treatments</option>
                    <option>4 or More Prior Treatment</option>
                  </select>
                </Col>
              </Row>
              {/* PAGE 3 */}
              <Row>
                <Col s="6">
                  <span className="addictTitle">Income Source</span><br />
                  <select ref={el => this.element = el} name="income" className="addictDesc">
                    <option value="1">Wages/Salary</option>
                    <option value="2">Public Assistance</option>
                    <option value="3">Retirement/Pension/ Disability</option>
                    <option value="4">Other</option>
                    <option value="1">None</option>
                  </select>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Length of Time Incarcerated</span><br />
                  <select name="prison"  className="addictDesc">
                    <option value="1">1 Day</option>
                    <option value="2">2 - 3 Days</option>
                    <option value="4">4 - 7 Days</option>
                    <option value="7">1 Week</option>
                    <option value="8">2 Weeks+</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Number of Prior Treatments</span><br />
                  <select  name="priortreatment" className="addictDesc">
                    <option value="0">No Prior Treatments</option>
                    <option value="1">1 Prior Treatment</option>
                    <option value="2">2 Prior Treatments</option>
                    <option value="3">3 Prior Treatments</option>
                    <option value="4">4 or More Prior Treatment</option>
                  </select>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Medication Assisted Opiod Therapy</span><br />
                  <select name="methuse" className="addictDesc">
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Number of Prior Treatments</span><br />
                  <select name="priortreatment" className="addictDesc">
                    <option value="1">No Prior Treatments</option>
                    <option value="2">1 Prior Treatment</option>
                    <option value="3">2 Prior Treatments</option>
                    <option value="4">3 Prior Treatments</option>
                    <option value="5">4 or More Prior Treatment</option>
                  </select>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Number of Arrests</span><br></br>
                  <select name="arrests" className="addictDesc">
                    <option value="0">None</option>
                    <option value="1">Once</option>
                    <option value="2">Two or More Times</option>
                  </select>
                </Col>
              </Row>
            </Container>
            <button onSubmit={this.handleSubmit.bind(this)} type="submit">Do the thing</button>
            </form>
          </CardBody >
        </Card >
      </div >
    );
  }
}

export default Assessment;
