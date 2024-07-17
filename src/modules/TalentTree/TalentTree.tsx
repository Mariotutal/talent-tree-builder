import { useState, MouseEvent } from 'react';
import { MAX_POINTS, MAX_AMOUNT_TALENTS_PER_ROW } from '../../utils/constants';
import { TalentPath } from '../TalentPath';
import { deselectNode, selectNode } from './utils';
import styles from './TalentTree.module.scss';


const TalentTree = () => {
  const [selectedNodes, setSelectedNodes] = useState<number[]>([]);

  const handleNodeClick = (index: number, event: MouseEvent) => {
    event.preventDefault();
    
    const isRightClick = event.type === 'contextmenu';
    setSelectedNodes(prevSelectedNodes => {
      if (isRightClick) {
        return deselectNode(prevSelectedNodes, index, MAX_AMOUNT_TALENTS_PER_ROW);
      } else {
        return selectNode(prevSelectedNodes, index, MAX_POINTS, MAX_AMOUNT_TALENTS_PER_ROW);
      }
    });
  };

  const isNodeSelected = (index: number) => selectedNodes.includes(index);

  return (
    <div className={styles.container}>
      <div className={styles.treeContainer}>
        <div className={styles.tree}>
          <span>TALENT PATH 1</span>
          <TalentPath pathIndices={[0, 1, 2, 3]} isNodeSelected={isNodeSelected} handleNodeClick={handleNodeClick} />
        </div>
        <div className={styles.tree}>
          <span>TALENT PATH 2</span>
          <TalentPath pathIndices={[4, 5, 6, 7]} isNodeSelected={isNodeSelected} handleNodeClick={handleNodeClick} />
        </div>
      </div>
      <div className={styles.points}>
        <p>{selectedNodes.length} / {MAX_POINTS}</p>
        <p>Points Spent</p>
      </div>
    </div>
  );
};


export default TalentTree;
