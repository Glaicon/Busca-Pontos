const INITIAL_STATE = { cidades: [], cidade: '', estado: '', carregandoCidades: false }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_CIDADES':
            return { ...state, cidades: action.payload.data }
        case 'SET_CIDADES':
            return { ...state, cidades: action.payload.cidades }
        case 'STEP_CHANGED_CIDADE':
            return { ...state, cidade: action.payload }
        case 'STEP_CHANGED_ESTADO':
            return { ...state, estado: action.payload }
        case 'CARREGANDO_CIDADES':
            return { ...state, carregandoCidades: action.payload }
        default:
            return state
    }
}