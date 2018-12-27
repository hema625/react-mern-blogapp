import React,{ Component } from 'react';

class sci extends Component {
  state = {
    list : []
  }
  componentDidMount(){
    fetch('/api/science')
    .then(res=>res.json())
    .then(list=>this.setState({list}))
  }
  render(){
    console.log(this.state.list.length);
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

export default sci;