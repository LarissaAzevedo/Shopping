import React, { Component } from 'react';
import { Button, Collapse, Card, Media, Row, Col } from 'react-bootstrap';

class ItemDetails extends Component {

    constructor() {
        super()
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div>
                <Button
                    className="item-details-button"
                    bsStyle="link"
                    onClick={() => this.setState({ open: !this.state.open })}
                >
                    {this.state.open === false ? `See` : `Hide`} item details
                    {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Card>
                            <Media>
                                <Media.Left>
                                    <img
                                        width={100}
                                        height={100}
                                        alt="thumbnail"
                                        src="https://staticmobly.akamaized.net/r/2000x2000/p/Mobly-Cadeira-Gamer-Legends-Preta-e-Vermelha-8078-858274-1.jpg" />
                                </Media.Left>
                                <Media.Body>
                                    <p>Essentials of cadeira gamer incrível</p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong>{`R$${this.props.price}`}</strong>
                                            <br />
                                            <strong className="price-strike">{`R$${this.props.price}`}</strong>
                                        </Col>
                                    </Row>
                                </Media.Body>
                            </Media>
                        </Card>
                    </div>
                </Collapse>
            </div>
        )
    }
}
export default ItemDetails;