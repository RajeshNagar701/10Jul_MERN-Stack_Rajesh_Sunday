/*
//https://react-bootstrap.github.io/docs/getting-started/introduction 

The best way to consume React-Bootstrap is via the npm package which you can install with 
npm (or yarn if you prefer).

npm install react-bootstrap bootstrap


You should import individual components like: react-bootstrap/Button

import Button from 'react-bootstrap/Button';

// or less ideally
import { Button,Alert } from 'react-bootstrap';

*/


import React from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import {
    Table, Accordion, Badge, Breadcrumb, ButtonGroup, Card, Carousel
    , Dropdown, Figure, ListGroup, Modal, Navbar, Nav, Container, NavDropdown,
    Form, FormControl, Row, Col
} from 'react-bootstrap';

function React_Bootstrap() {
    return (
        <div>
            <h1>React_Bootstrap</h1>
            <hr />
            <Button>React Component</Button>
            <hr />
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>

            <hr />
            <Alert variant="primary">
                This is a "primary" alert—check it out!
            </Alert>

            {
                ["primary",
                    "secondary",
                    "success",
                    "warning",
                    "danger",
                    "info",
                    "light"
                ].map((variant) => {
                    return (
                        <Alert variant={variant}>
                            This is a "primary" alert—check it out!
                        </Alert>
                    )
                })
            }

            <hr />


            <Container>
                <Row>
                    <Col xs={12} sm={6} md={3}> xs="12" sm="6" md="4" </Col>
                    <Col xs={12} sm={6} md={3}> xs="12" sm="6" md="4" </Col>
                    <Col xs={12} sm={6} md={3}> xs="12" sm="6" md="4" </Col>
                    <Col xs={12} sm={6} md={3}> xs="12" sm="6" md="4" </Col>
                </Row>
            </Container>

            <hr />

            <Row xs={1} md={4} className="g-2">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22351%22%20height%3D%22160%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20351%20160%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18eff88f108%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A18pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18eff88f108%22%3E%3Crect%20width%3D%22351%22%20height%3D%22160%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.453125%22%20y%3D%2288.1%22%3E351x160%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


            <br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default React_Bootstrap