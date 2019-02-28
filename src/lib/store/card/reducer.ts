import { CardAction } from './actions';
import { CardActionTypes, ICardState } from './types';

export const initialState: ICardState = {
    data: [],
    errors: undefined,
    loading: false,
}

export function cardReducer(state: ICardState = initialState, action: CardAction): ICardState {
    switch (action.type) {
        case CardActionTypes.SET_DECK :
            return { ...state }
        default :
            return state
    }
}
