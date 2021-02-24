import React ,{Component} from 'react';
import { Text, 
         TouchableOpacity,
         View,
         StyleSheet,
         } from 'react-native'

class Header extends Component{
    render(){
        return(
            <View style = {paint.header}>
            <Text style = {paint.text}>
             SOS
            </Text>
            </View>
        );
    }
}         

const paint = StyleSheet.create({
   header : {
    width : 400, 
    height : 100, 
    backgroundColor : "#A32110" ,
    borderRadius : 30,  
    alignSelf : 'center',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 35,
   },

   text : {
    color : "#F01C16",
    alignSelf : 'center',
    fontSize : 70,
   }
})

export default Header;