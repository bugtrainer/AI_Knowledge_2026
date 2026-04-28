import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DocViewer = ({ node, onClose }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoc = async () => {
      if (!node) return;
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3002/vault/${node.path}`);
        const text = await response.text();
        // Remove YAML frontmatter for display
        const cleanText = text.replace(/^---[\s\S]*?---\n/, '');
        setContent(cleanText);
      } catch (err) {
        setContent('# Error loading file\nCould not fetch content from local server.');
      } finally {
        setLoading(false);
      }
    };

    fetchDoc();
  }, [node]);

  if (!node) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        className="glass-panel doc-viewer-overlay"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {node.difficulty} • {node.status}
            </span>
            <h1 style={{ fontSize: '32px', marginTop: '4px' }}>{node.label}</h1>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '8px' }}
          >
            <X size={24} />
          </button>
        </div>

        <div className="markdown-prose">
          {loading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
              Decoding knowledge...
            </div>
          ) : (
            <ReactMarkdown>{content}</ReactMarkdown>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DocViewer;
