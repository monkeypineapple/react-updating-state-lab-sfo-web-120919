import React from 'react'

class DigitalClicker extends React.Component {
    constructor(){
        super()
    }

    state = {
        timesClicked: 0
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
            
        }, () => console.log(this.state.timesClicked))
    }

    render(){
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker