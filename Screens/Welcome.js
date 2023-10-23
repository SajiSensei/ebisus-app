import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from "../../ebisus-app/assets/logo.png"
import fblogo from "../../ebisus-app/assets/fblogo.png"
import googlelogo from "../../ebisus-app/assets/googlelogo.png"
import ioslogo from "../../ebisus-app/assets/ioslogo.png"
import ebisus from "../assets/ebisus.png"
import { useNavigation } from '@react-navigation/native';

const sub = "Get started by logging in\n to your account.";


const Welcome = () => {
  
  const navigation = useNavigation();

  return (
    <>
      <LinearGradient
        colors={['#31ADF3', '#81C2D700']}
        style={{ flex: 1 }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <View style={styles.container}>
          <Image source={logo} style={{ width: 200, height: 200, top: 100 }} />
          <Text style={styles.welcome}>WELCOME.</Text>
          <Text style={styles.sub}>{sub}</Text>

          <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate(
                    'Login'
                )   
            }}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fbbutton}>
            <Image source={fblogo} style={{ width: 20, height: 20, left: 20 }} />
            <Text style={styles.fbtext}>Continue with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googlebutton}>
            <Image source={googlelogo} style={{ width: 20, height: 20, left: 20 }} />
            <Text style={styles.googletext}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iosbutton}>
            <Image source={ioslogo} style={{ width: 20, height: 20, left: 20 }} />
            <Text style={styles.iostext}>Continue with Facebook</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> <Image source={ebisus} style={{ width: 60, height: 20, top: 5 }} /> ⓒ 2023 EBISUS, Inc.</Text>
        </View>

        <StatusBar style="auto" />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  welcome: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: 40,
    lineHeight: 24,

    width: 272,
    height: 65,
    top: 180,
  },

  sub: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 24,
    width: 181,
    height: 48,
    top: 160,
    left: -40,
  },

  button: {
    width: 305,
    height: 43,
    top: 215,

    borderRadius: 13,
    backgroundColor: '#00A4FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 24,
    color: '#FFFFFF',
  },

  fbbutton: {
    width: 324,
    height: 38,
    top: 250,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#D3D4D5',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fbtext: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 24,
    color: 'gray',
    marginLeft: 40,
  },

  googlebutton: {
    width: 324,
    height: 38,
    top: 260,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#D3D4D5',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  googletext: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 24,
    color: 'gray',
    marginLeft: 40,
  },

  iosbutton: {
    width: 324,
    height: 38,
    top: 270,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#D3D4D5',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iostext: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 24,
    color: 'gray',
    marginLeft: 40,
  },

  footerText:{
    fontFamily: 'Helvetica',
    fontWeight: '50',
    fontSize: 10,
    color: 'gray',
    lineHeight: 30,

  },


  
});

export default Welcome;
