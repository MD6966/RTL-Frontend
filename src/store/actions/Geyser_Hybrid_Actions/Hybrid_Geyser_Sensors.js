import React from "react";
import { makeConfig } from '../sessionActions' 
import axios from 'axios';

const Hybrid_Geyser_Sensors = async (id, dispatch) => {

    console.log('Hybrid_Geyser_Sensors',id)
 const config = await makeConfig('application/json');
  try {
    const res = await axios.get(`${process.env.REACT_APP_URL}geyser_hybrid/sensors/${id}`,config);
    // console.log(res.data);
    dispatch({
      type: 'GET_HYBRID_GEYSER_SENSOR',
      payload: res.data
    });
   

  } catch(err){
    console.log(err);
  }

}

export default Hybrid_Geyser_Sensors;