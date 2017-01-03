/**
 * Created by hammer on 2016/4/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./root";
import 'weui';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            timer: null,
            dataSource:["1","2","3"]
        };
    }

    componentWillUnmount(){
        this.state.timer && clearTimeout(this.state.timer);
    }

    render() {
        return (
            <div className="container">
                <Root/>
            </div>


        );
    }

    show(){
        this.setState({show: true});
        this.state.timer = setTimeout(()=>{
            this.setState({show: false});
        }, 3000);
    }
}

ReactDOM.render(<App>test</App>,document.getElementById('container'));