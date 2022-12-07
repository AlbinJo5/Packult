import styles from "../styles/components/workNumbers.module.scss"

export default function WorkNumbers() {
  return (
    <div className={styles.workNumbers} >
      <div className={styles.content}>
        <h1>200+</h1>
        <h2>Working professional Experience</h2>
      </div>
      <div className={styles.content}>
        <h1>18</h1>
        <h2>Skilled Professionals</h2>
      </div>
      <div className={styles.content}>
        <h1>156</h1>
        <h2>Projects World wide</h2>
      </div>
    </div>
  )
}
