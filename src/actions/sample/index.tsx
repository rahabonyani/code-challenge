import { createAction, handleActions } from "redux-actions";
import { Dispatch } from "redux";

interface testType {
    status: number;
    smsid: string;
    msg: string;
}

const testGenerateActionType = createAction("REQUEST_VALIDATE_CODE");

export const testAction =
    (response?: testType) => async (dispatch: Dispatch) => {
        try {
            dispatch(testGenerateActionType(response));
        } catch (error) {}
    };

const initialState = {
    testState: {},
};

export const testReducer = handleActions<typeof initialState, any>(
    {
        [testGenerateActionType.toString()]: (state, { payload }) => ({
            ...state,
            testState: payload,
        }),
    },
    initialState
);
