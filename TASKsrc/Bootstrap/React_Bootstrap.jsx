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
            <br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default React_Bootstrap