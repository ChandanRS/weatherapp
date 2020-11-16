import React,{ Fragment,useEffect } from 'react';
import {getAllWeathers} from '../../actions/weather'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner' 


const Weathers = ( {getAllWeathers ,weather:{weather,loading} } ) => {


    useEffect(()=>{
        getAllWeathers()
    },[getAllWeathers])


    console.log('weather')
    console.log(weather)
    return (
      <Fragment>
        {loading ? (
          <Spinner />
        ) : 
        
        <Fragment>
            {weather &&  <h1 className="Header">  Weather data of {weather.cityname}</h1>}
          <div className="weather-card">
      
        {weather && weather.list.map(listItem =>(
          <div className="inner-card">
          <div className="head">{listItem.dt_txt.substring(0,10)}</div>
          <div>Max Temp:<strong> {listItem.main.temp_max}</strong> K</div>
          <div>Min Temp: <strong>{listItem.main.temp_min} </strong>K</div>
         
          <img src={`http://openweathermap.org/img/wn/${listItem.weather[0].icon}@2x.png`} alt="" />
          <div className="des"><span><i>{listItem.weather[0].description}</i></span></div>
          </div>
        ))}



        

          </div>
        </Fragment> }
           
         
       
       
      </Fragment>
    );

}

const mapStateToProps = state=> ({
        weather : state.weather
})


export default connect(mapStateToProps, { getAllWeathers })(Weathers);