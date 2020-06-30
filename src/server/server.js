const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')('key');

// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1099,
//   currency: 'usd',
//   metadata: {integration_check: 'accept_a_payment'},
// });

const app = express();

app.use(cors());
app.use(bp.json());

app.get('/secret', async (req, res) => {
  const intent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    metadata: {integration_check: 'accept_a_payment'},
  });
  res.json({client_secret: intent.client_secret});
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});