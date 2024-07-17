import React, { MouseEvent } from "react";
import { TalentNode } from "../TalentNode";
import styles from './TalentPath.module.scss';
import TalentBridge from "../TalentBridge/TalentBridge";

type TalentPathProps = {
  pathIndices: number[];
  isNodeSelected: (index: number) => boolean;
  handleNodeClick: (index: number, event: MouseEvent) => void;
}

const TalentPath = ({ pathIndices, isNodeSelected, handleNodeClick }: TalentPathProps) => (
  <div className={styles.path}>
    {pathIndices.map((index) => (
      <React.Fragment key={index}>
        <TalentNode
          key={index}
          iconIndex={index}
          isSelected={isNodeSelected(index)}
          onClick={(e) => handleNodeClick(index, e)}
          onContextMenu={(e) => handleNodeClick(index, e)}
        />
        {index !== pathIndices[pathIndices.length-1]  && <TalentBridge isSelected={isNodeSelected(index)} />}
      </React.Fragment>
    ))}
  </div>
);

export default TalentPath