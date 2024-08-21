"use client" // 이벤트를 이용하게 되면 선언해야함
import TodoItem from "@/Components/TodoItem";
import { useEffect, useState } from "react";

export default function Home() {
  // 내부데이터를 저장하기 위해서 state로 처리
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [todos, setTodos] = useState([]);

  // 최초로 로딩 됐을때 콜백되는 함수
  useEffect(() => {
    fetchAllTodos();
  }, []);

  const fetchAllTodos = async () => {
    const result = await fetch("http://localhost:3000/api");
    const todos = await result.json();
    setTodos(todos)
  };
  const onSubmitHandler = async (e) => {
    // e.preventDefault();
    await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    await fetchAllTodos();
    setFormData({ title: "", description: "" });
  };
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
  };
console.log(todos)
  const onDeleteHandler = async (mongoId) => {
    console.log(mongoId)
    await fetch(`http://localhost:3000/api?mongoId=${mongoId}`, {
      method: "DELETE",
    }).then((res) => res.json());
    await fetchAllTodos();
    // console.log("onDeleteHandler");
  };
  const onCompleteHandler = async (mongoId) => {
    await fetch(`http://localhost:3000/api?mongoId=${mongoId}`, {
      method: "PUT",
    }).then((res) => res.json());
    await fetchAllTodos();
    // console.log("onCompleteHandler");
  };
  return (
    <div>
      <form
        className="flex items-start flex-col gap-2 w-[80%] mt-24 px-2 mx-auto"
        onSubmit={onSubmitHandler}
      >
        <input
          type="text"
          name="title"
          className="px-3 py-2 border-2 w-full"
          placeholder="input"
          value={formData.title}
          onChange={onChangeHandler}
        />
        <textarea
          className="px-3 py-2 border-2 w-full"
          placeholder="textarea"
          name="description"
          value={formData.description}
          onChange={onChangeHandler}
        ></textarea>
        <button className="bg-orange-600 py-3 px-11 text-white rounded-xl">
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-16 w-[80%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => {
              return (
                <TodoItem
                  key={index}
                  mongoId={todo._id}
                  title={todo.title}
                  description={todo.description}
                  isCompleted={todo.isCompleted}
                  onDeleteHandler={onDeleteHandler}
                  onCompleteHandler={onCompleteHandler}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
