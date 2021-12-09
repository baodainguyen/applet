import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Card, Modal, Button } from 'react-bootstrap';
import { Logo } from '../global/Files';
import { getPage, removeSpace } from '../App';

export class Navigator extends Component {

    render() {
        const { navs } = this.props;
        return (
            <Navbar collapseOnSelect bg="light" variant="light" expand="lg" sticky="top" className="">
                <Container>
                    {navs.map((name, i) => {
                        const _path = removeSpace(name);
                        const _page = getPage(name);
                        if (_path === '') {
                            return <>
                                <Navbar.Brand as={Link} to={`/${_path}`} href="#home" key={`nav-brand-${i}`}>
                                    <img style={{ display: 'inline-block', width: '66px' }} src={Logo} />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" key={`nav-toggle-${i}`} />
                            </>
                        }
                        return <Navbar.Collapse id="responsive-navbar-nav" key={`nav-collapse-${i}`}>
                            <Nav className="me-auto"> </Nav>
                            <Nav>
                                <Nav.Link as={Link} to={`/${_path}`} href={`#${_path}`}>{name}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    })}
                </Container>
            </Navbar>
        );
    }
}

export class Footer extends Component {
    render(){
        return (
            <Container >
                <h1>Footer</h1>
            </Container>
        );
    }
}