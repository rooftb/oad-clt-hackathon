import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, Container, ListGroup, ListGroupItem } from 'reactstrap';
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
      <CardTitle><h2>Life</h2></CardTitle>
        <CardBody>  
          <CardText>
            <ListGroup>
              <ListGroupItem>Marital: {this.state.marital}</ListGroupItem>
              <ListGroupItem>Education: {this.state.education}</ListGroupItem>
              <ListGroupItem>Not in Labor: {this.state.notLabor}</ListGroupItem>
              <ListGroupItem>Income Source: {this.state.incomeSrc}</ListGroupItem>
            </ListGroup>
          </CardText>
        </CardBody>
        </Container>
      </Card>
    </div>
   );
}
}

export default Life;
