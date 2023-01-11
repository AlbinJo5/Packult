import styles from "../styles/components/carrersCard.module.scss"
function CarrersCard() {
    return (
        <div className={styles.carrers_card} >
            <div className={styles.card_heading}>
                <h2>Product Designer</h2>
                <button>Apply</button>
            </div>
            <div className={styles.card_content}>
                <p>we&apos;re looking for a mid-level product designer to join our team</p>
                <div className={styles.card_content_buttons} >
                    <button>100% Remote</button>
                    <button>Full-time</button>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default CarrersCard