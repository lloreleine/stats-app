export default function dashboardActions(dispatch){
  return {
    setStatTop: (data) => {
      return dispatch({ type: "SET_STAT_TOP_LABEL", data: data })
    },
    setStatLeft: (data) => {
      return dispatch({ type: "SET_STAT_LEFT_LABEL", data: data })
    },
    setStatRight: (data) => {
      return dispatch({ type: "SET_STAT_RIGHT_LABEL", data: data })
    },
    setStatBottom: (data) => {
      return dispatch({ type: "SET_STAT_BOTTOM_LABEL", data: data })
    },
  }
}
