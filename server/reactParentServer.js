const startServer = require('./server');
const path = require('path');

const buildRoot = path.resolve(__dirname, '..', 'react-parent', 'build');

const proxyMap = {
    '/reactChild': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
            '^/reactChild': ''
        },
        logLevel: 'debug'
    },
    '/svelteChild': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        pathRewrite: {
            '^/svelteChild': ''
        },
        logLevel: 'debug'
    },
    '/vueChild': {
        target: 'http://localhost:3003',
        changeOrigin: true,
        pathRewrite: {
            '^/vueChild': ''
        },
        logLevel: 'debug'
    }
};

startServer(buildRoot, 3000, proxyMap);