import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { StyleSheet, ImageBackground, View, Image } from "react-native";
import Images from "../../constants/image";
import { screenHeight, screenWidth } from "../../constants/Sizes.constant";

function Splash(props) {
  useEffect(() => {
    setTimeout(async () => {
      props.navigation.navigate('Tabs', { screen: 'React' })
    }, 2000);
  }, [props]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Image source={require('../../asstes/Images/logo.png')} style={{height:screenHeight*0.5,width:screenWidth-32,resizeMode:'contain'}} />
    </View>
  )
}
export default Splash;