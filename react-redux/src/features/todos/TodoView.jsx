import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./todosSlice";

const TodoView = () => {
  const { isLoading, todos, error } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <>
      <h1>Here Is Our Todos Man</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}...</h3>}
      {todos &&
        todos.map((todo) => {
          return (
            <>
              <article key={Math.random()}>
                <h3>{todo.title}</h3>
                <p>{todo.posts}</p>
              </article>
            </>
          );
        })}
    </>
  );
};

export default TodoView;
