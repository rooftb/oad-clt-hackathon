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
// import {Fab} from './Fab';
// The Addict component can represent the whole addict page,
// it'll contain a component for history
class Addict extends React.Component {
  state = {
    activeTab: '1',
    addicts: {

    }
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
    this.setState({
      caseID: this.props.caseID,
      age: this.props.age,
      gender: this.props.gender,
      race: this.props.race,
      education: this.props.race,
      employment: this.props.employ,
      arrests: this.props.arrests,
      living: this.props.livingArrangements,
      insurance: this.props.insurance,
      dsm: this.props.dsm,
      discharge: this.props.discharge,
      stayDuration: this.props.stayDuration,
      firstUse: this.props.firstUse,
      marital: this.props.marital,
      education: this.props.education,
      notInLabor: this.props.notInLabor,
      incomeSrc: this.props.incomeSrc
    });
  }
  render() {
    return (
      <div>
        <div>
          <Dock width={400} height={100} magnification={1} magnifyDirection="center">
            {addicts.map((item, index) => (
              <Dock.Item key={index} onClick={(x) => {this.setAddictData(item); }}>
                <img className="dockIcon" src='https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/000/344/original/avatar.png?1510841721' />
              </Dock.Item>
            ))}
          </Dock>
        </div>
        <Card>
          <CardBody>
            <CardTitle><i>CASE: {this.state.caseID}</i></CardTitle>
            <Container>
              <Row className="justify-content-center" >
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
          <Nav pills>
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
          </Nav>
          <TabContent  activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Treatment {...this.state} />
            </TabPane>
            <TabPane tabId="2">
              <Life {...this.state} />
            </TabPane>
          </TabContent>
          <Risk riskGrade="C" methuse="Yes" treatment="none" prescriptions="Oxy" arrests="11" />
        </Card>
      </div>

    );
  }
}

export default Addict;