import { ChangeEvent, ReactNode, useReducer } from "react";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const initState = {
  count: 0,
  text: "",
};

enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error("something wrong");
  }
};

const Counter = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });
  };

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () =>
    dispatch({
      type: REDUCER_ACTION_TYPE.DECREMENT,
    });

  return (
    <div>
      <h1>{children(state.count)}</h1>
      <button className="btn bg-gray-700 m-2" onClick={increment}>
        +
      </button>
      <button className="btn bg-gray-700 m-2" onClick={decrement}>
        -
      </button>
      <p>
        <input
          type="text"
          placeholder="Type something ..."
          className="input  m-2"
          onChange={handleTextInput}
        />
      </p>
      <p>
        <input
          value={state.text}
          type="text"
          placeholder="..."
          className="input input-error mx-2"
          readOnly
        />
      </p>
    </div>
  );
};

export default Counter;
