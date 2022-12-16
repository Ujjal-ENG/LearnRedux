import "./App.css";
import CounterView from "./features/counter/CounterView";
import TodoView from "./features/todos/TodoView";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React-Redux</h1>
      <CounterView />
      <TodoView />
    </div>
  );
}

export default App;
