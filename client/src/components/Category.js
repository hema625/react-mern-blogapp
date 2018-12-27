import React from 'react';
import {withRouter} from 'react-router';

// class Category extends Component {
//   state = {
//     list : []
//   }
  // componentDidMount(){
  //   console.log(this.props);
  //   // this.setState({category: this.props.match.params.category})
  //   let cat = this.props.match.params.category;
  //   console.log("here", this.props.match.params.category);
  //   fetch('/api/'+ cat)
  //   .then(res=>res.json())
  //   .then(list=>this.setState({list}))
  // }
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
            return <li key = {num._id}>{num.title}
            <div>
              {num.content}|{num.category}
            </div>
            
            </li>
          })
        }
      </ul>
    </div>)
  }

//   render(){
//     return(<div>
//       <ul>
//         {
//           this.state.list.map(num=>{
//             return <li key = {num._id}>{num.title}
//             <div>
//               {num.content}
//             </div>
            
//             </li>
//           })
//         }
//       </ul>
//     </div>)
//   }
// }

export default withRouter(Category);