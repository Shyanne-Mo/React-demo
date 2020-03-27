import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

class Parent extends React.Component{
  constructor(){
    super()
    this.state = {
      childData: null
    }
  }
  UNSAFE_componentWillMount(){
    console.log('componentWillMount')
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  UNSAFE_componentWillReceiveProps(){
    console.log('componentWillReceiveProps')
  }
  // shouldComponentUpdate(){
  //   console.log('shouldComponentUpdate')
  // }
  UNSAFE_componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  render(){
    return (
      <div>
        <h1>子元素传递给父元素的数据{this.state.childData}</h1>
        <Children setChildData={this.setChildData}/>
      </div>
    )
  }
  setChildData = (data)=>{
    this.setState({
      childData: data
    })
  }
}
class Children extends React.Component{
  constructor(){
    super()
    this.state = {
      msg: 'helloworld'
    }
  }
  render(){
    return (
      <div>
        <button onClick={this.sendData}>传递元素给父元素</button>
      </div>
    )
  }
  sendData = ()=>{
    // 把子组件的数据通过调用父组件传过来的函数 传过去
    this.props.setChildData(this.state.msg)
  }
}

ReactDOM.render(
  <Parent />,
  document.querySelector('#root')
)