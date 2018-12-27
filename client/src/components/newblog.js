import React from 'react';
import '../css/newblog.css';

class newB extends React.Component{
  state = {
     title : null,
     content : null,
     author : null,
     category : null
   }
   handleChange = (e)=>{
     this.setState({
        [e.target.id] : e.target.value
     })
   }
  handleSubmit = (e)=> {
    e.preventDefault();
    // const data =  new FormData(e.target);
    // console.log("data",e.target.value);
    fetch('/alldata',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        "title" : this.state.title,
        "content" : this.state.content,
        "author" : this.state.author, 
        "category" : this.state.category
      })
    }).then(res=>res.json)
    .then(data=>console.log("real",data));
  }
  render() {
    // console.log("title",this.state.title);
    // console.log("content",this.state.content);
    // console.log("author",this.state.author);
    // console.log("category",this.state.category);
    return(<div className = "container">
    <h3>Enter new blog</h3>
        <form onSubmit = {this.handleSubmit}>
        <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" name = "title"
    onChange={this.handleChange}
     placeholder="Enter the title"/>
  </div>
  <div className="form-group">
    <label htmlFor="content">Content</label>
    <textarea className="form-control" id="content" rows="3" name = "content"
     onChange={this.handleChange}
    placeholder = "Write your blog here">
    </textarea>
  </div>
  <div className="form-group">
    <label htmlFor="author">Author</label>
    <input type="text" className="form-control" id="author" name = "author"
    onChange={this.handleChange}
     placeholder="Your name here"/>
  </div>
  <div className="form-group">
    <label htmlFor="category">Author</label>
    <input type="text" className="form-control" id="category" name = "category"
     onChange={this.handleChange}
     placeholder="category"/>
  </div>
  {/* <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">Select the category for your blog</label>
    <select className="form-control" id="exampleFormControlSelect1" name="category">
    onChange={this.handleChange}
                <option value="sc">Select Category</option>
                <option value="technology">Technology</option>
                <option value="science">Science</option>
                <option value="history">History</option>
                <option value="latest">Latest</option>
                <option value="news">News</option>
    </select>
  </div> */}
 
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
  }
}
 

export default newB


