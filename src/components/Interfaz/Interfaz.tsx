import * as React from 'react';
import { Outcome } from '../Outcome/Outcome';

import { ICardState } from '../../lib/store/card/types';

export interface IOwnProps {
    card: ICardState;
    onSetDeck?: () => void;
}

export class Interfaz extends React.Component<IOwnProps, {}> {
    public render () {
        const { card, onSetDeck } = this.props;
        // tslint:disable-next-line:no-console
        console.log(card, onSetDeck);
        // let algo;
        // if(onSetDeck) {
        //     onSetDeck();
        //     algo = cards.data.toString();
        // }
        return(
            <div>
                <button>New Game</button>
                {/* <input type="text" value={algo}/> */}
                <Outcome />
                <button>Deal</button>
                <button>Hit</button>
                <button>Stand</button>
            </div>
        );
    }
}