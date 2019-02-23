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
      <Container>
        <CardTitle>
          <h2>Life</h2>
        </CardTitle>
        <CardBody>
          <Container>
            <Row>
              <Col xs="6">
                <span>Marital</span><br />
                {this.state.marital}
              </Col>
              <Col xs="6">Education: {this.state.education}</Col>
            </Row>
            <Row>
              <Col xs="6">Not in Labor: {this.state.notLabor}</Col>
              <Col xs="6">Income Source: {this.state.incomeSrc}</Col>
            </Row>
          </Container>
        </CardBody>
      </Container>
    </Card>
    </div>
   );
}
}

export default Life;
