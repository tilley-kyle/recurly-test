import React, { useState } from 'react';
import './App.css';
// import recurly from 'recurly';
// import api from './key';
import {
  Elements,
  CardElement,
  UseElements,
  useStripe
 } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};


// const client = new recurly.Client(api);

const stripePromise = loadStripe("pk_test_51GxdD6JA61yXwjNU0Fd6NuW9OB7ZjSADipD6LpvNjCC2hkkd1h7R1CHEk236hu2hyVaDtZHeEPRA1oNmOKZLMvY200I7JrmZN3");

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }



  render() {
    return (
      <div>
        <Elements stripe={stripePromise} >
          <h1>Recurly test</h1>
          {/* <script src="https://js.stripe.com/v3/"></script> */}
        </Elements>
      </div>
    );
  }
}

export default App;
