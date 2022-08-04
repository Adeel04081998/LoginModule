import { combineReducers } from 'redux';
import Reducers from './index';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistUserConfig = {
    key: "persist_user",
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    userReducer: persistReducer(persistUserConfig, Reducers.userReducer),
});

export default rootReducer;