import { ReactNode, useReducer } from "react";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const initState = {
  count: 0,
};

enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
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
    default:
      throw new Error("something wrong");
  }
};

const Counter = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initState);

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
    </div>
  );
};

export default Counter;
