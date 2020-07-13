import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import CustomTextInput from '../../components/CustomTextInput';

import styles from '../../styles/index.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Importing Actions to call Apis
import {signupRequest, userInfo} from '../../actions';

const Component = ({navigation, signupRequest, userInfo}) => {
  const [emailValidtionMessage, setEmailValidtionMessage] = React.useState('');
  const [isEmailValid, setIsEmailValid] = React.useState();

  const [
    passwordValidationMessage,
    setPasswordValidationMessage,
  ] = React.useState('');
  const [isPasswordValid, setIsPasswordValid] = React.useState();

  const [firstNameValidationMessage,setFirstNameValidationMessage] = React.useState();
  const [isfirstNameValid,setIsfirstNameValid] = React.useState();

  const [userEmail, setUserEmail] = React.useState();
  const [userPassword, setUserPassword] = React.useState();
  const [firstName, setFirstName] = React.useState('');



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

  validateName = text => {
    var regName = /^[a-zA-Z]+$/;
    if (!regName.test(text)) {
      setFirstNameValidationMessage('Invalid Name');
      setIsfirstNameValid(false);
    } else {
      setFirstNameValidationMessage('');
      setIsfirstNameValid(true);
    }
  };

  return (
    <>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.sectionTitle}> Sign up </Text>

        <View style={styles.textfieldContanier}>
          <CustomTextInput
            isPassword={false}
            placeholder="john Doe"
            getContext={text => {
              //Set Text in this method
              console.log('Text Change Listner working', text);
              setFirstName(text.trim());
              validateName(text.trim());
            }}></CustomTextInput>
        </View>
        <View
          style={{
            width: '80%',
          }}>
          <Text style={styles.ErrorTextStyle}>{firstNameValidationMessage}</Text>
        </View>

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
                signupRequest(data);
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
                  fontWeight: '400',
                }}>
                Sign in
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 15,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 30,
          }}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text
              style={{
                color: '#0066FE',
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>

       

        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={{color: '#000', fontSize: 14}}>
            New User Registered:{' '}
          </Text>
          <Text style={{color: '#000', fontSize: 14}}>
            {' '}
            {userInfo.signUpResponse.email}
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
  signupRequest: bindActionCreators(signupRequest, dispatch),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Component);
