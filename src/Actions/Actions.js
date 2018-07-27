import ajax from "../Utils/RequestAPI"
import actionConstants from "../Constants/ActionConstants"
export function signup(data){
  return({
    types:[actionConstants.SIGNUP_REQUEST,actionConstants.SIGNUP_REQUEST_SUCCESS,actionConstants.SIGNUP_REQUEST_FAILURE],
    shouldCallAPI:true,
    callApi:()=>{
      
    }
    })
}
