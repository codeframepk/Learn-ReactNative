import { ADD_DATA } from "../actions/actions";

let initialState = {
  user:{
      login:false,
      admin:true,
      name:'naveed',
      pass:'sdfw'
  }
};

function RootReducer(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}

export default RootReducer;
