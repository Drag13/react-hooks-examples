import { PureComponent, useState } from "react";

type WithCallback = { callback: () => void };

class ExpensiveComponent extends PureComponent<WithCallback> {
  render() {
    const { callback } = this.props;
    return <button onClick={callback}>Expensive</button>;
  }

  componentDidUpdate() {
    console.log("updated");
  }
}

const App = () => {
  const [state, setState] = useState(0);
  const increment = () => setState(state + 1);
  const callback = () => console.log("callback!");
  // const callback = useCallback(() => console.log("callback!"), []);
  return (
    <>
      <ExpensiveComponent callback={callback} />
      <button onClick={increment}>Increment: {state}</button>
    </>
  );
};

export default App;
