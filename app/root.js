/**
 * Created by cly on 16/12/29.
 */

import React from "react";
import {FlatButton,AppBar,AutoComplete,RaisedButton,Checkbox,Avatar} from "material-ui";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import FontIcon from "material-ui/FontIcon";

import {lime50} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        textColor: lime50,
    },
    appBar: {
        height: 50,
    },
});
const dataSource2 = ['12345', '23456', '34567'];
export default class Root extends React.Component{
    constructor(props){
        super(props);
        this.state = ({dataSource:["2","2","2"]})
    }

    componentWillMount() {
        console.log("测试@@@@","this.state",this.state)
    }



    render(){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <AppBar title="Title" onTitleTouchTap={this._handleTouchTap.bind(this)} onLeftIconButtonTouchTap={this._tapMenu.bind(this)}/>
                    <AutoComplete
                        hintText="Type anything1"
                        dataSource={dataSource2}
                        openOnFocus={true}
                        onUpdateInput={this.handleUpdateInput.bind(this)}
                    />
                    <AutoComplete
                        hintText="Type anything2"
                        dataSource={dataSource2}
                        onUpdateInput={this.handleUpdateInput.bind(this)}
                        floatingLabelText="Full width"
                        fullWidth={true}
                        style={styles.autoComplete}
                    />
                </div>

            </MuiThemeProvider>

        );

    }



    _handleTouchTap() {
        alert('onTouchTap triggered on the title component');
    }
    _tapMenu(){
        console.log("点击了菜单")
    }

    handleUpdateInput(value){
        console.log("@@@@测试","value",value);
    };

}

const styles ={
    autoComplete:{
        width: '80%',
        margin: '20',
        border: '2px solid #FF9800',
        backgroundColor: '#ffd699',
    },

};