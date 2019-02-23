import React, { Component } from 'react';
import Addict from './Addict';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faNotesMedical, faPills, faCheck } from '@fortawesome/free-solid-svg-icons'
import addicts from './addicts'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    // NavItem,
    // NavLink,
    Container,
    Row,
    Col
    // Jumbotron
} from 'reactstrap';
library.add(faHeartbeat, faNotesMedical, faPills, faCheck);
class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const addictsObs = addicts.map((addict) => {
            return (
                <Addict caseID={addict.caseID}
                    gender={addict.gender}
                    age={addict.age}
                    race={addict.race}
                    insurance={addict.insurance}
                />
            )
        })
        return (
            <div>
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">Opiod Abusers Database (OAD)</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        </Nav>
                    </Collapse>
                </Navbar>
                {/* <Jumbotron> */}
                <Container>
                    <Row>
                        <Col>
                            {addictsObs}
                        </Col>
                    </Row>
                </Container>
                {/* </Jumbotron> */}
            </div>
        );
    }
}

export default App;
