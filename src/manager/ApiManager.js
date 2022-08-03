import React from 'react';
import Axios from 'axios';


// generic function is created for api integration  with help of post and get request

export const postRequest = async (url, data, onSuccess = () => { }, onError = () => { }, headers = {},) => {

    try {
        let res = await Axios.post(url, data, headers,);
        // console.log("res=>", res);
        ///callback which retun on succes result
        onSuccess(res);

    } catch (error) {
        // console.log("[ApiManager].postRequest.error", error);
        
        ///callback which retun  err result
        onError(error)
    } finally {

    }
};
export const getRequest = async (url, onSuccess = () => { }, onError = () => { }, headers = {},) => {
    try {
        let res = await Axios.get(url, headers);
        ///callback which retun on succes result

        onSuccess(res);
    } catch (error) {
        ///callback which retun  err result

        onError(error)
    }
};
