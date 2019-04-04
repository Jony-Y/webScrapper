import isEmpty from "lodash/isEmpty";

export function deepEquals(item1, item2){
    return JSON.stringify(item1) === JSON.stringify(item2);
}

/**
 * Build the query params to be set on the url
 * @param params    {Object}  The payload object
 * @returns {string}    the formatted query params
 */
export function buildQueryParams(params={}){
    let esc = encodeURIComponent;
    return (!isEmpty(params))?'/?'+Object.keys(params).map(k => esc(k) + '=' + esc(params[k])).join('&'):'';
}