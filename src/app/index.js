// lib
import React from 'react'
import ReactDOM from 'react-dom'
// components
import  Header  from "./components/Header";
import  Home  from "./components/Home";
// other
import {callApi} from "./js/api"



class App extends React.Component {
    
    
    componentDidMount(){
        
                callApi(function(data){
                  console.log(data)
                  delta(data)
                }) 
                
                 var delta = (data) => {
                    this.setState({
                        data  : data 
                    });
                }
            }
    
    render() {
         let data = this.state.data
console.log(this.state.data)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <Home />
                    <div className="col-xs-10 col-xs-offset-1">
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
