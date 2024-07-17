import styles from './TalentBridge.module.scss';

type TalentBridgeProps = {
  isSelected: boolean;
}

const TalentBridge = ({isSelected}: TalentBridgeProps) => {
  return <div className={`${styles.bridge} ${isSelected && styles.isSelected} `} />;
};

export default TalentBridge;
