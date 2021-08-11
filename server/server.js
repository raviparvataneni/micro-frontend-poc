const express = require('express');
const fs = require('fs');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const getContentType = (ext) => {
    switch (ext) {
        case '.html': return 'text/html';
        case '.css': return 'text/css';
        case '.js': return 'application/javascript';
        default:
            throw new Error(`Cannot find content-type for extension: ${ext}`);
    }
};

const getFilePath = (buildRoot, requestPath) => {
    switch (requestPath) {
        case '/': return path.join(buildRoot, 'index.html');
        default: return path.join(buildRoot, requestPath);
    }
};

const getCacheControl = (requestPath) => {
    switch (requestPath) {
        case '/remoteEntry.js': return 'no-cache,no-store';
        default: return 'public, max-age=604800';
    }
};

const createDefaultRoute = (app, buildRoot) => {
    app.get('/**', (req, res) => {
        console.log(`Received Request: ${req.path}`);
        const filePath = getFilePath(buildRoot, req.path);
        if (!fs.existsSync(filePath)) {
            console.error(`Cannot find file: ${filePath}`);
            res.status(404);
            res.set({
                'Content-Type': 'text/plain'
            })
            res.send(`Cannot find file: ${filePath}`);
            return;
        }

        console.log(`Returning file: ${filePath}`);

        const extension = path.extname(filePath);
        const content = fs.readFileSync(filePath, 'utf8');

        res.set({
            'Content-Type': getContentType(extension),
            'Cache-Control': getCacheControl(req.path)
        })
        res.send(content);
    });
};

const startServer = (buildRoot, port, proxyMap = {}) => {
    const app = express();

    Object.entries(proxyMap)
        .forEach(([proxyPath, proxyConfig]) => {
            app.use(proxyPath, createProxyMiddleware(proxyConfig));
        });

    createDefaultRoute(app, buildRoot);

    app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    });
};

module.exports = startServer;