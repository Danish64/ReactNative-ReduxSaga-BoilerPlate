// native
import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

import {TextInput} from 'react-native';


const Component = ({
  isPassword,
  label,
  placeholder,
  keyboardType,
  getContext,
}) => (
  

    <TextInput
      style={{
        height: 40,
        padding: 0,
        margin: 0,
        borderWidth: 0,
        color: '#000000',
      }}
      secureTextEntry = {isPassword}
      keyboardType = {keyboardType}
      placeholder={placeholder}
      placeholderTextColor="grey"
      returnKeyType="done"
      onChangeText={text => {
        getContext(text)
      }}
      //value={email}
      >

      </TextInput>

    /* <TextField
      containerStyle={style.textfieldContanier}
      secureTextEntry = {isPassword}
      label= {label}
      placeholderTextColor="grey"
      placeholder={placeholder}
      tintColor="#ee3845"
      textColor="#ffffff"
      lineWidth={0}
      activeLineWidth={0}
      labelHeight={24}
      labelPadding={4}
      paddingBottom={6}
      paddingTop={0}
      baseColor="#B1B1B1"
      keyboardType = {keyboardType}
      onChangeText = {(text) => getContext(text)}
      //value = {isPassword ? "qwerty123" : "Hashir@gmail.com"}
    /> */
  
);
const style = StyleSheet.create({
  textfieldContanier: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    marginTop: 5,
    height: 50,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 0,
  },
});

Component.propTypes = {
  isPassword: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  getContext: PropTypes.func,
};

Component.defaultProps = {
  loading: false,
  keyboardType: 'default',
};

export default Component;
