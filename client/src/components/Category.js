import React from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';

   const Category = (props)=>{
    console.log("in category component", props.rot);
    let cat = props.match.params.category;
    console.log("here props", props);
    console.log("here category",cat)
    let fil = props.rot.filter(num=>{
      return (num.category === cat)
    });
    console.log("filter",fil);
     return(<div>
            <ul>
      {
        fil.map(num=>{
          return <li key = {num._id}>Title : {num.title}
          <div>
           Content : {num.content.substring(0,50)}...
           <div>
            Category:{num.category}
           </div>
            <div>
            <Link to = {"/category/show/"+ num._id}>Show More</Link>
          </div>
          </div>
          </li> 
        })
      }
    </ul>
     </div>)
   }

export default withRouter(Category);