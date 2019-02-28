import { EnthusiasmAction } from './actions';
import { EnthusiasmActionTypes, IEnthusiasmState } from './types';

// Type-safe initialState!
export const initialState: IEnthusiasmState = {
  data: { enthusiasmLevel: 1 }
}

export function enthusiasmReducer(state: IEnthusiasmState = initialState, action: EnthusiasmAction): IEnthusiasmState {
  switch (action.type) {
      case EnthusiasmActionTypes.INCREMENT_ENTHUSIASM :
        return { ...state, data: { ...state.data, enthusiasmLevel: state.data.enthusiasmLevel + 1 }};
      case EnthusiasmActionTypes.DECREMENT_ENTHUSIASM :
        return { ...state, data: { ...state.data, enthusiasmLevel: state.data.enthusiasmLevel - 1 }};
      default:
          return state
  }
}