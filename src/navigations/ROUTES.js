
const INIT_ROUTES = {
    "INIT_APP": "INIT_APP",
};
const AUTH_ROUTES = {
    "Login": {
        screen_name: "Login",
        options: null,
    },
    "Home":{
        screen_name: "Home",
        options: null, 
    }
};

const AUTH_STACKS = Object.keys(AUTH_ROUTES).map((key, index) => ({ id: `init-${index}-${key}`, screen_name: AUTH_ROUTES[key].screen_name, componenet: key }));

export default {

    AUTH_STACKS,
    INIT_ROUTES,
    AUTH_ROUTES
}

