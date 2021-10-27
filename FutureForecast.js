import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import moment from 'moment-timezone';


const FutureForecast = ({data}) =>{
    return(
  <View style={styles.futureForecastContainer}>
     {
         data && data.length > 0 ?

         data.map((data, idx) =>(
             idx !==0 && <FutureForecastItem forecastItem ={data}/>
         ))
         :
         <View/>
     }
       
    
         
      </View>
    );
}

const FutureForecastItem = ({forecastItem}) =>{
const img = {uri:'http://openweathermap.org/img/wn/' + forecastItem.weather[0].icon + '@2x.png'}

return(
  <View style={styles.FutureForecastItemContainer}>
    <Text style={styles.day}>{moment(forecastItem.dt * 1000).format('ddd')}</Text>
    <Image source={img} style={styles.image}/>
    <Text style={styles.temp}>Night - {forecastItem.temp.night}&#176;C</Text>
    <Text style={styles.temp}>Day - {forecastItem.temp.day}&#176;C</Text>
  </View>
);
}

const styles = StyleSheet.create({
image:{
    height: 115,
    width: 115
},

FutureForecastItemContainer:{
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#00000033',
  borderWidth: 1,
  borderColor: 'white',
  borderRadius: 15,
  padding:20,
  marginLeft: 10,
},

day:{
    fontSize: 15,
    color: 'white',
    backgroundColor:'dodgerblue',
    padding: 8,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: 200,
    marginBottom: 15,
    marginTop: 12
},

temp:{
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    

},

futureForecastContainer:{
    flexDirection: 'row'
}
})
export default FutureForecast;