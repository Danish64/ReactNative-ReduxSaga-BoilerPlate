import {StyleSheet} from 'react-native';

//Styles or Colors that we need to use application wide

export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD',
};

export default StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
    marginBottom : 20,
  },
  textfieldContanier: {
    width: '80%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    marginTop: 5,
    height: 50,
    paddingLeft: 20,
  },
  ErrorTextStyle: {
    color: "#ee3945",
    fontSize: 12,
    marginLeft: 30
  }
});
