import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import FutureForecast from "./FutureForecast";
import moment from 'moment-timezone';


const WeatheScroll = ({weatherData}) =>{
    return(
     <ScrollView horizontal={true} style={styles.scrollView}>
       <CurrentTempEl data={weatherData && weatherData.length>0 ? weatherData[0]: {}}/>
       <FutureForecast data={weatherData}/>
     </ScrollView>
    );
}

const CurrentTempEl = ({data})=> {
if(data && data.weather){
    const img = {uri:'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png'}
    return(
     <View style={styles.currentTempElContainer}>
         <Image source={img} style={styles.image}/>
         <View style={styles.childContainer}>
             <Text style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
             <Text style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
             <Text style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
         </View>
     </View>
    );
}else{
    return(
        <View>

        </View>
    );
}

}

const styles = StyleSheet.create({
image:{
    width: 100,
    height: 100
},

scrollView:{
    flex: 0.4,
    backgroundColor: '#18181bcc',
    padding: 30
},

currentTempElContainer:{
    flexDirection: 'row',
    backgroundColor: '#00000033',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 15
},

day:{
    fontSize: 20,
    color: 'white',
    backgroundColor:'dodgerblue',
    padding: 10,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: 200,
    marginBottom: 15,
    marginTop: 20
    
},

temp:{
    color: 'white',
    fontSize: 17,
    textAlign: 'center',


},
childContainer:{
    paddingRight: 40
}
})
export default WeatheScroll;             