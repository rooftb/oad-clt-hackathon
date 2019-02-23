import React, { Component } from 'react';
import Addict from './Addict';
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
                                <Addict caseID="010101" age="50" gender="F" race="W"/>
                            </Col>
                        </Row>
                    </Container>
                {/* </Jumbotron> */}
            </div>
        );
    }
}

export default App;
