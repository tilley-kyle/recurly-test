const express = require('express');
const bp = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bp.json());