import React, { Component } from 'react';
import {Row , Col } from 'react-bootstrap';

export default class SubTotal extends Component{
    render(){
        return(
            <Row className="show-grid">
                <Col ms={6}>SubTotal</Col>
                <Col ms={6}>{`R$${this.props.price}`}</Col>
            </Row>
        )
    }
}