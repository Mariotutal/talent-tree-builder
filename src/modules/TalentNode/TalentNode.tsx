import styles from './TalentNode.module.scss';

interface TalentNodeProps {
  iconIndex: number;
  isSelected: boolean;
  onClick: (e: React.MouseEvent) => void;
  onContextMenu: (e: React.MouseEvent) => void;
}

const TalentNode = ({ iconIndex, isSelected, onClick, onContextMenu }: TalentNodeProps) => {
  return (
    <div className={`${styles.node} ${isSelected && styles.selected}`} onClick={onClick} onContextMenu={onContextMenu}>
      <div
        className={styles.icon}
        style={{ 
          backgroundPositionX: `-${iconIndex * 50}px`,
          backgroundPositionY: !isSelected ? '-50px': '0px' }}
      />
    </div>
  );
};

export default TalentNode;
