import React from 'react'
import './Activity.css'

export default function Activity() {
    return (
        <body>
        <main>
          <div>
            Делать то-то так-то, столько-то <br />
            Сложность: такая-то
            <button onclick="location.href='/screens/get quest'">
              Взять квест
            </button>
            <div>
              <button onclick="location.href='/screens/add edit activity'">
                Уточнить действие
              </button>
              <button onclick="location.href='/screens/activities'">Удалить</button>
            </div>
            Способствует в стремлениях:
            <ul id="endeavors" onclick="if (event.target!=this)
              location.href='/screens/endeavor'">
      
              <li>Sit dui fringilla, ligula vigoro</li>
              <li>Metus spero sagittis orci</li>
              <li>Cras perpetum habitasse ac vici faucibus curabitur morbi</li>
            </ul>
            <div>
              <button onclick="location.href='/screens/endeavors'">
                Связать существующее
              </button>
              <button onclick="location.href='/screens/add edit endeavor'">
                Создать связанное
              </button>
            </div>
          </div>
        </main>
      </body>
    )
}
