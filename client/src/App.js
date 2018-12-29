import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import New from './components/newblog';
import Nav from './components/Nav';
import Category from './components/Category';
import Show from './components/show';
import Edit from './components/Edit';
class App extends Component {
  state = {
    blogs : [],
    category : []
  }
  // handleFetchCategory = () =>{
  //   console.log("inside handle fetch", this.state.blogs);
  // }
  componentDidMount(){
    fetch('/all')
    .then(res=> res.json())
    .then(category=>this.setState({category}))
    .then(fetch('/alldata')
    .then(res=> res.json())
    .then(blogs=>this.setState({blogs})));
   }
   click = () =>{
      console.log("clicked");
      fetch('/alldata')
        .then(res=> res.json())
        .then(blogs=>this.setState({blogs}));
    }
   
  render() {
    // let cate1 = this.state.category;
    console.log("blog app", this.state.blogs);
    return (
      <Router>
      <div >
        <Nav 
          pass= {this.state.category} click = {this.click}/>
        <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/new" component = {New}/>
            <Route path = "/category/show/:id/edit" render = { props =>
                                                <Edit show = {this.state.blogs} {...props} />} />
            <Route path = "/category/show/:id" render = { props =>
                                                <Show show = {this.state.blogs} {...props} />} />
            <Route path = "/category/:category" 
              render={props =>
                <Category rot={this.state.blogs} {...props}/>}
            />
            
      </Switch>
      </div>
      </Router>
    ); 
  }
}

export default App;
