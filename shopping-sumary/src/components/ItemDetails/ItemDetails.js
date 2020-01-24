import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {

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
                        <Well>
                            <Media>
                                <Media.Left>
                                    <img
                                        width={100}
                                        height={100}
                                        alt="thumbnail"
                                        src="https://staticmobly.akamaized.net/r/2000x2000/p/Mobly-Cadeira-Gamer-Legends-Preta-e-Vermelha-8078-858274-1.jpg" />
                                </Media.Left>
                            </Media>
                        </Well>
                    </div>
                </Collapse>
            </div>
        )
    }
}