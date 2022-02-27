import { SearchActions } from "./searchActions";

export interface SearchState {
    search: string,
    data: any[]
}

const initialState = {
    search: '',
    data: []
}

export const SearchReducer = (state:SearchState = initialState, action: SearchActions) => {
    switch(action.type){
        case "DATA_CHANGE": {
            return {...state, data: action.payload};
        }
        case "SEARCH_CHANGE": {
            return {...state, search: action.payload};
        }
        default:
            return state;
    }
}