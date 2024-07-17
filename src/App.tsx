import TalentTree from "./modules/TalentTree/TalentTree"
import styles from "./App.module.scss";
function App() {
  return (
    <div className={styles.app}>

      <div className={styles.container}>
      <div className={styles.header}>
        <h1>TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</h1>
      </div>
        <TalentTree/>
      </div>
    </div>
  )
}

export default App
