import React from 'react';
import Graph from 'react-graph-vis';

const GraphDrawing = ({matrix}) => {
  let options = {
    edges: {
      color: '#000000',
      smooth: {enabled: true, type: 'dynamic'},
      length: 200
    },
    nodes: {
      color: '#888f99'
    },
    physics: {
      enabled: true
    },
    interaction: {multiselect: true, dragView: true}
  };

  let graph = {
    nodes: [...Array(matrix.length).keys()].map(i => ({id: i, label: 'x' + i})),
    edges: []
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      for (let k = 0; k < matrix[i][j]; k++) {
        graph.edges.push({from: i, to: j});
      }
    }
  }

  return (
    <div id="graph" style={{height: '40vh'}}>
      <Graph graph={graph} options={options} />
    </div>
  );
};

export default GraphDrawing;
