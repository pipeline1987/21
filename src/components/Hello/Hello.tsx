import * as React from "react";

import { IEnthusiasmState } from '../../lib/store/enthusiasm/types';

export interface IOwnProps {
  enthusiasm: IEnthusiasmState;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export class Hello extends React.Component<IOwnProps, object> {
  public render() {
    const { enthusiasm, onDecrement, onIncrement } = this.props;
    // tslint:disable-next-line:no-console
    // console.log(enthusiasm, onDecrement, onIncrement)
    return(
      <div>
          <div className="greeting">
              Hello {enthusiasm.data.languageName + getExclamationMarks(enthusiasm.data.enthusiasmLevel)}
          </div>
          <div>
              <button onClick={onDecrement}>-</button>
              <button onClick={onIncrement}>+</button>
          </div>
      </div>
    )
  }
}
  export default Hello;
  
  function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }