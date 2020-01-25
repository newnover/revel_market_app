import React from 'react';

import { Image, StyleSheet, Dimensions, Alert } from 'react-native';
import{
    StatusBar,
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
export class Login extends React.Component {
 constructor(props) {
      super(props)
      this.state = {
          username: "username",
          password: "123456",
      }
 }
 componentDidMount(){
          //this._getLogin();
 }

 _getLogin(param =' Hello '){
        Alert.alert("Function","_getLogin"+param);
 }

 render(){
            return (
                <ScrollView style={{ backgroundColor: "#010001", }}>
                     <StatusBar hidden={true}/>
                    <View style={{ padding: 36, }}>
                        <Image  resizeMode="contain" source={require('../../images/idola.jpg')} style={{width:width,height:height/3}}></Image>
                        <View style={[ styles.row_underline,{ marginBottom:16, }]}>
                            <Icon name="email-outline" style={styles.login_Icon}/>
                            <TextInput placeholder="Email address"
                                placeholderTextColor="#fff"
                                underlineColorAndroid='transparent'
                                style={{ color:"#fff",flex:1,fontSize:16, paddingLeft: 12,}}
                                onChangeText={
                                    (getUsername)=> {
                                        this.setState({
                                            username: getUsername
                                        })
                                    }
                                 }
                                value={this.state.username}
                            />
                        </View>
                        <View style={[ styles.row_underline,{ marginBottom:24, }]}>
                            <Icon name="lock-outline" style={styles.login_Icon}/>
                            <TextInput placeholder="Password"
                                placeholderTextColor="#fff"
                                underlineColorAndroid='transparent'
                                style={{ color:"#fff",flex:1,fontSize:16, paddingLeft: 12,}}
                                secureTextEntry={true}
                                onChangeText={
                                    (getPasword)=> {
                                        this.setState({
                                            password: getPasword
                                        })
                                    }
                                 }
                                value={this.state.password}
                            />
                        </View>
                        <TouchableOpacity style={{ flex:1, backgroundColor:"#1B70E3", borderRadius: 2 ,paddingLeft: 10,}} 
                        onPress={() => { this._getLogin(); }}>
                        <Text style={{ alignSelf: "center",fontSize: 16 , color:"#fff", }} >{this.props.btn}</Text>
                        </TouchableOpacity>
                       

                    </View>
                </ScrollView>

            
            );
 }

}

const styles = StyleSheet.create({
    row_underline: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#b6b6b6",
    },
    login_Icon:{
        alignSelf: "center",
        fontSize: 20,
        color: "#DF9808",
    }
  });