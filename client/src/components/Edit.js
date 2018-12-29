import React from 'react';

class Tech extends React.Component {
  // state = {
  //   blog : []
  // }
  // componentDidMount(){
  //   console.log("edit1",this.props.match);
  //   let id = this.props.match.params.id;
  //   fetch('/alldata/' + id + '/edit')
  //   .then(res=>res.json())
  //   .then(blog=>this.setState({blog}))
  // }
  render(){
    console.log("edit1",this.props.show);
    let id = this.props.match.params.id;
    console.log("edit2",id);
    let fil = this.props.show.filter(num=>{
      return (num._id === id);
    })
    console.log("edit filter",fil);
    return(<div className = "container"> 
      {
       fil.map(num=>{
         return (<div key = {num._id}>
          {/* {num.title} */}
          <form action={"/alldata/"+ num._id +"?_method=PUT"} method = "POST">
       <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" name = "title" required
              defaultValue = {num.title} />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea className="form-control" id="content" rows="3" name = "content" required
            defaultValue = {num.content} >
            </textarea>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input type="text" className="form-control" id="author" name = "author" required
              defaultValue = {num.author}/>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input type="text" className="form-control" id="category" name = "category" required
              defaultValue = {num.category} />
          </div>
          <div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          </form> 
         {/* { this.props.history.push("/")} */}
          </div>)
       })
      }
    </div> ) 
}
}
   
export default Tech;

/*
<form onSubmit = {this.handleSubmit}>
       <div className="form-group">
   <label htmlFor="title">Title</label>
   <input type="text" className="form-control" id="title" name = "title" required
    value = {num.title} placeholder="Enter the title"/>
 </div>
 <div className="form-group">
   <label htmlFor="content">Content</label>
   <textarea className="form-control" id="content" rows="3" name = "content" required
   value = {num.content} placeholder = "Write your blog here">
   </textarea>
 </div>
 <div className="form-group">
   <label htmlFor="author">Author</label>
   <input type="text" className="form-control" id="author" name = "author" required
    value = {num.author} placeholder="Your name here"/>
 </div>
 <div className="form-group">
   <label htmlFor="category">Category</label>
   <input type="text" className="form-control" id="category" name = "category" required
    value = {num.category} placeholder="category"/>
 </div>
 <div>
    <button type="submit" className="btn btn-primary">Submit</button>
 </div>
 </form> */