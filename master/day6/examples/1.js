const reducer = (state = { comments: 0 }, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comments: state.comments + 1
      };
    case "REMOVE_COMMENT":
      return {
        ...state,
        comments: state.comments - 1
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const action = {
  type: "ADD_COMMENT"
};

const action_remove = {
  type: "REMOVE_COMMENT"
};

console.log(store.getState());
console.log(store.dispatch(action));
console.log(store.getState());
console.log(store.dispatch(action_remove));
console.log(store.getState());
