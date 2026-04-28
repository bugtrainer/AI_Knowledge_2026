import React, { useRef, useEffect, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

const GraphView = ({ data, onNodeClick, activeNodeId }) => {
  const fgRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth - 320, // Subtract sidebar width
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Center Graph on load
  useEffect(() => {
    if (fgRef.current) {
        fgRef.current.d3Force('charge').strength(-150);
        fgRef.current.d3Force('link').distance(50);
    }
  }, []);

  return (
    <div className="graph-container">
      <ForceGraph2D
        ref={fgRef}
        graphData={data}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        nodeRelSize={6}
        nodeLabel="label"
        nodeColor={node => {
          if (node.id === activeNodeId) return '#06b6d4'; // Active
          if (node.status === 'evergreen') return '#10b981'; // Solved/Stable
          if (node.status === 'growth') return '#f59e0b'; // In progress
          return '#64748b'; // Default/Seed
        }}
        linkColor={() => 'rgba(255, 255, 255, 0.08)'}
        linkWidth={1}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.label;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Outfit`;
          const textWidth = ctx.measureText(label).width;
          const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

          // Draw node circle
          ctx.beginPath();
          ctx.arc(node.x, node.y, 4, 0, 2 * Math.PI, false);
          ctx.fillStyle = node.id === activeNodeId ? '#06b6d4' : '#8b5cf6';
          ctx.fill();

          // Draw glow for active
          if (node.id === activeNodeId) {
            ctx.shadowColor = '#06b6d4';
            ctx.shadowBlur = 15;
            ctx.stroke();
          }

          // Draw text label
          if (globalScale > 1.5) {
            ctx.fillStyle = 'rgba(248, 250, 252, 0.8)';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(label, node.x, node.y + 10);
          }
        }}
        onNodeClick={onNodeClick}
        cooldownTicks={100}
      />
    </div>
  );
};

export default GraphView;
