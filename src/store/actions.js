export default function getActions(dispatch){
  return {
    setStatsLabels: (statsLabels) => {
      return dispatch({ type: "SET_STATS_LABELS", data: statsLabels })
    },
    insertStats: (userid, labelsCounts, globalCount) => {
      return fetch("/stats", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userid: userid,
            labelsCounts: labelsCounts,
            globalCount: globalCount
          })
        })
        .then(response => response.json())
    }
  }
}
