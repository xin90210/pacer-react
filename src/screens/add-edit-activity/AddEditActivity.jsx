import React from 'react'
import styles from './AddEditActivity.module.css'

export default function AddEditActivity() {
    return (
        <div>
            Какое действие нужно регулярно выполнять (или избегать) <br />
      для приближения к каким-то из твоих стремлений? <br />
            <input type="text" /> <br />
      Укажи количественную меру выполнения в день <br />
      (сколько минут, повторений, кругов, раз...) <br />
            <input type="text" /> <br />
      регулярность <button>
                ежедневно
      </button> <br />
      Оцени сложность серии из X выполнений?
            <input type="number" min="1" max="10" /> <br />
            <button>Запомнить действие</button>
        </div>
    )
}
