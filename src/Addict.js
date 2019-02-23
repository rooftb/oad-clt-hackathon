import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Container, Badge, Row, Button, TabContent, TabPane, NavItem, Nav, NavLink } from 'reactstrap';
import Treatment from './Treatment';
import Life from './Life';

// The Addict component can represent the whole addict page,
// it'll contain a component for history
class Addict extends React.Component {
    state = { 
        activeTab: '1'
   };
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    handleChangeIndex = index => {
      this.setState({ value: index });
    };
  
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
    }
  
    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
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
                            <Col xs="1">
                            <Button color="light" className=" activeStat active" outline>
                                Age <Badge>{this.state.age}</Badge>
                            </Button>
                            </Col>
                            <Col xs="1">
                            <Button color="light" className="active activeStat" outline>
                                Race <Badge>{this.state.race}</Badge>
                            </Button>
                            </Col>
                            <Col xs="1">
                            <Button color="light" className="active activeStat" outline>
                                Gender <Badge>{this.state.gender}</Badge>
                            </Button>
                            </Col>
                        </Row>
            </Container>
        </CardBody>
        <Nav tabs>
          <NavItem>
            <NavLink
              onClick={() => { this.toggle('1'); }}
            >
              Treatment
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => { this.toggle('2'); }}
            >
              Life
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Treatment insurance="bluecross" discharge="done" dsm="opiod" firstUse="17" />
          </TabPane>
          <TabPane tabId="2">
            <Life marital="married" education="high school" notLabor="hurt" incomeSrc="disability" />
          </TabPane>
        </TabContent>
      </Card>
    </div>
   );
}
}

export default Addict;
