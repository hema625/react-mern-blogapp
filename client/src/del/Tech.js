import React,{ Component } from 'react';

class Tech extends Component {
  state = {
    list : [],
    category : null
  }
  componentDidMount(){
    // console.log(this.props);
    this.setState({category: this.props.match.params.category})
    fetch('/api/'+ this.state.category)
    .then(res=>res.json())
    .then(list=>this.setState({list}))
  }
  render(){
    // console.log(this.state.list.length);
    return(<div>
      <ul>
        {
          this.state.list.map(num=>{
            return <li key = {num.id}>{num.title}
            <div>
              {num.content}
            </div>
            
            </li>
          })
        }
      </ul>
      {/* {this.state.list} */}


    </div>)
  }
}

export default Tech;