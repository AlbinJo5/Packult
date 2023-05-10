import styles from "../styles/components/workNumbers.module.scss"
import CountUp from 'react-countup';
export default function WorkNumbers() {
  return (
    <div className={styles.workNumbers} >
      <div className={styles.content}>
        <h1>
          <CountUp
            start={0}
            end={200}
            duration={3}
            separator=""
            decimals={0}
            decimal=","
            suffix="+ "
            enableScrollSpy={true}
          /></h1>
        <h2>Years of Experience</h2>
      </div>
      <div className={styles.content}>
        <h1><CountUp
          start={0}
          end={20}
          duration={3}
          separator=""
          decimals={0}
          decimal=","
          enableScrollSpy={true}
        /></h1>
        <h2>Skilled Professionals</h2>
      </div>
      <div className={styles.content}>

        <h1>
          <span>0</span>
          <CountUp
            start={0}
            end={32}
            duration={3}
            separator=""
            decimals={0}
            decimal=","
            enableScrollSpy={true}
          /></h1>
        <h2>Projects</h2>
      </div>
    </div>
  )
}
