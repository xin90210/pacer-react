import React from 'react'
import styles from './Activities.module.css'

export default function Activities() {
    return (
        <div>
            <button>Добавить Действие</button>
                <ul className={styles.list}>
                    <li className={styles.item}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quis.</li>
                    <li className={styles.item}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, non.</li>
                    <li className={styles.item}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, non.</li>
                </ul>
        </div>

    )
}
