import axios from "axios"
import configs from "../../server/config";

export const saveSelection = function (data) {
    return axios({
        method: 'post',
        url: configs.API_URL + '/rooms',
        data: {selections: data},
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    });
}

export const getDropDowns = function () {
    return axios({
        method: 'get',
        url: configs.API_URL + '/constants'
    });
}