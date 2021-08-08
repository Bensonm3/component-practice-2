import * as React from "react"
import "./App.css"

class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            boxShadow: '0px 0px 0px black',
            cursor: 'default'
        }
    }

    render(){
        const style = {
            boxShadow: this.state.boxShadow,
            cursor: this.state.cursor,
            backgroundColor: 'lightgrey'

        }
        return(
            <div className="contentContainer">
                <div className="contentCard" style={style} >
                    <h5>Analytical Applications</h5>
                <span>User interfaces that enable people to interact smoothly with data, ask better questions, and make better decisions.
                </span>
                <br></br>
                <button>Explore Products</button>
                </div>
                <br></br>
                <div>Interactive?
                    <br></br>
                    <label className="switch">
                        <input onChange={this.handleSwitch}type="checkbox">
                        </input>
                        <span className="slider round">
                        </span>
                    </label>
                </div>
                <br></br>
                <div>Shadow
                    <form>
                        <input onChange={this.handleChange} type="range" min="0" defaultValue="0" max="10" list="stepList" step = "1"></input>
                        <datalist id="stepList">
                            <option label='0'>0</option>
                            <option label="1">1</option>
                            <option label="2">2</option>
                            <option label="3">3</option>
                            <option label="4">4</option>
                            <option label="5">5</option>
                            <option label="6">6</option>
                            <option label="7">7</option>
                            <option label="8">8</option>
                            <option label="8">9</option>
                            <option label="10">10</option>
                        </datalist>
                    </form>
                </div>
            </div>

        )
    }
    handleChange = (e) =>{
        this.setState({boxShadow: `0px 0px ${e.target.value}px black`})
        console.log(this.state.boxShadow)
    }
    handleSwitch = () =>{
        if(this.state.cursor == 'default'){
            this.setState({cursor: 'pointer'})
        } else{
            this.setState({cursor: 'default'})
        }
        console.log(this.state.cursor)
    }
}

export default Component