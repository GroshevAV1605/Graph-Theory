import React, {useState} from 'react';
import Lab8 from './Lab8';
import {test} from './test';

const Lab8Container = () => {
  const [hideOutput, showResult] = useState(true);
  const [AdjMatrix, changeMatrix] = useState(test);

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
    <Lab8
      state={{hideOutput, AdjMatrix}}
      showResult={showResult}
      ChangeAdjacency={ChangeAdjacency}
      ChangeVertexes={ChangeVertexes}
    />
  );
};

export default Lab8Container;
