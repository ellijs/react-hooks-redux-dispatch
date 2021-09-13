let state = { count: 0 };

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const render = () => {
  document.body.textContent = state.count;
}

const dispatch = (action) => {
  state = changeState(state,action);
  render();
}

dispatch({ type: "counter/increment" });