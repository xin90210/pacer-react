import React from 'react'
import styles from './Confidence.module.css'

export default function Confidence() {
    return (
        <div>
            Ты получил (потратил) столько-то Веры В Себя,
            <div class="blockRow">
                отчитавшись о выполнении по
        <button>квесту</button>
        взяв
        <button>квест</button>
            </div>
            <div class="blockRow">
                за
        <button >такое-то число</button>
            </div>
            <div class="wrapper">
                <ul id='changes'>
                    <div>8 августа</div>
                    <li><span>7</span></li>
                    <li><span data-before="7" data-after="= 3">- 4</span></li>
                    <li><span data-before="3" data-after="= 1">- 2</span></li>
                    <li><span data-before="1" data-after="= 0">- 1</span></li>
                    <li><span data-before="0" data-after="= 1">+ 1</span></li>
                    <li><span data-before="1" data-after="= 2">+ 1</span></li>
                    <li><span data-before="2" data-after="= 4">+ 1 + 1</span></li>
                    <div>9 августа</div>
                    <li><span data-before="4" data-after="= 0">- 4</span></li>
                    <li><span data-before="0" data-after="= 1">+ 1</span></li>
                    <li><span data-before="1" data-after="= 2">+ 1</span></li>
                    <li><span data-before="2" data-after="= 3">+ 1</span></li>
                    <li><span data-before="3" data-after="= 4">+ 1</span></li>
                    <li><span data-before="4" data-after="= 5">+ 1</span></li>
                    <li><span data-before="5" data-after="= 6">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 8</span></li>
                    <li><span data-before="" data-after="= ">- 10</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 2</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 2</span></li>
                    <li><span data-before="" data-after="= ">- 4</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 2</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 2</span></li>
                    <li><span data-before="" data-after="= ">+ 2</span></li>
                    <li><span data-before="" data-after="= ">+ 10</span></li>
                    <li><span data-before="" data-after="= ">+ 2</span></li>
                    <li><span data-before="" data-after="= ">+ 2</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 2</span></li>
                    <li><span data-before="" data-after="= ">- 24</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 2</span></li>
                    <li><span data-before="" data-after="= ">+ 2</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 2</span></li>
                    <li><span data-before="" data-after="= ">+ 3</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 2</span></li>
                    <li><span data-before="" data-after="= ">- 15</span></li>
                    <li><span data-before="" data-after="= ">+ 1</span></li>
                    <li><span data-before="" data-after="= ">+ 2</span></li>
                    <li><span data-before="" data-after="= ">+ 3</span></li>
                </ul>
            </div>
        </div>
    )
}
