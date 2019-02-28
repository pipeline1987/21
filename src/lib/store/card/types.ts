export interface ICard {
    suits: string;
    values: string;
}

export const enum CardActionTypes {
    SET_DECK = '@@card/SET_DECK'
}

export interface ICardState {
    readonly loading: boolean;
    readonly data: ICard[];
    readonly errors?: string;
}