import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, Container, Row, Col, Badge } from 'reactstrap';
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
          <Container>
      <CardTitle><h2>Treatment Fast Facts</h2></CardTitle>
        <CardBody>  
          <CardText>
            <Container>
                <Row>
                    <Col>
                    <FontAwesomeIcon icon="igloo" /><Badge color="secondary">Insurance</Badge><h5>{this.state.insurance}</h5>
                    </Col>
                    <Col>
                    <FontAwesomeIcon icon="igloo" /><Badge color="secondary">Diagnosis</Badge><h5>{this.state.dsm}</h5>
                    </Col>
                    <Col>
                    <FontAwesomeIcon icon="igloo" /><Badge color="secondary">Discharge</Badge><h5>{this.state.discharge}</h5>
                    </Col>
                    <Col>
                    <FontAwesomeIcon icon="igloo" /><Badge color="secondary">Age of First Use</Badge><h5>{this.state.firstUse}</h5>
                    </Col>
                </Row>
            </Container>
          </CardText>
        </CardBody>
        </Container>
      </Card>
    </div>
   );
}
}

export default Treatment;
