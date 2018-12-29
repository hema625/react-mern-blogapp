import React, { Component } from 'react'


class category extends Component {
    state = {
        category : null
    }
    componentDidMount(){
        console.log(this.props);
        this.setState({category: this.props.match.params.category})
    }
      render(){
          return(<div>
              <h1>{this.state.category}</h1>
          </div>)
      }
}

export default category;