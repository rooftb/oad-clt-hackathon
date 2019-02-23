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
              <h2 className="lifeTitle">  <FontAwesomeIcon icon="check" className="icon" /> Assessment</h2>
            </CardTitle>
            <Container>
              <Row>
                {/* PAGE 1 */}
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
                  <span className="addictTitle">Age at First Use</span><br />
                  <select className="addictDesc">
                    <option>11 and Under</option>
                    <option>12 - 14</option>
                    <option>15 - 17</option>
                    <option>18 - 20</option>
                    <option>21 - 25</option>
                    <option>26 - 30</option>
                    <option>31+</option>
                  </select>
                </Col>
              </Row>
              <Row>


                {/* PAGE 2 */}
                <Col s="6">
                  <span className="addictTitle">Marital Status</span><br />
                  <select className="addictDesc">
                    <option>Never Married</option>
                    <option>Married</option>
                    <option>Separated</option>
                    <option>Divorced / Widowed</option>
                  </select>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Education</span><br />
                  <select className="addictDesc">
                    <option>8 Years or Less</option>
                    <option>9 - 11 Years</option>
                    <option>12 Years</option>
                    <option>13 - 15 Years</option>
                    <option>16 Years+</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Not in Labor</span><br />
                  <select className="addictDesc">
                    <option>Homemaker</option>
                    <option>Student</option>
                    <option>Retired/Disabled</option>
                    <option>Inmate of Institution</option>
                  </select>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Number of Prior Treatments</span><br />
                  <select className="addictDesc">
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
                  <select className="addictDesc">
                    <option>Wages/Salary</option>
                    <option>Public Assistance</option>
                    <option>Retirement/Pension/ Disability</option>
                    <option>Other</option>
                    <option>None</option>
                  </select>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Length of Time Incarcerated</span><br />
                  <select className="addictDesc">
                    <option>1 Day</option>
                    <option>2 - 3 Days</option>
                    <option>4 - 7 Days</option>
                    <option>1 Week</option>
                    <option>2 Weeks+</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Number of Prior Treatments</span><br />
                  <select className="addictDesc">
                    <option>No Prior Treatments</option>
                    <option>1 Prior Treatment</option>
                    <option>2 Prior Treatments</option>
                    <option>3 Prior Treatments</option>
                    <option>4 or More Prior Treatment</option>
                  </select>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Medication Assisted Opiod Therapy</span><br />
                  <select className="addictDesc">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col s="6">
                  <span className="addictTitle">Number of Prior Treatments</span><br />
                  <select className="addictDesc">
                    <option>No Prior Treatments</option>
                    <option>1 Prior Treatment</option>
                    <option>2 Prior Treatments</option>
                    <option>3 Prior Treatments</option>
                    <option>4 or More Prior Treatment</option>
                  </select>
                </Col>
                <Col s="6">
                  <span className="addictTitle">Number of Arrests</span><br />
                  <select className="addictDesc">
                    <option>None</option>
                    <option>Once</option>
                    <option>Two or More Times</option>
                  </select>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col s="4">
                  <button align="center" className="justify-content-center">Submit</button>
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
