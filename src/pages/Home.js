import React, { Component } from 'react';
import { Container, Button, Row, Col, Carousel } from 'react-bootstrap';
import { LinkedIn } from '../global/Icons';

export class Home extends Component {
    render() {
        return (
            <section className="fontSFProT">
                <Container className="my-5">
                    <Row>
                        <h1>Section 01</h1>
                        <AppView />
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
        return (
            <Col md={6} sm={12}>
                <AppViewHead />
            </Col>
        );
    }
}

class AppViewHead extends Component {
    render() {
        return (
            <Row>
                <div className="d-flex">
                    <div className="me-3"> <LinkedIn /></div>
                    <div>
                        <h5 className="fw-bold">LinkedIn <span className="badge bg-secondary fs-6">New Upload</span></h5>
                        <p className="mb-0">Connect, Apply & Get Hired</p>
                    </div>
                </div>
                <Col md={2}>

                </Col>
                <Col md={10}>

                </Col>
            </Row>
        );
    }
}