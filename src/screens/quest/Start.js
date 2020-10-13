import React from 'react'
import './Start.css'

export default function Start() {
    return (
        <div className="wrapper">
            <div>
                Какова твоя вера в себя в целом сегодня?
    <input type="number" min="2" max="10" /> <br />
                <button onclick="location.href='/screens/what to add after start'">
                    Дальше
    </button>
            </div>
        </div>
    )
}
