const startServer = require('./server');
const path = require('path');

const buildRoot = path.resolve(__dirname, '..', 'svelte-child', 'build');

startServer(buildRoot, 3002);