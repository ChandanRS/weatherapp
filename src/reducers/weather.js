import { GET_WEATHER,   WEATHER_ERROR, GET_WEATHER_DETAILS} from '../actions/types'

const initialState = {
    weather:null,
    // weathers:[],
    loading: true,
    error:{}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState,action){
    const { type, payload } = action

    switch(type){
        case GET_WEATHER: 
        return {
            ...state,
            weather: payload,
            loading: false
            // user:'crs'
        }
        case WEATHER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            }
        
 
    case GET_WEATHER_DETAILS :
        return {
            ...state,
            loading: false,
            weather: payload
        }
    
        
        default : return state
    }
}