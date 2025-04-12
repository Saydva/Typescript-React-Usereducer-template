import NavBarComponent from "./components/NavBarComponent";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <NavBarComponent />
      <Counter>
        {(num: number) => <div className="m-4  text-3xl">Count is : {num}</div>}
      </Counter>
    </>
  );
}

export default App;
