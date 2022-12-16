import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todoAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos);
  }, []);

  return (
    <>
      <h1>Todos App</h1>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}...</h3>}
      <section>
        {todos &&
          todos.map((todo) => {
            return (
              <article key={Math.random()}>
                <h4>{todo.id}: {todo.title}</h4>
              </article>
            );
          })}
      </section>
    </>
  );
};

export default Todos;
