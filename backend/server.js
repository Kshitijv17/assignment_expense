require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const morgan = require('morgan');


const app = express();
app.use(morgan('dev')); // Logs requests with method, url, status and response time


// Allow CORS from your frontend origin
app.use(cors({
  origin: 'http://localhost:3000',  // React dev server URL
  credentials: true,                 // Enable cookies if needed
}));

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`API running on port ${PORT}`));
}).catch((err) => {
  console.error('DB connection error:', err);
  process.exit(1);
});
