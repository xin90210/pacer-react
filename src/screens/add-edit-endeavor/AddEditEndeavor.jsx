import React from 'react'
import styles from './AddEditEndeavor.module.css'

export default function AddEditEndeavor() {
    return (
                <div>
                    Чего ты хочешь достигнуть? Какой результат желаешь получить? <br />
                    <input type="text" /> <br />
      Чем является это стремление для тебя? <br />
                    <div className="buttons">
                        <button>желание</button>
                        <button>цель</button>
                        <button>задача</button>
                        <button>знание/навык</button>
                        <button>мечта</button> <br />
                        <button>полезная привычка</button>
                        <button>вредная привычка</button>
                        <button>проблема</button>
                        <button>гирька</button>
                    </div>
                    <button>
                        Запомнить стремление
      </button>
                </div>
    )
}
