import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ROUTES from './ROUTES';
import Login from '../screens/Login/index';
import Home from '../screens/Home';
import {  useSelector } from 'react-redux';

const { AUTH_STACKS, INIT_ROUTES, AUTH_ROUTES } = ROUTES;
//Screen Defines are Below
const AuthComponents = {
    Login,
    Home
}

const ContainerStack = createStackNavigator();
const Stack = createNativeStackNavigator();

//Stack options are Below

const stackOpts = () => ({
    headerShown: false,
});


 // Auth stacks is implemented here in which initial route is defined also

const AuthStacks = (props) => {
    const userReducer = useSelector(state => state.userReducer)
    const { user } = userReducer
    return <Stack.Navigator screenOptions={stackOpts}
        initialRouteName={user ? AUTH_ROUTES.Home.screen_name : AUTH_ROUTES.Login.screen_name}>
        {(AUTH_STACKS || []).map((routeInfo, index) => (
            <Stack.Screen
                key={`AuthStack-Screen-key-${index}-${routeInfo.id}`}
                name={routeInfo.screen_name}
                component={AuthComponents[routeInfo.componenet]}
                options={routeInfo.options}

            />
        ))}
    </Stack.Navigator >
}


export default (props) => {
    return <ContainerStack.Navigator screenOptions={stackOpts} initialRouteName={INIT_ROUTES.INIT_APP}>
        <ContainerStack.Screen
            name={INIT_ROUTES.INIT_APP}
            component={AuthStacks}
        />
    </ContainerStack.Navigator >
}