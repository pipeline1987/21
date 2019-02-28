import { IApplicationState } from '.';
import configureStore from './configureStore';

import { ICard } from './card/types';

function generateDeck() {
    const values: string[] = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suits: string[] = ['♦','♣','♥','♠'];
    const deck: ICard[] = [];
    for (const s of suits) {
        for (const v of values) {
            deck.push({values: v, suits: s});
        }
    }
    return deck;
}

const initialState: IApplicationState = {
    card: { data: generateDeck(), loading: false },
    enthusiasm: { data: { enthusiasmLevel: 10, languageName: 'TypeScript' }}
};

const store = configureStore(initialState);

export default store;


