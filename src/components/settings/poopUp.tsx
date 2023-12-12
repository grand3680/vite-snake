import { useState, FC } from 'react';
import styles from './poopUp.module.scss'
import some from '/images/setup.png'

export const SettingPoopUp : FC = () => {
    const [activePoopUp, setPoopUp] = useState(false);

    return <>
        <img className={styles.imgSetting} src={String(some)} onClick={() => setPoopUp((activePoopUp) => !activePoopUp)} alt="" />
        activePoopUp is {activePoopUp && "true"}

        <div style={{display : activePoopUp ? 'inline' : 'none'}} className={styles.poopUp}>
            <h1>heloo</h1>
            {activePoopUp && <h1>mayBe</h1>}            
        </div>

    </>
}