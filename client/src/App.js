import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import New from './components/newblog';
import Nav from './components/Nav';
// import cate from './components/cate';
// import Tech from './components/Tech';
// import Sci from './components/Science';
import Category from './components/Category';
// import Latest from './components/Latest';
// import News from './components/News';
// import History from './components/History';
class App extends Component {
  state = {
    blogs : [],
    category : []
  }
  handleFetchCategory = () =>{
    console.log("inside handle fetch", this.state.blogs);
  }
  componentDidMount(){
    fetch('/all')
    .then(res=> res.json())
    .then(category=>this.setState({category}))
    .then(fetch('/alldata')
    .then(res=> res.json())
    .then(blogs=>this.setState({blogs})));
  //   Promise.all([
  //     fetch('/all'),
  //     fetch('/alldata')
  //   ]).then(res=> res.json())
  //     .then(category=>this.setState({category}))
  //     .then(blogs=>this.setState({blogs}));
   }
  render() {
    // let cate1 = this.state.category;
    console.log("blog app", this.state.blogs);
    return (
      <Router>
      <div >
        <Nav 
          pass= {this.state.category}
          NavClick ={this.handleFetchCategory}/>
        <Switch>
      <Route path = "/" exact component = {Home}/>
      <Route path = "/category/:category" 
        render={props =>
          <Category rot={this.state.blogs} {...props}/>}
      />


      {/* <Route path = "/category/science" component = {Sci}/>
      <Route path = "/category/category" component = {Category}/> */}
      
      {/* <Route path = "/history" component = {History}/>
      <Route path = "/science" component = {Science}/>
      <Route path = "/latest" component = {Latest}/>
      <Route path = "/news" component = {News}/> */}
      <Route path = "/new" component = {New}/>
      </Switch>
      </div>
      </Router>
    ); 
  }
}

export default App;
