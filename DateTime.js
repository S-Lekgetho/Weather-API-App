import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from 'moment-timezone';

const days = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


const WeatherItem = ({title, value, unit}) =>{
  return(
     <View style={styles.weatherItem}>
           
          <Text style={styles.weatherItemTitle}  >{title}</Text>
          <Text style={styles.weatherItemTitle}>{value}{unit}</Text>
      </View>
  );
}




const DateTime = ({current, lat, lon, timezone}) =>{
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(()=>{
   setInterval(()=>{
const time = new Date();
const month = time.getMonth();
const date = time.getDate();
const day = time.getDay();
const hour = time.getHours();
const hoursIn12HrFormat = hour >= 13 ? hour %12: hour;
const minutes = time.getMinutes();
const ampm = hour >= 12 ? 'pm' : 'am'

setTime((hoursIn12HrFormat < 10? '0' + hoursIn12HrFormat :hoursIn12HrFormat)+':'+(minutes < 10? '0'+ minutes: minutes)+ '' + ampm);
setDate(days[day]+ ',' +date + months[month])
   }, 1000)
    }, [])
    return(
    <View style={styles.parentContainer}>
       <View>
           <View>
               <Text style={styles.timeText}>{time}</Text>
           </View>
           <View>
               <Text style={styles.dateText}>{date}</Text>
           </View>
           <View style={styles.weatherItemContainer}>
               <WeatherItem title='Humdity' value={current? current.humidity:""} unit='%'/>
               <WeatherItem title='Pressure' value={current? current.pressure:""} unit='hPA'/>
               <WeatherItem title='Sunrise' value={current? moment.tz(current.sunrise * 1000, timezone).format('HH:mm') :""} unit='am'/>
               <WeatherItem title='Sunset' value={current? moment.tz(current.sunset * 1000, timezone).format('HH:mm') :""} unit='pm'/>
           </View>
       </View>
       <View style={styles.childContainer}>
           <Text style={styles.timeZone}>{timezone}</Text>
           <Text style={styles.latLong}>{lat}S{lon}E</Text>
       </View>
    </View>
    );

}

const styles = StyleSheet.create({
parentContainer:{
 flex: 1.5,
 flexDirection: 'row',
 justifyContent: 'space-between',
 padding: 10
},

timeText:{
    fontSize: 47,
    color: 'white',
    fontWeight: '100',

},

dateText:{
fontSize: 22,
fontWeight: '300',
color: 'white',
marginLeft: 8
},

childContainer:{
    textAlign: 'right',
    marginTop: 20
},

timeZone:{
    color: 'white',
    fontSize: 15,
},

latLong:{
    color: 'white',
    fontSize: 16,
    fontWeight: '700'
},

weatherItemContainer:{
    backgroundColor: '#18181b99',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 10

},

weatherItem:{
flexDirection: 'row',
justifyContent: 'space-between'
},

weatherItemTitle:{
    color: 'white',

}
})
export default DateTime;