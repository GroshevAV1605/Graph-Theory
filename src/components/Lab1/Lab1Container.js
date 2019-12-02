import React, {useState} from 'react';
import Lab1 from './Lab1';

const Lab1Conainer = props => {
  const [hideOutput, showResult] = useState(true);
  const [adjacencyList, ChangeList] = useState(['', '']);

  const ChangeAdjacency = (Sindex, value) => {
    ChangeList(
      adjacencyList.map((item, index) => {
        return index === Sindex ? value : item;
      })
    );
    showResult(true);
  };

  const ChangeVertexCount = len => {
    let newAdjList = [...adjacencyList];
    while (newAdjList.length < len) {
      newAdjList.push('');
    }
    newAdjList.length = len || 0;
    ChangeList(newAdjList);
    showResult(true);
  };

  return (
    <Lab1
      state={{hideOutput, adjacencyList}}
      showResult={showResult}
      ChangeAdjacency={ChangeAdjacency}
      ChangeVertexCount={ChangeVertexCount}
    />
  );
};

export default Lab1Conainer;
