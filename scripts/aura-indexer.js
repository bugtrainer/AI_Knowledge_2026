const fs = require('fs');
const path = require('path');

const VAULT_PATH = path.resolve(__dirname, '..');
const OUTPUT_PATH = path.resolve(__dirname, '../data/aura-manifest.json');

const IGNORE_DIRS = ['.git', '.obsidian', 'node_modules', 'scripts', 'data', 'aura-os', 'public', 'quartz-site'];

function parseFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath, '.md');
    
    let metadata = {};
    const yamlMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (yamlMatch) {
        metadata = parseFrontmatter(yamlMatch[1]);
    }

    // Extract WikiLinks [[Link]] or [[Link|Alias]]
    const linkRegex = /\[\[(.*?)(?:\|.*?)?\]\]/g;
    const links = [];
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
        links.push(match[1].trim());
    }

    return {
        id: fileName,
        path: path.relative(VAULT_PATH, filePath),
        title: metadata.title || fileName,
        tags: Array.isArray(metadata.tags)
            ? metadata.tags.map(t => String(t).trim())
            : typeof metadata.tags === 'string'
                ? metadata.tags.split(',').map(t => t.trim())
                : [],
        difficulty: metadata.difficulty || 'unknown',
        status: metadata.status || 'seed',
        links: links
    };
}

function crawl(dir, allFiles = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!IGNORE_DIRS.includes(file)) {
                crawl(fullPath, allFiles);
            }
        } else if (file.endsWith('.md')) {
            allFiles.push(fullPath);
        }
    });
    
    return allFiles;
}

console.log('🚀 Starting Aura Indexer...');
const mdFiles = crawl(VAULT_PATH);
console.log(`📂 Found ${mdFiles.length} notes.`);

const nodes = [];
const edges = [];

mdFiles.forEach(file => {
    try {
        const data = parseFile(file);
        nodes.push({
            id: data.id,
            label: data.title,
            path: data.path,
            tags: data.tags,
            difficulty: data.difficulty,
            status: data.status
        });
        
        data.links.forEach(target => {
            edges.push({
                source: data.id,
                target: target
            });
        });
    } catch (err) {
        console.error(`❌ Error parsing ${file}:`, err.message);
    }
});

// Filter edges where target doesn't exist (dead links)
const nodeIds = new Set(nodes.map(n => n.id));
const validEdges = edges.filter(e => nodeIds.has(e.target));

const manifest = {
    generatedAt: new Date().toISOString(),
    stats: {
        nodes: nodes.length,
        edges: validEdges.length
    },
    nodes: nodes,
    links: validEdges
};

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(manifest, null, 2));
console.log(`✅ Aura Manifest generated at ${OUTPUT_PATH}`);
console.log(`📊 Nodes: ${nodes.length}, Links: ${validEdges.length}`);
function parseFrontmatter(yamlText) {
    const metadata = {};
    const lines = yamlText.split('\n');
    for (const line of lines) {
        if (!line.trim() || line.trim().startsWith('#')) continue;
        const idx = line.indexOf(':');
        if (idx === -1) continue;
        const key = line.slice(0, idx).trim();
        let rawValue = line.slice(idx + 1).trim();
        if (!key) continue;

        if ((rawValue.startsWith('"') && rawValue.endsWith('"')) || (rawValue.startsWith("'") && rawValue.endsWith("'"))) {
            rawValue = rawValue.slice(1, -1);
        }
        if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
            metadata[key] = rawValue
                .slice(1, -1)
                .split(',')
                .map(item => item.trim().replace(/^['"]|['"]$/g, ''))
                .filter(Boolean);
            continue;
        }
        metadata[key] = rawValue;
    }
    return metadata;
}
