const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require("cors");

// Create Express Server
const app = express();

// Configuration
const PORT = 3000;
const HOST = "localhost";
const AZURE_SERVICE_URL = "https://dev.azure.com/EclipseLMS/Classic%20LMS/_apis/wit";

// Logging
app.use(morgan('dev'));

// CORS
app.use(cors());

// Proxy endpoints
app.use('/workitems', createProxyMiddleware({
  target: AZURE_SERVICE_URL + '&api-version=7.1-preview.3',
  changeOrigin: true,
  pathRewrite: {
    [`^/`] : AZURE_SERVICE_URL
  }
}));

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});