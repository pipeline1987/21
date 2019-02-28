import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Hello, IOwnProps } from '../../components/Hello/Hello';
import * as actions from '../../lib/store/enthusiasm/actions';

const mapStateToProps = ({enthusiasm} : IOwnProps) => ({
    enthusiasm
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
});

export default connect<IOwnProps>(mapStateToProps, mapDispatchToProps)(Hello);