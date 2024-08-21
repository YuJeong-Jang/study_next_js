"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // /search/[searchTerm] 경로로 이동
    // window.location.href = '/search/' + searchTerm;
    router.push(`/search/${searchTerm}`);
    console.log(searchTerm + "로 검색합니다.");
  };
  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value);
    //  console.log(searchTerm)
  };
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
      <button
        className="text-amber-600 text-xl hover:text-amber-800 "
        disabled={searchTerm === ""}
      >
        검색
      </button>
    </form>
  );
}
