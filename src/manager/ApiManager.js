import React from 'react';
import Axios from 'axios';

export const postRequest = async (url, data, onSuccess = () => { }, onError = () => { }, headers = {},) => {

    try {
        let res = await Axios.post(url, data, headers,);

        onSuccess(res);

    } catch (error) {
        // console.log("[ApiManager].postRequest.error", error);
        onError(error)
    } finally {

    }
};
export const getRequest = async (url, onSuccess = () => { }, onError = () => { }, headers = {},) => {
    try {
        let res = await Axios.get(url, headers);
        onSuccess(res);
    } catch (error) {
        onError(error)
    }
};
