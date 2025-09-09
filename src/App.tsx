import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { Text } from "./Text";
import { TodoType } from "./types/todo";
import "./styles.css";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "mkiin",
  hobbies: ["映画", "ゲーム"],
};

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onClickFetchData = () => {
    axios
      .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <Text color="red" fontSize="18px" />
      <UserProfile user={user} />
      <button onClick={onClickFetchData}>ボタン</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
