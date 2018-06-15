export default function getStats(state){
  return{
    statTopLabel: state.dashboardReducer.statTopLabel,
    statLeftLabel: state.dashboardReducer.statLeftLabel,
    statRightLabel: state.dashboardReducer.statRightLabel,
    statBottomLabel: state.dashboardReducer.statBottomLabel
  }
}
