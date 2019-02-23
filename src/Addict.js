import React from 'react';
import {
  Card, CardText, CardBody, Fade,
  CardTitle, CardSubtitle, Col, Container, Badge, Row, Button, TabContent, TabPane, NavItem, Nav, NavLink
} from 'reactstrap';
import Treatment from './Treatment';
import Life from './Life';
import Dock from "react-osx-dock";
import addicts from "./addicts.js";
import Risk from './Risk';
import Assessment from './Assessment';
// import {Fab} from './Fab';
// The Addict component can represent the whole addict page,
// it'll contain a component for history
class Addict extends React.Component {
  state = {
    activeTab: '1'
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount = () => {
    this.setState({ addicts: addicts })
  }

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.setAddictData = this.setAddictData.bind(this);
    this.state = {
      activeTab: '1',
      fadeIn: true
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
        fadeIn: !this.state.fadeIn
      });
    }
  }

  setAddictData(item) {
    this.setState({
      caseID: item.caseID,
      age: item.age,
      gender: item.gender,
      race: item.race,
      education: item.race,
      employment: item.employ,
      arrests: item.arrests,
      living: item.livingArrangements,
      discharge: item.discharge,
      firstUse: item.firstUse,
      notLabor: item.notLabor,
      incomeSrc: item.incomeSrc,
      dsm: item.dsm,
      marital: item.marital
    });
    console.log(item.caseID);
  }
  componentWillMount() {
    this.setAddictData(addicts[0]);
  }
  render() {
    return (
      <div>
        <div>
          <Dock align="center" className="justify-content-center" width={200} height={50} magnification={.5} magnifyDirection="center">
            {["a", "b", "c", "d", "e"].map((item, index) => (
              <Dock.Item key={index} onClick={() => console.log(item)}>
                <img className="dockIcon" src='http://chittagongit.com/images/person-icon-svg/person-icon-svg-26.jpg' />
              </Dock.Item>
            ))}
          </Dock>
          <br></br>
        </div>
        <Card>
          <CardBody>
            <CardTitle><i>CASE: {this.state.caseID}</i></CardTitle>
            <Container>
              <Row >
                <Col l="3" align="center">
                  <div className=" activeStat" outline>
                    {this.state.age}
                  </div>
                  <h3 className="addictSubtitle">Age</h3>
                </Col>
                <Col l="3" align="center">
                  <div className=" activeStat" outline>
                    {this.state.race}
                  </div>
                  <h3 className="addictSubtitle">Race</h3>
                </Col>
                <Col l="3" align="center">
                  <div className=" activeStat" outline>
                    {this.state.gender}
                  </div>
                  <h3 className="addictSubtitle">Gender</h3>
                </Col>
              </Row>
            </Container>
          </CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink className="navTab"
                onClick={() => { this.toggle('1'); }}
              >
                Treatment
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navTab"
                onClick={() => { this.toggle('2'); }}
              >
                Life
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navTab"
                onClick={() => { this.toggle('3'); }}
              >
                Risk
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navTab"
                onClick={() => { this.toggle('4'); }}
              >
                Assessment
            </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Treatment {...this.state} />
            </TabPane>
            <TabPane tabId="2">
              <Life {...this.state} />
            </TabPane>
            <TabPane tabId="3">
              <Risk {...this.state} />
            </TabPane>
            <TabPane tabId="4">
              <Assessment {...this.state} />
            </TabPane>
          </TabContent>
        </Card>
      </div >

    );
  }
}

export default Addict;