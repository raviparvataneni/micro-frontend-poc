const startServer = require('./server');
const path = require('path');

const buildRoot = path.resolve(__dirname, '..', 'react-child', 'build');

startServer(buildRoot, 3001);