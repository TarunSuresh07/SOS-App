import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import db from '../localDb';


export default class CallScreen extends React.Component{

    constructor()
    {
        super()
        this.state = {
            allNumbers :[]
        }
    }
    componentDidMount()
    {
            this.setState({
            
            });
            console.log(this.state.allNumbers);
    }

    render(){
        return(
            <View>
                <Text> CALL SCREEN</Text>
               {/* <View>
                    {
                        this.state.allNumbers.map((item)=>{
                            return(<Text style = {styles.name}>
                                    item.name
                            </Text>)
                        })
                    }
                </View> */}

            </View>
        );
    }
}
const styles = StyleSheet.create({
    name : {
        width : 150,
        height : 25,
        backgroundColor: "yellow",
        borderWidth : 2,
        borderRadius :5,

    }
});