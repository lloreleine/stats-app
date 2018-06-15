export default function getActions(dispatch){
  return {
    setStatsLabels: (statsLabels) => {
      return dispatch({ type: "SET_STATS_LABELS", data: statsLabels })
    },
    setStatTop: (data) => {
      return dispatch({ type: "SET_STAT_TOP", data: data })
    },
    setStatLeft: (data) => {
      return dispatch({ type: "SET_STAT_LEFT", data: data })
    },
    setStatRight: (data) => {
      return dispatch({ type: "SET_STAT_RIGHT", data: data })
    },
    setStatBottom: (data) => {
      return dispatch({ type: "SET_STAT_BOTTOM", data: data })
    },
  }
}
