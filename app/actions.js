import fetch from 'isomorphic-fetch';

export const ADD_NUMBER= "ADD_NUMBER";
export const LOADING_DATA= "LOADING_DATA";
export const LOADING_SUCC= "LOADING_SUCC";
export const LOADING_ERR= "LOADING_ERR";

export const addnumber={
  type: ADD_NUMBER
}

let getDate=()=>{
  return (dispatch)=>{
   fetch("http://www.yongjian.space/json/fanews.json")
    .then(response=>response.json())
    .then(json=>{
      dispatch({
        type: LOADING_SUCC,
        ajaxdata: json.nav.map(child=>child)
      })
    })
    .catch(err=>{
      dispatch({
        type: LOADING_ERR,
        ajaxdata: []
      })
    })
  }
}

export let async=()=>{
  return (dispatch)=>{
    type: LOADING_DATA
    dispatch(getDate());
  }
}
