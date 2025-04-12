import { ReactNode, useState } from "react";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <h1>{children(count)}</h1>
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
