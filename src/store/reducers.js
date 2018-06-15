let initialState={
  statTopLabel: ' _ ',
  statLeftLabel: ' _ ',
  statRightLabel: ' _ ',
  statBottomLabel: ' _ ',
};

export default function dashboardReducer(state=initialState, action){
  switch(action.type){
    case "SET_STAT_TOP_LABEL":
        return{
          ...state,
          statTopLabel:action.data
        }
    case "SET_STAT_LEFT_LABEL":
        return{
          ...state,
          statLeftLabel:action.data
        }
    case "SET_STAT_RIGHT_LABEL":
        return{
          ...state,
          statRightLabel:action.data
        }
    case "SET_STAT_BOTTOM_LABEL":
        return{
          ...state,
          statBottomLabel:action.data
        }
    default:
      return state;
  }
}
