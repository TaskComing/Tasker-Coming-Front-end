import { useEffect, useState } from 'react';
import http from '../utils/axios';

function TreeList({ id, nodeList }) {
  console.log('id', id, 'nodeList', nodeList);
  // eslint-disable-next-line no-underscore-dangle
  const node = nodeList.find((item) => item._id === id);
  console.log('node', node);
  const childIds = node.childIdArray;
  return (
    <li>
      {node.text}
      {childIds && childIds.length > 0 && (
        <ul style={{ paddingLeft: '2rem', listStyle: 'none' }}>
          {childIds.map((childId) => (
            <TreeList key={childId} id={childId} nodeList={nodeList} />
          ))}
        </ul>
      )}
    </li>
  );
}

function Tree({ id = '642adf7398ae2cefc3ef6164' }) {
  const [treeData, setTreeData] = useState([]);
  const getTree = async () => {
    const response = await http(`/v1/tree/${id}`, {
      method: 'GET',
    });
    setTreeData(response.data);
  };

  useEffect(() => {
    getTree();
  }, []);

  return (
    <>
      <h1>Tree</h1>
      {treeData && treeData.length > 0 && (
        <>
          {treeData[0].text}
          <ul style={{ paddingLeft: '2rem', listStyle: 'none' }}>
            {treeData[0].childIdArray &&
              treeData[0].childIdArray.length > 0 &&
              treeData[0].childIdArray.map((childId) => (
                <TreeList key={childId} id={childId} nodeList={treeData} />
              ))}
          </ul>
        </>
      )}
    </>
  );
}

export default Tree;
