export default function getStats(state){
  return{
    userid: state.dashboardReducer.userid,
    statTopLabel: state.dashboardReducer.statTopLabel,
    statLeftLabel: state.dashboardReducer.statLeftLabel,
    statRightLabel: state.dashboardReducer.statRightLabel,
    statBottomLabel: state.dashboardReducer.statBottomLabel,
  }
}
