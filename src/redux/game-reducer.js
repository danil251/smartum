
const initialState = [
    {id: '1', res: 0, fnsh: 0},
    {id: '2', res: 0, fnsh: 0},
    {id: '3', res: 0, fnsh: 0},
    {id: '4', res: 0, fnsh: 0},
    {id: '5', res: 0, fnsh: 0},
    {id: '6', res: 0, fnsh: 0},
    {id: '7', res: 0, fnsh: 0},
    {id: '8', res: 0, fnsh: 0},
    {id: '9', res: 0, fnsh: 0},
]

export const GameReducer =(state = initialState, action) => {

    switch (action.type) {
        case 'START-GAME' : {
            let copyState = state.map(c => c.res === 0? c : {...c, res: 0})
            return copyState.map(c => action.id === c.id? {...c, res: 2} : c)
        }
        case 'CHANGE-GAME' : {
            let copyState = state.map(c => c.fnsh === 0? c : {...c, fnsh: 0})
            return copyState.map(c => action.id === c.id? {...c, fnsh: 1} : c)
        }
        default: return state
    }
}

export const StartGame = (id) => ({type: 'START-GAME', id})
export const ChangeGame = (id) => ({type: 'CHANGE-GAME', id})


