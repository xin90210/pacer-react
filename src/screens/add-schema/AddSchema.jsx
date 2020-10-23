import React from 'react'
import styles from './AddSchema.module.css'

export default function AddSchema() {
    return (
        <div>
      Новая схема регулярности
      <div class="blockRow" id="boundBtns" >
        С привязкой к
        <button class="pressed" id="daysBtn">дням недели</button>
        <button id="datesBtn">числам месяца</button>
        <button id="unboundBtn">без</button>
      </div>
      <div id="boundDivs">
        <div id="daysDiv">
          <div class="blockRow" id="daysBtns">
            <button>Пн</button>
            <button>Вт</button>
            <button>Ср</button>
            <button>Чт</button>
            <button>Пт</button>
            <button>Сб</button>
            <button>Вс</button>
          </div>
          <div id="daysGroupLenDiv">
            <div class="blockRow" hidden>
              Выполнений в серии
              <input type="number" class="groupLenInp" min="1" max="999" />
              <button>неделя</button>
            </div>
            <div class="blockRow">
              Серия - календарная неделя
              <button>иначе</button>
            </div>
          </div>
          <div id="daysBreaksDiv">
            <div class="blockRow" hidden>
              Нужно
              <input type="number" class="groupLenInp" min="1" max="999" />
              <span class="breaks">перерывов</span> в серии
              <button>без</button>
            </div>
            <div class="blockRow">
              Без <span class="breaks">перерывов</span> в серии
              <button>иначе</button>
            </div>
          </div>
          <div id="daysRestDiv" >
            <div class="blockRow" hidden>
              Отдых между сериями
              <input type="number" class="groupLenInp" min="1" max="999" />
              <span class="rest">недель</span>
              <button>без</button>
            </div>
            <div class="blockRow">
              Без отдыха между сериями
              <button>иначе</button>
            </div>
          </div>
          <div id="daysSkipDiv">
            <div class="blockRow" hidden>
              <span class="skip">С правом на пропуски</span>
              <input type="number" class="groupLenInp" min="1" max="999" />
              <button>без</button>
            </div>
            <div class="blockRow">
              <span class="skip">Без права на пропуск</span>
              <button>иначе</button>
            </div>
          </div>
          <div id="daysEarnDiv">
            <div class="blockRow" hidden>
              по одному за
              <input type="number" class="groupLenInp" min="1" max="999" />
              выполнений
              <button>иначе</button>
            </div>
            <div class="blockRow">
              <span class="earn">и заслужить его нельзя</span>
              <button>иначе</button>
            </div>
          </div>
        </div>
        <div id="datesDiv" hidden>
          <div id="datesBtns">
            <div class="blockRow">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>7</button>
              <button>8</button>
            </div>
            <div class="blockRow">
              <button>9</button>
              <button>10</button>
              <button>11</button>
              <button>12</button>
              <button>13</button>
              <button>14</button>
              <button>15</button>
              <button>16</button>
            </div>
            <div class="blockRow">
              <button>17</button>
              <button>18</button>
              <button>19</button>
              <button>20</button>
              <button>21</button>
              <button>22</button>
              <button>23</button>
              <button>24</button>
            </div>
            <div class="blockRow">
              <button>25</button>
              <button>26</button>
              <button>27</button>
              <button>28</button>
              <button>29</button>
              <button>30</button>
              <button>31</button>
              <button >32</button>
            </div>
          </div>
          <div id="datesGroupLenDiv">
            <div class="blockRow" hidden>
              Выполнений в серии
              <input type="number" class="groupLenInp" min="1" max="999" />
              <button>месяц</button>
            </div>
            <div class="blockRow">
              Серия - календарный месяц
              <button>иначе</button>
            </div>
          </div>
          <div id="datesBreaksDiv">
            <div class="blockRow" hidden>
              Нужно
              <input type="number" class="groupLenInp" min="1" max="999" />
              <span class="breaks">перерывов</span> в серии
              <button>без</button>
            </div>
            <div class="blockRow">
              Без <span class="breaks">перерывов</span> в серии
              <button>иначе</button>
            </div>
          </div>
          <div id="datesRestDiv" >
            <div class="blockRow" hidden>
              Отдых между сериями
              <input type="number" class="groupLenInp" min="1" max="999" />
              <span class="rest">недель</span>
              <button>без</button>
            </div>
            <div class="blockRow">
              Без отдыха между сериями
              <button>иначе</button>
            </div>
          </div>
          <div id="datesSkipDiv">
            <div class="blockRow" hidden>
              <span class="skip">С правом на пропуски</span>
              <input type="number" class="groupLenInp" min="1" max="999" />
              <button>без</button>
            </div>
            <div class="blockRow">
              <span class="skip">Без права на пропуск</span>
              <button>иначе</button>
            </div>
          </div>
          <div id="datesEarnDiv">
            <div class="blockRow" hidden>
              по одному за
              <input type="number" class="groupLenInp" min="1" max="999" />
              выполнений
              <button>иначе</button>
            </div>
            <div class="blockRow">
              <span class="earn">и заслужить его нельзя</span>
              <button>иначе</button>
            </div>
          </div>
        </div>
        <div id="unboundDiv" hidden>
          <div class="blockRow" id="unboundGroupLenDiv">
            Выполнений в серии
            <input type="number" class="groupLenInp" min="1" max="999" />
          </div>
          <div id="unboundBreaksDiv">
            <div class="blockRow" hidden>
              откладываний в серии
              <input type="number" class="groupLenInp" min="1" max="999" />
              <button>без откладываний</button>
            </div>
            <div class="blockRow">
              Без откладываний в серии
              <button>иначе</button>
            </div>
          </div>
          <div id="unboundRestDiv">
            <div class="blockRow" hidden>
              дней отдыха между сериями
              <input type="number" class="groupLenInp" min="1" max="999" />
              <button>без отдыха</button>
            </div>
            <div class="blockRow">
              Без отдыха между сериями
              <button>иначе</button>
            </div>
          </div>
          <div id="unboundSkipDiv">
            <div class="blockRow" hidden>
              <span class="skip">С правом на пропуски</span>
              <input type="number" class="groupLenInp" min="1" max="999" />
              <button>без</button>
            </div>
            <div class="blockRow">
              <span class="skip">Без права на пропуск</span>
              <button>иначе</button>
            </div>
          </div>
          <div id="unboundEarnDiv">
            <div class="blockRow" hidden>
              по одному за
              <input type="number" class="groupLenInp" min="1" max="999" />
              выполнений
              <button>иначе</button>
            </div>
            <div class="blockRow">
              <span class="earn">и заслужить его нельзя</span>
              <button>иначе</button>
            </div>
          </div>
        </div>
      </div>
      <div class="blockRow">
        Назвать <input id="nameInp" />
      </div>
      <div class="blockRow">
        <button >Сохранить</button>
        <button >Отмена</button>
      </div>
    </div>
    )
}
