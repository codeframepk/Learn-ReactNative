import { ADD_DATA } from "../actions/actions";

let initialState = {
  id: "sd",
  name: "naveed",
  data: {
      class:'se',
      name:'sdf'
  },
  arr: [
    { name: "navee", id: 2 },
    { name: "navee", id: 3 },
    { name: "navee", id: 1 }
  ]
};

function RootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA: {
        console.log('data in reducer of type Adddata',action.payload);
        
      let data = action.payload;
      return {
        ...state,
        data: data,
        name: "faceed"
      };
    }
    case "FilterData": {
      let id = action.id;

      let newarr = state.arr;

      return { ...state, arr: newarr };
    }
    case "DellData":
      return state;
    default:
      return state;
  }
}

export default RootReducer;
