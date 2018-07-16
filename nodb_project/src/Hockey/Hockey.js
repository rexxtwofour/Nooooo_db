import React, { Component } from 'react';

class Hockey extends Component {
    constructor(){
        super()

        this.state = {
            seasonStart: 'September 24th, 2018'
        }
    }

    render(){
        return(
                <div>The next season starts:{this.state.seasonStart}</div>
        )
    }
}

export default Hockey;
 


// {this.props.bestPlayer} {this.props.lastName}