const startServer = require('./server');
const path = require('path');

const buildRoot = path.resolve(__dirname, '..', 'vue-child', 'build');

startServer(buildRoot, 3003);