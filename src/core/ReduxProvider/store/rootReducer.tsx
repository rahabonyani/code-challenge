import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { testReducer } from "../../../actions/sample";

// sample persist config for save some data on localStorage
const testPersistConfig = {
    key: "test",
    storage: storage,
    whitelist: ["responseRegister"],
};

export const rootReducer = () =>
    combineReducers({
        test: persistReducer(testPersistConfig, testReducer),
    });
