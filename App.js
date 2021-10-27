import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import DateTime from './components/DateTime';
import WeatheScroll from './components/WeatherScroll';

const img = require('./assets/background.jpg');
const API_KEY =  '6903d352ce712e2a1c26f8effb7c8453';



export default function App() {
const [data, setData] = useState({});

useEffect(()=> {
  navigator.geolocation.getCurrentPosition((success)=>{
    let {latitude, longitude} = success.coords;
     fetchDataFromApi(latitude, longitude)

  }, (err)=>{
    if(err){
      alert('Sorry Failed To Load Data Due To An ERROR!!!!')
    }
  })
}, [])

const fetchDataFromApi = (latitude, longitude) =>{
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data =>{
    console.log(data)
    setData(data)
  })
}
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image} >
       <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
       <WeatheScroll weatherData={data.daily}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },

  image:{
    flex:1, 
    justifyContent: 'center',
    resizeMode:'cover'
  }
});


