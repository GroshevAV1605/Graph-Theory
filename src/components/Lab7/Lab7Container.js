import React, {useState} from 'react';
import Lab7 from './Lab7';

const Lab7Container = () => {
  const [hideOutput, showResult] = useState(true);
  const [AdjMatrix, changeMatrix] = useState({nodes: [], edges: []});

  const ChangeAdjacency = node => {
    changeMatrix({
      nodes: AdjMatrix.nodes,
      edges: AdjMatrix.edges
        .filter(edge => edge.from !== node.from)
        .concat(
          node.to.map(item => {
            let [toF, weight = ''] = item.split(':');
            return {from: node.from, to: toF, weight};
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
    <Lab7
      state={{hideOutput, AdjMatrix}}
      showResult={showResult}
      ChangeAdjacency={ChangeAdjacency}
      ChangeVertexes={ChangeVertexes}
    />
  );
};

export default Lab7Container;
