import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import {Provider, connect} from 'react-redux'

class Counter extends React.Component{
  render(){
    // 通过store传值给props
    const value = this.props.value
    // 将修改数据的事件或者方法传入到props
    const onAddClick = this.props.onAddClick
    return (
      <div>
        <h1>计数的数量: {value}</h1>
        <button onClick={onAddClick}>数字+1</button>
      </div>
    )
  }
}

const addAction = {
  type: 'add'
}
const reducer = (state={num:0}, action)=>{
  switch(action.type){
    case 'add':
      state.num++;
      break;
  }
  return {...state}
}
const store = createStore(reducer)

// 将state映射到props函数
function mapStateToProps(state){
  return {
    value: state.num
  }
}
// 将方法映射到props 默认会传入dispatch
function mapDispatchToProps(dispatch){
  return {
    onAddClick: ()=>{
      dispatch(addAction)
    }
  }
}

//将上面两个方法映射到新的组件上 关联起来
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.querySelector('#root')
)