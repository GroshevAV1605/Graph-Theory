import React, {useState} from 'react';
import Lab6 from './Lab6';

const Lab6Container = () => {
  const [hideOutput, showResult] = useState(true);
  const [AdjMatrix, changeMatrix] = useState({nodes: [], edges: []});

  const ChangeAdjacency = node => {
    changeMatrix({
      nodes: AdjMatrix.nodes,
      edges: AdjMatrix.edges
        .filter(edge => edge.from !== node.from)
        .concat(
          node.to.map(item => {
            return {from: node.from, to: item};
          })
        )
    });
    showResult(true);
  };

  const ChangeVertexes = nodes => {
    showResult(true);
    changeMatrix({
      nodes,
      edges: AdjMatrix.edges.filter(edge => {
        return nodes.includes(edge.from) && nodes.includes(edge.to);
      })
    });
  };
  return (
    <Lab6
      state={{AdjMatrix, hideOutput}}
      ChangeAdjacency={ChangeAdjacency}
      ChangeVertexes={ChangeVertexes}
      showResult={showResult}
    />
  );
};

export default Lab6Container;
