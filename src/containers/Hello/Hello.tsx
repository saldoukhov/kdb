import Hello from '../../components/Hello';
import * as actions from '../../actions/index';
import {StoreState} from '../../types';
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {withRouter} from "react-router-dom";

export function mapStateToProps({enthusiasmLevel, languageName}: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}

// @ts-ignore
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Hello));