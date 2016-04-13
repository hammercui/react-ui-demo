/**
 * Created by hammer on 2016/4/6.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
import 'weui';
const {Button, Toast} = WeUI;


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            timer: null
        };
    }

    componentWillUnmount(){
        this.state.timer && clearTimeout(this.state.timer);
    }

    render() {
        return (
            <div className="container">
                <Button type="primary"  onClick={this.show.bind(this)}>确认按钮</Button>
                <Toast show={this.state.show}>loading...</Toast>
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

ReactDOM.render(<App>test</App>,document.getElementById('container'))