
let update_temp = async ( data, dispatch ) => {

    console.log({
        system_name: "tempsys",
        action: "updatetemp",
        data: data,
    })
    
    if (data.temperature !== undefined) 
    {
      dispatch({
        type: 'UPDATE_TEMPERATURE',
        payload: data
      });
    }
    
    else if (data.humidity !== undefined) 
    {
        dispatch({
          type: 'UPDATE_HUMIDITY',
          payload: data
        });
    }

    else if (data.lowerthreshold !== undefined)
    {
      console.log('ffff', )
      dispatch({
        type: 'UPDATE_TEMPERATURE_LOWERTHRESHOLD',
        payload: data
      });
    }
    
    else if (data.upperthreshold !== undefined) 
    {
      dispatch({
        type: 'UPDATE_TEMPERATURE_UPPERTHRESHOLD',
        payload: data
      });
    }

    // else if (data.fan_auto !== undefined)
    // {
    //   dispatch({
    //     type: 'UPDATE_FAN_AUTO_MODE',
    //     payload: data
    //   })
    // }
  
  };

  export default update_temp;
