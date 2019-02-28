import * as React from 'react';
import Hello from '../containers/Hello/Hello';

export class HelloPage extends React.Component<{}> {
    public render () {
        return(
            <div>
                <Hello />
            </div>
        );
    }
}