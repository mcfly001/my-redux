import React, {Component} from "react";
import {render} from "react-dom";
import {connect} from 'react-redux';
import {addnumber} from './actions';

class Add extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {value,onAdd} = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onAdd}>增加</button>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    value: state.count,
    loaded: state.loaded
  }
}

const mapDispatchToProps=(dispatch) => {
  return {
    onAdd:()=>{
      dispatch(addnumber)
    },
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add)

