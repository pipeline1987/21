import { Action, AnyAction, combineReducers, Dispatch } from 'redux';

// CARD STORE
import { cardReducer } from './card/reducer';
import { ICardState } from './card/types';

// ENTHUSIASM STORE
import { enthusiasmReducer } from './enthusiasm/reducer';
import { IEnthusiasmState } from './enthusiasm/types';

export interface IApplicationState {
    card: ICardState,
    enthusiasm: IEnthusiasmState
}

export interface IConnnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>
}

export const rootReducer = combineReducers<IApplicationState>({
    card: cardReducer,
    enthusiasm: enthusiasmReducer,
});