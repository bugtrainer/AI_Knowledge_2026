const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3002;
const VAULT_PATH = path.resolve(__dirname, '..');

// Manual CORS headers (more robust for dev)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Serve static vault files with decoding
app.use('/vault', (req, res, next) => {
    req.url = decodeURIComponent(req.url);
    next();
}, express.static(VAULT_PATH));

// Serve manifest
app.get('/api/manifest', (req, res) => {
    const manifestPath = path.join(__dirname, '../data/aura-manifest.json');
    if (fs.existsSync(manifestPath)) {
        res.sendFile(manifestPath);
    } else {
        res.status(404).json({ error: 'Manifest not found. Run aura-indexer first.' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Aura Server running at http://localhost:${PORT}`);
    console.log(`📂 Serving vault from: ${VAULT_PATH}`);
});
