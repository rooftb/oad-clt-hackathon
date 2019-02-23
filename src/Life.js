import React from 'react';
import { Card, CardBody,
  CardTitle, Container, Col, Row } from 'reactstrap';
class Life extends React.Component {
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
            marital: this.props.marital,
            education: this.props.education,
            notLabor: this.props.notLabor,
            incomeSrc: this.props.incomeSrc
      });
    }
  render() {
    return (
    <div>
     <Card>
        <CardBody>
        <CardTitle>
          <h2>Life</h2>
        </CardTitle>
          <Container>
            <Row>
              <Col xs="6">
                <span className="addictTitle">Marital</span><br />
                {this.state.marital}
              </Col>
              <Col xs="6">
                <span className="addictTitle">Education</span><br />
                {this.state.education}
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <span className="addictTitle">Not in Labor</span><br />
                {this.state.notLabor}
              </Col>
              <Col xs="6">
                <span className="addictTitle">Income Source</span><br />
                {this.state.incomeSrc}
              </Col>
            </Row>
          </Container>
        </CardBody>
    </Card>
    </div>
   );
}
}

export default Life;
