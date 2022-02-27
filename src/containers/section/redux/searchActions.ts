export interface searchChange {
    type: 'SEARCH_CHANGE',
    payload: string,
}

export interface dataChange {
    type: 'DATA_CHANGE',
    payload: any[],
}

export type SearchActions = 
| dataChange 
| searchChange