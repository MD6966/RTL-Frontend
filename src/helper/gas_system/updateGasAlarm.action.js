
let updateGasAlarm = async ( data, dispatch ) => {

    console.log({
        system_name: "gas_system",
        action: "updateGasAlarm",
        data: data,
    })
    
    if (data.gas !== undefined) 
    {
      dispatch({
        type: 'UPDATE_GAS',
        module_id: data.gas_id,
        gas: data.gas
      });
    }
    
    else if (data.alarm !== undefined) 
    {
        let {gas_id, alarm} = data
        dispatch({
          type: 'UPDATE_ALARM',
          module_id: gas_id,
          alarm
        });
    }
  };

  export default updateGasAlarm;
