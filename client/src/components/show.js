import React from 'react';
import {Link} from 'react-router-dom';
// import { Redirect} from 'react-router-dom';

  class sci extends React.Component {
    state = {
      submitted : false
    }
    // delete = (id,e)=>{
    //   e.preventDefault();
    //   fetch('/alldata/' + id,{
    //    method: 'DELETE',
    //    headers: {
    //      'Accept': 'application/json',
    //      'Content-Type': 'application/json',
    //    },
    //    body: JSON.stringify({ 
    //      "_id" : id
    //    })
    //  }).then(res=>res.json())
    //  .then(data=>console.log("deleted",data))
    //  .catch(err=>console.log(err));
     
    // }
    redir = (e)=>{
      // e.preventDefault();
      this.setState({
        submitted: true
      })
      // console.log(this.props);
      // this.props.history.push("/");
    //  let red =  <Redirect to = "/" />;
     }
    render(){
      console.log("show this.props show",this.props);
      let id = this.props.match.params.id;
      console.log("show id",id);
      let filter = this.props.show.filter(num=>{
        return (num._id === id)
      });
      console.log("show fil",filter);
      // let redirect = null;
      // if (this.state.submitted) {
      //  redirect = <Redirect to = "/" />;
      // }
      return(
        <div>
          {/* {redirect} */}
        {
          filter.map(fil=>{
            return (<div key = {fil._id}>
                 <div>Title : {fil.title}</div>
        <div>Content : {fil.content}</div>
        <div>Category : {fil.category}</div>
        <div>Author : {fil.author}</div>  
        <Link to = {"/category/show/"+ fil._id + "/edit"}>Edit </Link>
        {/* <form onSubmit = {()=>{this.del(fil._id)}}> */}
        <form action={"/alldata/"+ fil._id +"?_method=DELETE"} method = "POST" >
          <button className="btn btn-primary">Delete</button>
        </form> 
            </div>)
          })
        }
           </div>
      )
    }
  }
  
  // const {title,content,category,author,_id} = fil;
  // console.log("show fil", title);
  // console.log("show fil", content);
  // console.log("show fil", category);
  // console.log("show fil", author);
    


// class sci extends Component {
//   state = {
//     blog : []
//   }
//   componentDidMount(){
//     console.log("show",this.this.props.match.params);
//     let id = this.this.props.match.params.id;
//     fetch('/alldata/' + id)
//     .then(res=>res.json())
//     .then(blog=>this.setState({blog}))
//   }
//   delete = (id,e)=>{
//      e.preventDefault();
//      fetch('/alldata/' + id,{
//       method: 'DELETE',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ 
//         "_id" : this.state.blog._id
//       })
//     }).then(res=>res.json())
//     .catch(err=>console.log(err))
//     .then(data=>console.log("deleted",data));
//   }
//   render(){
//     console.log("in show page", this.state.blog);
//     const {title,content,category,author,_id} = this.state.blog;
//     return(<div>
//       <div>Title : {title}</div>
//       <div>Content : {content}</div>
//       <div>Category : {category}</div>
//       <div>Author : {author}</div>  
//       <Link to = {"/category/show/"+ _id + "/edit"}>Edit </Link>
//       <form onSubmit = {()=>{this.del(_id)}}>
//         <button className="btn btn-primary">Delete</button>
//       </form>
//     </div>)
//   }
// }

export default sci;