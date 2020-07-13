import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import styles from '../../styles/index.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

import CustomTextInput from '../../components/CustomTextInput';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Importing Actions to call Apis
import {loginRequest} from '../../actions/index';

//Functional Component
//We will use functional components with hooks

const Component = ({navigation, loginRequest, userInfo}) => {
  //Example of using state in a  functional component
  const [emailValidtionMessage, setEmailValidtionMessage] = React.useState('');
  const [isEmailValid, setIsEmailValid] = React.useState();

  const [
    passwordValidationMessage,
    setPasswordValidationMessage,
  ] = React.useState('');
  const [isPasswordValid, setIsPasswordValid] = React.useState();

  const [userEmail, setUserEmail] = React.useState();
  const [userPassword, setUserPassword] = React.useState();

  //This Callback is equilant of componentDidMount
  React.useEffect(() => {
    //This Hooks will perform as componentDidMount

    return () => {
      //this will perform as a component will unmount
      //This will be used for clean up purpose when components unmounts
    };
  }, []);

  //Email Validation Regex
  validateEmail = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      //this.setState({email:text})
      setEmailValidtionMessage('Incorrect Email Address');
      setIsEmailValid(false);
      return false;
    } else {
      //this.setState({email:text})
      setEmailValidtionMessage('');
      setIsEmailValid(true);
    }
  };

  validatePassword = text => {
    if (!text) {
      setPasswordValidationMessage('Invalid Password (Must have 8 characters)');
      setIsPasswordValid(false);
    } else if (text.length < 8) {
      setPasswordValidationMessage('Invalid Password (Must have 8 characters)');
      setIsPasswordValid(false);
    } else {
      setPasswordValidationMessage('');
      setIsPasswordValid(true);
    }
  };

  return (
    <>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        
          <Text style={styles.sectionTitle}> Sign in </Text>
        

        <View style={styles.textfieldContanier}>
          <CustomTextInput
            isPassword={false}
            placeholder="john@gmail.com"
            getContext={text => {
              //Set Text in this method
              console.log('Text Change Listner working', text);
              setUserEmail(text.trim());
              validateEmail(text.trim());
            }}></CustomTextInput>
        </View>
        <View
          style={{
            width: '80%',
          }}>
          <Text style={styles.ErrorTextStyle}>{emailValidtionMessage}</Text>
        </View>

        <View style={styles.textfieldContanier}>
          <CustomTextInput
            isPassword={true}
            placeholder="***********"
            getContext={text => {
              //Set Text in this method
              console.log('Text Change Listner working', text);
              setUserPassword(text);
              validatePassword(text);
            }}></CustomTextInput>
        </View>
        <View
          style={{
            width: '80%',
          }}>
          <Text style={styles.ErrorTextStyle}>{passwordValidationMessage}</Text>
        </View>

        <View
          style={{
            width: '60%',
            marginTop: 15,
          }}>
          <TouchableOpacity
            onPress={() => {
              if (isEmailValid && isPasswordValid) {
                data = {
                  email: userEmail,
                  password: userPassword,
                };
                loginRequest(data);
              }
            }}>
            <ImageBackground
              style={screenStyles.signInButton}
              imageStyle={{
                borderRadius: 20,
              }}
              source={require('../../assests/green_background.png')}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight : '400',
                }}>
                Sign in
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop : 15,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 30,
          }}>
          <Text>Don't have an account</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
            <Text
              style={{
                color: '#0066FE',
              }}>
              Create an account
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{color: '#000', fontSize: 14}}>Logged In User: </Text>
          <Text style={{color: '#000', fontSize: 14}}>
            {' '}
            {userInfo.signInResponse.email}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const screenStyles = StyleSheet.create({
  signInButton: {
    height: 40,
    borderRadius: 20,
    //marginLeft: 20,
    //marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = dispatch => ({
  loginRequest: bindActionCreators(loginRequest, dispatch),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Component);
