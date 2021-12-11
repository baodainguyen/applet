import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Route, Router, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { LinkedIn, ListApp } from '../global/Icons';
import { AppLinkedIn } from './Applet001';

export class Home extends Component {
    render() {
        return (
            <section className="fontSFProT">
                <Container className="my-5">
                    <h1 className="fw-bold">Apps</h1>
                    <Row>
                        {ListApp.map((app, i) => {
                            const {Name, Sub, Logo, Path} = app;
                            return <Col md={6} sm={12} key={`dnb-applet-${i}}`}>
                                <AppView name={Name} nofity="New Upload" sub={Sub} logo={Logo} path={Path} >
                                    <Col md={4} className="p-0">
                                        <img className="w-100" src="https://i.stack.imgur.com/vhoa0.jpg" />
                                    </Col>
                                    <Col md={8} className="p-0">
                                        <img className="w-100" src="https://c.neh.tw/thumb/f/720/682e6b6996ab4f6fbb82.jpg" />
                                    </Col>
                                </AppView>
                            </Col>
                        })}
                    </Row>
                </Container>
                <Container fluid className="bg-light py-7">
                    <Container>
                        <h1>Section 02</h1>
                    </Container>
                </Container>
            </section>
        )
    }
}

class AppView extends Component {

    render() {
        const { children, logo, name, nofity, sub, path } = this.props;
        return (
            <section className="mb-3">
                <div className="d-flex">
                    <Link to={`/${path}`} className="me-3">
                        {logo}
                    </Link>
                    <div>
                        <h5 className="fw-bold">{name} <span className="badge bg-secondary fs-6">{nofity}</span></h5>
                        <p className="mb-0">{sub}</p>
                    </div>
                </div>
                <div className="p-3"><Row className="shadow-sm rounded overflow-hidden">
                    {children}
                </Row></div>
            </section>
        );
    }
}
