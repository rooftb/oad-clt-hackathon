import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Container, Badge, Row, Button } from 'reactstrap';


// The Addict component can represent the whole addict page,
// it'll contain a component for history
class Addict extends React.Component {
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
        caseID: this.props.caseID,
        age: this.props.age,
        gender: this.props.gender,
        race: this.props.race,
        education: this.props.race,
        employment: this.props.employ,
        arrests: this.state.arrests,
        living: this.state.livingArrangements
      });
    }
  render() {
    return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>CASE: {this.state.caseID}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Container>
                        <Row>
                            <Col>
                            <Button color="primary" outline>
                                Age <Badge color="secondary">{this.state.age}</Badge>
                            </Button>
                            </Col>
                            <Col>
                            <Button color="primary" outline>
                                Race <Badge color="secondary">{this.state.race}</Badge>
                            </Button>
                            </Col>
                            <Col>
                            <Button color="primary" outline>
                                Gender <Badge color="secondary">{this.state.gender}</Badge>
                            </Button>
                            </Col>
                        </Row>
            </Container>
        </CardBody>
      </Card>
    </div>
   );
}
}

export default Addict;
