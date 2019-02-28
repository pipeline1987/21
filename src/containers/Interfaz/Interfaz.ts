import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Interfaz, IOwnProps } from '../../components/Interfaz/Interfaz';

import * as action from '../../lib/store/card/actions';

const mapStateToProps = ({card}: IOwnProps) => ({
    card
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSetDeck: () => dispatch(action.setDeck())
});

export default connect<IOwnProps>(mapStateToProps, mapDispatchToProps)(Interfaz);