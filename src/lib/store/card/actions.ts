import { CardActionTypes } from './types';

export interface ISetDeck {
    type: CardActionTypes.SET_DECK
}

export type CardAction = ISetDeck;

export function setDeck(): ISetDeck {
    return {
        type: CardActionTypes.SET_DECK
    }
}