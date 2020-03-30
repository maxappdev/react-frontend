import {useSelector} from 'react-redux'
import {API_URL} from '../config'

const authorizedRequest = async (url, method = "GET", data = {}) => {

    const isLogged = await useSelector(state => state.isLogged)
    const token = isLogged ? "blablabla" : "";

    const response = await fetch(API_URL + "api/v1/" + url, {
        method: method,
        headers: { 'Content-Type': 'application/json', 'Authorization' : "Bearer " + token },
        body: JSON.stringify(data),
    })

    return response.json()

}
export default authorizedRequest