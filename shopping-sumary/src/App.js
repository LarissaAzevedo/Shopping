import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal';
import './App.css';
import PickupsSavings from './components/PickupsSavings/PickupsSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      total: 100,
      PickupsSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0
    }
  }

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupsSavings price={this.state.PickupsSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
          <ItemDetails />
        </Container>
      </div>
    );
  }
}

export default App;
