import { useReducer } from "react";

const initialState = [{
  id: 0,
  name: "Test 1",
}];


function counterReducer(state, action) {
  switch (action.type) {
    case "add":
      return [

          ...state,
          {id: state.length, name: action.payload},
        ]
    case "remove":
        return state.filter(item => item.id !== action.payload);

    default:
      throw new Error("Bad action");
  }
}

function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "add",
              payload: "deneme",
            })
          }
        >
          Add
        </button>{" "}
        |
        <button
          
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default UseReducerComponent;