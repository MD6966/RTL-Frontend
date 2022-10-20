export const addDashboard = (data) => async (dispatch, getState) => {
  dispatch({
    type: 'DASHBOARD_LIST',
    payload: data
  });
};
