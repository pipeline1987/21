import { EnthusiasmActionTypes } from './types';

export interface IIncrementEnthusiasm {
    type: EnthusiasmActionTypes.INCREMENT_ENTHUSIASM;
}

export interface IDecremenEnthusiasm {
    type: EnthusiasmActionTypes.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecremenEnthusiasm;

export function incrementEnthusiasm(): IIncrementEnthusiasm {
    return {
        type: EnthusiasmActionTypes.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): IDecremenEnthusiasm {
    return {
        type: EnthusiasmActionTypes.DECREMENT_ENTHUSIASM
    }
}