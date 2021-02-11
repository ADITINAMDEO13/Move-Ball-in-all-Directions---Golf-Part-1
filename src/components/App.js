import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    }; 

    buttonClickHandler() {
        this.setState({
            renderBall:true,
        }
        )
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
      let ball=document.getElementsByClassName("ball");
      let moveBy = 5;

      window.addEventListener('keydown',(e)=>{

            switch(e.key){
                case 'ArrowRight':
                    var x = parseInt(this.state.ballPosition.left);
                    x = x + moveBy + "px" ; // 5 
                    this.setState({
                        ballPosition:{left:x},
                    })
                    break;

            }


      });

    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
