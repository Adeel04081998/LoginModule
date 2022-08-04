import TYPES from "../TYPES"

const setUserAction = (payload = {}) => {
    return {
        type: TYPES.SET_USER_ACTION,
        payload: { ...payload }
    }
}

const clearUserAction = (payload = {}) => {
    return {
        type: TYPES.CLEAR_USER_ACTION,
        payload,
    }
}

export default {
    setUserAction,
    clearUserAction,
}