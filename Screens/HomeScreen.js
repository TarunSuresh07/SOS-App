import React ,{Component} from 'react';
import { Text, 
         TouchableOpacity,
         View,
         StyleSheet,
         TextInput
         } from 'react-native'
import Header from '../Componets/Header';

export default class HomeScreen extends Component{
  constructor(){
    super();
    this.state = {
      currentCity : '',
    }
  }

  render(){
    return(
      <View style = {{backgroundColor : "#BEF031",}}>
       <Header/>
       <Text style = {styles.info}>
         Please a select a state
       </Text>
       <TextInput placeholder = {"Enter your city's name"} 
                  value = {this.state.currentCity} 
                  onChangeText = {(text)=>{
                    this.setState({
                      currentCity : text
                    })
                  }}
                  style = {styles.input}>
       </TextInput>
       <TouchableOpacity style = {styles.getButton}
                         onPress = {()=>{
                           this.props.navigation.navigate('CallScreen');
                         }}>
         <Text style = {styles.butText}>
           Get the Numbers!
         </Text>
       </TouchableOpacity>
      </View>
    );
  }
  }

  const styles = StyleSheet.create({
   info : {
    alignItems : 'center',
    justifyContent : 'center',
    marginTop : 40,
    alignSelf : 'center',
    fontSize : 20,
   },

   input : {
     height : 40,
     width : 250,
     borderWidth : 3,
     borderColor : '#186FF0',
     alignSelf : 'center',
     marginTop : 20,
     backgroundColor : "#29BFCD",
     color : "#076C75",
     alignItems : 'center'
   },

   getButton : {
     backgroundColor : "#EB5841",
     width : 200,
     height : 45,
     alignItems : 'center',
     justifyContent : 'center',
     alignSelf : 'center',
     marginTop : 20
   },

   butText : {
    fontFamily : "good-feeling-sans"
   }
  });