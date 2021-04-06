import {combineReducers, createStore} from 'redux'
import {GameReducer} from "./game-reducer";
import {ArrowReducer} from "./Arrow-reducer";


const rootReducer = combineReducers({
    Game: GameReducer,
    Arrow: ArrowReducer
})

export const store = createStore(rootReducer);




