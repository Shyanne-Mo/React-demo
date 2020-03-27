import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
let itemArr = [
  { name: 'lisi', age: 5},
  { name: 'lisi', age: 5},
  { name: 'lisi', age: 5},
  { name: 'lisi', age: 5},
  { name: 'lisi', age: 5},
  { name: 'lisi', age: 5}
]
// console.log(itemArr)
class Hello extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
    }
  }
  render(){
    return <div>
      {this.props.children}
      <ul>
        {
          this.props.list.map((item,index) => {
            return (
              <li key={index}>{item.name}--{item.age}</li>
            )
          })
        }
      </ul>
    </div>
  }
}



ReactDOM.render(
  <Hello list={itemArr}>
    <h2>子组件1</h2>
    <h2>子组件2</h2>
    <h2>子组件3</h2>
  </Hello>,
  document.querySelector('#root')
)