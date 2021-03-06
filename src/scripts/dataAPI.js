/**
* getData {method}
* Get the data from endPoint defined by path variable
* @param  {string} url - url path from the endPoint
* @return {object} Json file
*/
export const getData = url => {
    return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
        throw error
    });
}
