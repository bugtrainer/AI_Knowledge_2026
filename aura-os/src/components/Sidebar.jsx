import React, { useState } from 'react';
import { Search as SearchIcon, Brain, Cpu, Users, Briefcase, Info } from 'lucide-react';

const Sidebar = ({ nodes, onNodeSelect, activeNodeId }) => {
  const [query, setQuery] = useState('');

  const filteredNodes = nodes.filter(node => 
    node.label.toLowerCase().includes(query.toLowerCase()) ||
    node.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 50); // Limit to top 50 for performance

  return (
    <div className="sidebar glass-panel">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <div style={{ padding: '8px', background: 'var(--accent-primary)', borderRadius: '8px' }}>
          <Brain size={24} color="white" />
        </div>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', letterSpacing: '-0.5px' }}>Aura Knowledge OS</h2>
      </div>

      <div style={{ position: 'relative' }}>
        <SearchIcon style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={16} />
        <input 
          type="text" 
          placeholder="Search knowledge..." 
          className="search-bar"
          style={{ paddingLeft: '40px' }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '20px' }}>
        {filteredNodes.map(node => (
          <div 
            key={node.id} 
            className={`node-card ${activeNodeId === node.id ? 'active' : ''}`}
            onClick={() => onNodeSelect(node)}
            style={{
                borderLeft: activeNodeId === node.id ? '3px solid var(--accent-secondary)' : '3px solid transparent',
                paddingLeft: activeNodeId === node.id ? '16px' : '12px'
            }}
          >
            <div style={{ fontWeight: 500, fontSize: '14px', marginBottom: '4px', color: activeNodeId === node.id ? 'white' : 'var(--text-main)' }}>
                {node.label}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', gap: '8px' }}>
              <span>{node.tags[0] || 'Uncategorized'}</span>
              <span>•</span>
              <span style={{ textTransform: 'capitalize' }}>{node.difficulty}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ paddingTop: '20px', borderTop: '1px solid var(--glass-border)', fontSize: '11px', color: 'var(--text-muted)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span>Nodes Encoded</span>
          <span>{nodes.length}</span>
        </div>
        <div style={{ textAlign: 'center', marginTop: '12px', color: 'var(--accent-secondary)' }}>
          System Stable • v2026.4
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
