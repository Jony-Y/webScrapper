import axios from 'axios';
import {buildQueryParams} from "./commonUtility";

class Service {
    constructor() {
        let service = axios.create({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            baseURL:process.env.REACT_APP_BASE_URL,
            responseType:'json'
        });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }

    handleSuccess = (response) => {
        return response.data;
    };

    handleError = (error) => {
        return Promise.reject(error)
    };

    get(path, queryParams) {
        return this.service.get(`${path}${buildQueryParams(queryParams)}`);
    }

    post(path, payload) {
        return this.service({method: 'POST', url: path, data: payload});
    }

    patch(path, payload) {
        return this.service({method: 'PATCH', url: path, data: payload});
    }

    put(path, payload) {
        return this.service({method: 'PUT', url: path, data: payload});
    }

    delete(path) {
        return this.service({method: 'DELETE', url: path});
    }
}
const request = new Service();
export default request;