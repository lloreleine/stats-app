let initialState={
  userid: 'cb438731-126b-47ce-9599-18b7c6386a8c',
  statTopLabel: '',
  statLeftLabel: '',
  statRightLabel: '',
  statBottomLabel: '',
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
    default:
      return state;
  }
}
