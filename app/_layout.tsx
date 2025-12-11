import {SplashScreen, Stack} from "expo-router";
import "./global.css";
import {useEffect} from "react";
import {useFonts} from "expo-font";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
        "Rubik-Light": require('../assets/fonts/Rubik-Light.ttf'),
        "Rubik-Regular": require('../assets/fonts/Rubik-Light.ttf'),
        "Rubik-Medium": require('../assets/fonts/Rubik-Light.ttf'),
        "Rubik-Bold": require('../assets/fonts/Rubik-Light.ttf'),
        "Rubik-SemiBold": require('../assets/fonts/Rubik-Light.ttf'),
        "Rubik-ExtraBold": require('../assets/fonts/Rubik-Light.ttf'),
  });

  useEffect(() => {
    if(fontsLoaded){
      SplashScreen.hide();
    }
  },[fontsLoaded]);

  if(!fontsLoaded) return null;

  return <Stack />;
}
