import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, Container, Row, Col, Badge } from 'reactstrap';
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
        riskGrade: this.props.riskGrade
      });
    }
  render() {
    return (
    <div>
      <Card>
        <CardBody>  
        <CardTitle><h2>Risk Assessment</h2></CardTitle>
          <CardText>
            <Container>
                <Row>
                   <Col xs="4">
                      <span className="riskGrade">{this.state.riskGrade}</span>
                   </Col>
                </Row>
            </Container>
          </CardText>
        </CardBody>
      </Card>
    </div>
   );
}
}

export default Risk;
