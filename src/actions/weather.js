import {  WEATHER_ERROR,GET_WEATHER_DETAILS, GET_WEATHER } from './types'
import axios from 'axios';
import {key} from '../config.js'
// import {Link, withRouter} from 'react-router-dom'

console.log('key')
console.log(key.apikey)

const apikey = key.apikey
//GET ALL weatherS

export const getAllWeathers = () => async dispatch => {
    try {
       const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=mumbai&cnt=5&appid=${apikey}`)
console.log(res.data)
const list = res.data.list
const dateArray = res.data.list.map(data=> data.dt_txt)
// console.log(dateArray)
const cityname = res.data.city.name
// console.log(cityname)
const iconArray = res.data.list.map(data=> data.weather[0].icon)  
// console.log(iconArray)

const updatedData = {
    list,
    dateArray,
    cityname,
    iconArray
}

console.log(updatedData)
       dispatch({
           type: GET_WEATHER_DETAILS,
           payload: updatedData
       })
    } catch (err) {
        
        dispatch({
            type: WEATHER_ERROR,
            payload: { msg : err.response}
        })
    }
}



//Get weather by user id
export const getWeatherById = (id) => async dispatch => {
    try {
       const res = await axios.get('https://dummy.restapiexample.com/api/v1/employees')
console.log(res.data.data)
       let weatherReqd=null
       if(res && res.data && res.data.data){
        weatherReqd = res.data.data.filter(data => {
            return data.id.toString() === id.toString()
        } )
       }
console.log('weatherReqd')
console.log(weatherReqd[0])
       dispatch({
           type: GET_WEATHER,
           payload: weatherReqd[0]
       })
    } catch (err) {
        dispatch({
            type: WEATHER_ERROR,
            // payload: { msg : err.response.statusText, status: err.response.status}
            payload: { msg : err.response}
        })
    }
}


