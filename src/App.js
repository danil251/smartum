import './App.css';
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import Field from "./components/Field/Field";
import {ChangeGame, StartGame} from "./redux/game-reducer";
import ArrowContainer from "./components/ArrowContainer/ArrowContainer";
import {ChangeArrow} from "./redux/Arrow-reducer";

function App() {
    let items = useSelector(state => state.Game)
    let arrows = useSelector(state => state.Arrow)
    let dispatch = useDispatch()
    let item = items.map(s => <Field key={s.id} id={s.id} res={s.res} fnsh={s.fnsh} items={items}/>)
    let arrow = arrows.map(s => <ArrowContainer key={s.id} id={s.id} res={s.res}/>)



    let start = () => {
        let random = String(Math.floor(Math.random() * (10 - 1) + 1))
        dispatch(StartGame(random))
        let id = random
        for (let i = 0; i < 10; i++) {
            if (id === '1') {
                let arr = [2, 3]
                let direction = Math.floor(Math.random() * arr.length)
                if (arr[direction] === 2) {
                    id = '2'
                    dispatch(ChangeArrow(i, arr[direction]))
                }
                if (arr[direction] === 3) {
                    id = '4'
                    dispatch(ChangeArrow(i, arr[direction]))
                }
            } else if (id === '2') {
                let arr = [4, 3, 2]
                let direction = Math.floor(Math.random() * arr.length)
                if (arr[direction] === 4) {
                    id = '1'
                    dispatch(ChangeArrow(i, arr[direction]))
                } else if (arr[direction] === 3) {
                    id = '5'
                    dispatch(ChangeArrow(i, arr[direction]))
                } else if (arr[direction] === 2) {
                    id = '3'
                    dispatch(ChangeArrow(i, arr[direction]))
                }
            } else if (id === '3') {
                let arr = [4, 3]
                let direction = Math.floor(Math.random() * arr.length)
                if (arr[direction] === 4) {
                    id = '2'
                    dispatch(ChangeArrow(id, arr[direction]))
                } else if (arr[direction] === 3) {
                    id = '6'
                    dispatch(ChangeArrow(i, arr[direction]))
                }
            } else if (id === '4') {
                let arr = [1, 2, 3]
                let direction = Math.floor(Math.random() * arr.length)
                if (arr[direction] === 1) {
                    id = '1'
                    dispatch(ChangeArrow(i, arr[direction]))
                } else if (arr[direction] === 2) {
                    id = '5'
                    dispatch(ChangeArrow(i, arr[direction]))
                } else if (arr[direction] === 3) {
                    id = '7'
                    dispatch(ChangeArrow(i, arr[direction]))
                }
            } else if (id === '5') {
                let arr = [1, 2, 3, 4]
                let direction = Math.floor(Math.random() * arr.length)
                if (arr[direction] === 1) {
                    id = '2'
                    dispatch(ChangeArrow(i, arr[direction]))
                } else if (arr[direction] === 2) {
                    id = '6'
                    dispatch(ChangeArrow(i, arr[direction]))
                } else if (arr[direction] === 3) {
                    id = '8'
                    dispatch(ChangeArrow(i, arr[direction]))
                } else if (arr[direction] === 4) {
                    id = '4'
                    dispatch(ChangeArrow(i, arr[direction]))
                }
            } else if (id === '6') {
                let arr = [1, 3, 4]
                let direction = Math.floor(Math.random() * arr.length)
                if (arr[direction] === 1) {
                    id = '3'
                    dispatch(ChangeArrow(i, arr[direction]))
                } else if (arr[direction] === 3) {
                    id = '9'
                    dispatch(ChangeArrow(i, arr[direction]))
                } else if (arr[direction] === 4) {
                    id = '5'
                    dispatch(ChangeArrow(i, arr[direction]))
                }
            } else if (id === '7') {
                let arr = [1, 2]
                let direction = Math.floor(Math.random() * arr.length)
                if (arr[direction] === 1) {
                    id = '4'
                    dispatch(ChangeArrow(i, arr[direction]))
                } else if (arr[direction] === 2) {
                    id = '8'
                    dispatch(ChangeArrow(i, arr[direction]))
                }
            } else if (id === '8') {
                let arr = [1, 2, 4]
                let direction = Math.floor(Math.random() * arr.length)
                if (arr[direction] === 1) {
                    id = '5'
                    dispatch(ChangeArrow(i, arr[direction]))
                } else if (arr[direction] === 2) {
                    id = '9'
                    dispatch(ChangeArrow(i, arr[direction]))
                } else if (arr[direction] === 4) {
                    id = '7'
                    dispatch(ChangeArrow(i, arr[direction]))
                }
            } else if (id === '9') {
                let arr = [1, 4]
                let direction = Math.floor(Math.random() * arr.length)
                if (arr[direction] === 1) {
                    id = '6'
                    dispatch(ChangeArrow(i, arr[direction]))
                } else if (arr[direction] === 4) {
                    id = '8'
                    dispatch(ChangeArrow(i, arr[direction]))
                }
            }
        }
        dispatch(ChangeGame(id))
    }


    return (
        <div className="App">
            <h1>Лабиринт</h1>
            <div className="container">{item}</div>
            <div className="arrow">{arrow}</div>
            <button onClick={start} className="button">Start</button>
        </div>
    );
}

export default App;
