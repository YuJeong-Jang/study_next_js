"use client";
import React, {useState} from "react";

export default function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const onChangeHandler = (e) => {
   setSearchTerm(e.target.value)
  };
  console.log(searchTerm)
  return (
    <form
      className="flex justify-between p-5 max-w-6xl mx-auto"
      onSubmit={onSubmitHandler}
    >
      <input
        type="text"
        className="w-full h-14 rounded outline-none bg-transparent flex-1 text-xl"
        placeholder="검색어를 입력해주세요"
        onChange={onChangeHandler}
      />
      <button className="text-amber-600 text-xl ">검색</button>
    </form>
  );
}
