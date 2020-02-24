import React from 'react'

class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleBitrateClick = () => {
        this.setState(previousState => ({
          ...previousState,
            settings: {
                ...previousState.settings,
                bitrate: 12
                }
        }))
    }

    handleResolutionClick = () => {
        this.setState(previousState => ({
          ...previousState,
          settings: {
              ...previousState.settings,
              video: {
                  resolution: '720p'
                }
              
          }
        }))
    }

    render(){
        return (
            <div>
                <button onClick={this.handleBitrateClick}className="bitrate">BitRate</button>
                <button onClick={this.handleResolutionClick}className="resolution">Resolution</button>
            </div>
        )
    }




}

export default YouTubeDebugger