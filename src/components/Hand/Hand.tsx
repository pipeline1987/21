import * as React from 'react';

import { Card } from '../Card/Card';

export class Hand extends React.Component {
    public render () {
        return(
            <div>
                <Card />
                <Card />
            </div>
        );
    }
}