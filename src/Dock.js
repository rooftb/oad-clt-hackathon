import React from 'react';
import Dock from "react-osx-dock";
import addicts from "../src/data/addictsdata";
import {
    Card, CardBody,
    CardTitle, Container, Col, Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


class OPIODock extends React.Component {

    state = {
        addicts: {
        }
    };

    loadAddicts = () => {
        this.setState({ addicts: addicts });
        console.log("addicts loaded");
    }

    render() {
        return (
            <div>
                <Dock width={400} height={100} magnification={1} magnifyDirection="center">
                    {["a", "b", "c", "d", "e"].map((item, index) => (
                        <Dock.Item key={index} onClick={() => console.log(item)}>
                            <img className="dockIcon" src='http://chittagongit.com/images/person-icon-svg/person-icon-svg-26.jpg' />
                        </Dock.Item>
                    ))}
                </Dock>
            </div>

        );
    }
}

export default OPIODock;