
const initialState = [
    {id: '1', res: 0},
    {id: '2', res: 0},
    {id: '3', res: 0},
    {id: '4', res: 0},
    {id: '5', res: 0},
    {id: '6', res: 0},
    {id: '7', res: 0},
    {id: '8', res: 0},
    {id: '9', res: 0},
    {id: '10', res: 0},
]

export const ArrowReducer =(state = initialState, action) => {

    switch (action.type) {
        case 'CHANGE-ARROW' : {
            return state.map(m => m.id === String(action.id + 1)? {...m, res: action.res} : m)
        }
        default: return state
    }
}

export const ChangeArrow = (id, res) => ({type: 'CHANGE-ARROW', id, res})



