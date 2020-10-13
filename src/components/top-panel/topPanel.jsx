import React from 'react'

export default function topPanel() {
    return (
        <div>
            Твоё обязательство
            <div>
                Делать то-то так-то, столько-то по
        <button onclick="location.href='/screens/quest'">квесту</button>
            </div>
      Вчера, <button onclick="location.href='/screens/day'">
                в четверг 7 августа
      </button>
            <div>
                <button onclick="location.href='/screens/report'" />
                    Выполнено<br /><small>(+2 ВВС)</small>
                <button onclick="location.href='/screens/report'" />
                        Пропущено<small>(остаётся право на 1 пропуск)</small>
                <button onclick="location.href='/screens/report'" />
                            Провалено<br /><small>(сгорает залог 12 ВВС)</small>
                <button onclick="location.href='/screens/report'" />
                                Откладывается<small>(на пятницу, 8 августа)</small>
            </div>
        </div>

    )
}
