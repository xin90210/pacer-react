import React from 'react'
import './Activities.css'

export default function Activities() {
    return (
        <body>
            <main>
                <div>
                    <button onclick="location.href='/screens/add edit activity'">Добавить Действие</button>
                    <div className="wrapper">
                        <ul id='activities' onclick="if (event.target!=this)
          location.href='/screens/activity'">
                        </ul>
                    </div>
                </div>
            </main>
        </body>
    )
}
