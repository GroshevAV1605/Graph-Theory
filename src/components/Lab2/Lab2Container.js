import React, {useState} from 'react';
import Lab2 from './Lab2';

const Lab2Container = props => {
  const [hideOutput, showResult] = useState(true);
  const [FirstAdjMatrix, changeFirstMatrix] = useState({nodes: [], edges: []});
  const [SecondAdjMatrix, changeSecondMatrix] = useState({
    nodes: [],
    edges: []
  });

  const ChangeFirstAdjacency = node => {
    changeFirstMatrix({
      nodes: FirstAdjMatrix.nodes,
      edges: FirstAdjMatrix.edges
        .filter(edge => edge.from !== node.from)
        .concat(
          node.to.map(item => {
            return {from: node.from, to: item};
          })
        )
    });
    showResult(true);
  };

  const ChangeSecondAdjacency = node => {
    changeSecondMatrix({
      nodes: SecondAdjMatrix.nodes,
      edges: SecondAdjMatrix.edges
        .filter(edge => edge.from !== node.from)
        .concat(
          node.to.map(item => {
            return {from: node.from, to: item};
          })
        )
    });
    showResult(true);
  };

  const ChangeFirstVertexes = nodes => {
    showResult(true);
    changeFirstMatrix({
      nodes,
      edges: FirstAdjMatrix.edges.filter(edge => {
        return nodes.includes(edge.from) && nodes.includes(edge.to);
      })
    });
  };

  const ChangeSecondVertexes = nodes => {
    showResult(true);
    changeSecondMatrix({
      nodes,
      edges: SecondAdjMatrix.edges.filter(edge => {
        return nodes.includes(edge.from) && nodes.includes(edge.to);
      })
    });
  };

  return (
    <Lab2
      state={{hideOutput, FirstAdjMatrix, SecondAdjMatrix}}
      showResult={showResult}
      ChangeFirstAdjacency={ChangeFirstAdjacency}
      ChangeSecondAdjacency={ChangeSecondAdjacency}
      ChangeFirstVertexes={ChangeFirstVertexes}
      ChangeSecondVertexes={ChangeSecondVertexes}
    />
  );
};

export default Lab2Container;
