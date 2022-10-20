import React from "react";
import { makeConfig } from '../sessionActions' 
import axios from 'axios';

const Gen_Mode = async (id, mode, dispatch) => {

// console.log('Gen Mode', id, mode );
const config = await makeConfig('application/json');
try {
  const data = await axios.post(
    `${process.env.REACT_APP_URL}fuel/gen_mode_control/${id}/${mode}`,
    config
  );
  // console.log('+++++++++',data.data.gen_mode,'set Gen Action',id)
  // dispatch({
  //   type: 'GEN_MODE',
  //   payload: data.data,
  //   fuel_id: id
  // });
} 
catch (err) {
console.log("Error in Set Gen Mode Action",err.message);
}
}

export default Gen_Mode;