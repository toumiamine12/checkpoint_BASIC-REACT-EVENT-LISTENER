import React, { Component } from 'react';

class Box extends Component {
    
    render() {
       function showContent(){
            if (this.props.style==={display:"none"}) 
            return {display:"block"}

        }
        return (
            <div className="box">
                <button onclick={showContent()}>{this.props.name}
                </button>
                <div style={this.props.style} className="img">
                    <img src={this.props.img} alt="Logo" />
                    <p className="nom">{this.props.nom}</p>
                    <p className="des">{this.props.des}</p>
                </div>
            </div>
        )
    }

}
export default Box;