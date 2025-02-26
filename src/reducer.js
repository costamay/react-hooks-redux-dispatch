// let state = { count: 0 };
// function changeState(state, action) {
//   switch (action.type) {
//     case "counter/increment":
//        { count: state.count + 1 };
//     default:
//       return state;
//   }
// }

// function render(){
//   document.body.textContent = state.count;
// }

// function dispatch(action){
//   state = changeState(state, action)
//   render();
// }
// // let state = { count: 0 };
// // let action = { type: "counter/increment" };

// // changeState(state, action);

// dispatch({type: "counter/increment"})
// dispatch({type: "counter/increment"})
// dispatch({type: "counter/increment"})

let state = { count: 0 };

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function render() {
  document.body.textContent = state.count;
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

render();


