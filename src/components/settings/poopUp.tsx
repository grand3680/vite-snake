import { useState, FC } from 'react';
import styles from "./poopUp.module.scss"

export const SettingPoopUp : FC = () => {
    const [activePoopUp, setPoopUp] = useState(true);

    return <>
        <div className={styles.poopUp}>
            <h1>heloo</h1>

            <button onClick={() => setPoopUp((activePoopUp) => !activePoopUp)}>
                activePoopUp is {activePoopUp}
            </button>

            {activePoopUp && <h1>mayBe</h1>}            
        </div>

    </>
}