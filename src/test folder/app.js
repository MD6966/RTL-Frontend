
import React, { useEffect } from 'react';
import { getTemperature_Sensors } from '../store/actions/temperature_Actions';
import { useSelector, useDispatch } from 'react-redux';

let App = () => {
    
      const dispatch = useDispatch();
    let getSensors = () => {
        // call action to get data
        dispatch(getTemperature_Sensors());
    }
    return (
        <>
            <br></br> <br></br>
            <button onClick = {getSensors} > Get Sesnors </button>
        </>
    )
}

export default App;