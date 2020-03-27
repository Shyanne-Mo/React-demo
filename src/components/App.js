import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>首页</h1>
    </div>
  )
}
function Me() {
  return (
    <div>
      <h1>个人中心</h1>
    </div>
  )
}
function Product() {
  return (
    <div>
      <h1>产品页面</h1>
    </div>
  )
}
function News(props) {
  console.log(props)
  return (
    <div>
      <h1>NEWS</h1>
    </div>
  )
}

class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    let meObj = {pathname: '/me', search: '?hahaha=nana'}
    return (
      <div id="app">
        <Router>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to={meObj} replace>Me</Link>
            <Link to="/news/456">News</Link>
          </div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/me" component={Me}></Route>
          <Route path="/news/:id" component={News}></Route>
        </Router>
      </div>
    )
  }
}


export default App;
