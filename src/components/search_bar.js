import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { 
            term: ''
        }
    }
    render(){
        return (
            <div>
                <input type="text" onChange={this.onInputChange}/>
            </div>
        )
    }

    onInputChange = (event) => {
        console.log(event.target.value)
        this.setState({
            term:event.target.value
        });
    }
}


export default SearchBar;