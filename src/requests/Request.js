import {API_URL} from '../config'

export const request = async (url, method = "GET", data = {}) => {

    const response = await fetch(API_URL + url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })

    return response.json()

}