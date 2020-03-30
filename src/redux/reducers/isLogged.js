import {request} from '../../requests/Request'

const isLoggedReducer = (state = false, action) => {
    if(action.type === 'LOGIN'){
        request("login", "POST", action.payload)
        //add token to cookies
        return !state
    }
    else{
        return state
    }
}
export default isLoggedReducer