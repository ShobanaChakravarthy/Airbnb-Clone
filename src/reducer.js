export const initialState = {
    inp: 2,
    showSearch: false,
    startDate: new Date(),
    endDate: new Date(),
}
const reducer = (state,action)=> {
    switch(action.type){
        case 'SET_INP':
            return{
                ...state,
                inp: action.inp
            }
        case 'SHOW_SEARCH':
            return{
                ...state,
                showSearch: action.showSearch
            }
        case "SET_DATE":
            return{
                ...state,
                startDate: action.startDate,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

export default reducer;