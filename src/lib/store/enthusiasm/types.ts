// export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
// export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

// export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
// export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

export const enum EnthusiasmActionTypes {
    DECREMENT_ENTHUSIASM = '@@enthusiasm/DECREMENT_ENTHUSIASM',
    INCREMENT_ENTHUSIASM = '@@enthusiasm/INCREMENT_ENTHUSIASM',
}

export interface IEnthusiasm {
    languageName?: string;
    enthusiasmLevel: number;
}

export interface IEnthusiasmState {
    readonly data: IEnthusiasm
}