import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import GraphView from './components/GraphView';
import DocViewer from './components/DocViewer';
import vaultData from './data/vault.json';

function App() {
  const [activeNode, setActiveNode] = useState(null);
  const [data, setData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    // Process data for react-force-graph
    // It needs 'id' but we already have id. Links need 'source' and 'target' which we have.
    setData({
      nodes: vaultData.nodes,
      links: vaultData.links
    });
  }, []);

  const handleNodeClick = (node) => {
    setActiveNode(node);
  };

  const handleSearchSelect = (node) => {
    setActiveNode(node);
  };

  return (
    <div className="aura-shell">
      <Sidebar 
        nodes={data.nodes} 
        onNodeSelect={handleSearchSelect} 
        activeNodeId={activeNode?.id} 
      />
      
      <main className="content-hub">
        <GraphView 
          data={data} 
          onNodeClick={handleNodeClick} 
          activeNodeId={activeNode?.id} 
        />
        
        {activeNode && (
          <DocViewer 
            node={activeNode} 
            onClose={() => setActiveNode(null)} 
          />
        )}
      </main>
    </div>
  );
}

export default App;
