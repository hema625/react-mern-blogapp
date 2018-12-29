import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Nav.css';

  class Nav extends React.Component {

    render(){
      return(<div>
             <nav className="navbar navbar-expand-md navbar-dark bg-info">

            <Link className="navbar-brand" to="/"><i className="fas fa-home"></i>Blog Me</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                {
                  this.props.pass.map(num=>{
                    return <li key = {num._id}  className = "nav-item">
                            <Link className="nav-link" onClick = {this.props.click}
                              to = {"/category/" + num.categoryname}>
                              {num.categoryname}                  
                            </Link>
                            </li>
                  })
                }
              </ul>
              <ul className="navbar-nav ml-auto">
                <li  className="nav-item">
                <Link className="nav-link" to="/new">Add New Blog</Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <Link className="nav-link" to="/">Sign Up</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/">Login</Link>
                      </li>
                  </ul>
            </div>
            </nav> 
                  </div>)
                }
              }

  // handleFetchCategory = () =>{
  //   console.log("Hello"); 
  // }


  // componentDidMount(){
  //   fetch('/all')
  //   .then(res=> res.json())
  //   .then(category=>this.setState({category}));
  // }

//   render(){
//     console.log("category",this.state.category);
//     return(<div>
//           <nav className="navbar navbar-expand-md navbar-dark bg-info">

// <Link className="navbar-brand" to="/"><i className="fas fa-home"></i>Blog Me</Link>
// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
//  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//   <span className="navbar-toggler-icon"></span>
// </button>
// <div className="collapse navbar-collapse" id="navbarNav">
//   <ul className="navbar-nav ml-auto">
//      {
//        this.state.category.map(num=>{
//          return <li key = {num._id}  className = "nav-item">
//                  <Link className="nav-link" 
//                   to = {"/category/" + num.categoryname} 
//                   params = {num.categoryname}
//                   onClick={this.handleFetchCategory}>
//                   {num.categoryname}                  
//                  </Link>
//                 </li>
//        })
//      }
//   </ul>
//   <ul className="navbar-nav ml-auto">
//      <li  className="nav-item">
//      <Link className="nav-link" to="/new">Add New Blog</Link>
//      </li>
//   </ul>
//   <ul className="navbar-nav ml-auto">
//           <li className="nav-item">
//               <Link className="nav-link" to="/">Sign Up</Link>
//           </li>
//           <li className="nav-item">
//               <Link className="nav-link" to="/">Login</Link>
//           </li>
//       </ul>
// </div>
// </nav> 

//           </div>)
//   }
// }


 

export default Nav;