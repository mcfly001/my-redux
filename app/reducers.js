import { ADD_NUMBER, LOADING_DATA, LOADING_SUCC, LOADING_ERR} from './actions';
//初始化状态
const initState = {count:0};

const reducer=(state=initState,action)=>{
  switch (action.type){
    case ADD_NUMBER:
      return Object.assign({},state,{count:state.count+1});
    case LOADING_DATA:
      return Object.assign({},state,{loaded:false})
    case LOADING_SUCC:
      return Object.assign({},state,{loaded:true,ajaxdata:action.ajaxdata,result:true})
    default:
    case LOADING_ERR:
      return Object.assign({},state,{loaded:true,ajaxdata:action.ajaxdata,result:false})
      return state;
  }
}

export {reducer}