import React,{Component} from 'react';

class Nothookex extends Component{
     constructor(props){
         super(props)
         this.state= { //state variable initializing to zero 
             count:0
         }
     }
     onChangeCounter=()=>{ // method capable of setting state value
         this.setState({
             count:this.state.count+1
         })
     }

    render(){
        return(
            <div>
            <button onClick={this.onChangeCounter}>Count{this.state.count}</button>
            </div>
        )
    }
}
export default Nothookex