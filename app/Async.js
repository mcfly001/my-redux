import React, {Component} from "react";
import {render} from "react-dom";
import {connect} from 'react-redux';
import {async} from './actions';

class Async extends Component{
  constructor(props){
    super(props)
  }
  componentWillMount(){
    const {dispatch} = this.props;
    dispatch(async());
  }
  render(){
    const {loaded, ajaxdata, onReset, result} = this.props;
    let content;
    if(loaded && result){
      content=<ul>{ajaxdata.map((item, i) => <li key={i}>{item.ItemType}</li>)}</ul>
    }
    else if(loaded && !result){
      content=<span>加载失败</span>
    }
    else{
      content=<span>{ loaded ? "" : "正在努力加载中" }</span>
    }
    return (
      <div>
        <button type="button" onClick={onReset}>重新加载</button>
        {content}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.ajaxdata)
  return {
    loaded: state.loaded,
    ajaxdata: state.ajaxdata,
    result: state.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onReset: ()=>{
      dispatch(async());
    },
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Async)