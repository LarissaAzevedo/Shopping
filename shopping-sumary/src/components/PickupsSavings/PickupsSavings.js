import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles = {
    pickingSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'red',
        fontWeigth: 800
    }
}

export default class PickupsSavings extends Component {
    render() {
        const tooltip = (
            <Tooltip id="tooltip">
                <p>Picking up your order in the store helps cut costs, and we pass the saving on to you.</p>
            </Tooltip>
        )
        return (
            <Row className="show-grid">
                <Col md={6}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={styles.pickingSavings}>Picking savings</div>
                    </OverlayTrigger>
                </Col>
                <Col style={styles.totalSavings} md={6}>
                    {' '}
                    {`R$${this.props.price}`}
                    {' '}
                </Col>
            </Row>
        )
    }
}