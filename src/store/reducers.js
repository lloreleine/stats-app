let initialState={
  statTopLabel: ' _ ',
  statLeftLabel: ' _ ',
  statRightLabel: ' _ ',
  statBottomLabel: ' _ ',
};

export default function dashboardReducer(state=initialState, action){
  switch(action.type){
    case "SET_STATS_LABELS":
        return{
          ...state,
          statTopLabel:action.data.currentTop,
          statLeftLabel:action.data.currentLeft,
          statRightLabel:action.data.currentRight,
          statBottomLabel:action.data.currentBottom
        }
    case "SET_STAT_TOP":
        return{
          ...state,
          statTop:action.data
        }
    case "SET_STAT_LEFT":
        return{
          ...state,
          statLeft:action.data
        }
    case "SET_STAT_RIGHT":
        return{
          ...state,
          statRight:action.data
        }
    case "SET_STAT_BOTTOM":
        return{
          ...state,
          statBottom:action.data
        }
    default:
      return state;
  }
}
