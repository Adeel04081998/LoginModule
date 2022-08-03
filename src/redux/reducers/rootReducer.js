import { combineReducers } from 'redux';
import Reducers from './index';
// https://blog.jscrambler.com/how-to-use-redux-persist-in-react-native-with-asyncstorage
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