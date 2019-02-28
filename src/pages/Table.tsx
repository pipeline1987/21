import * as React from 'react';

// import { Hand } from '../components/Hand/Hand';
import Interfaz from '../containers/Interfaz/Interfaz';

export class Table extends React.Component<{}> {
    public render () {
        return(
            <div>
                {/* <Hand /> */}
                <Interfaz />
                {/* <Hand /> */}
            </div>
        );
    }
}