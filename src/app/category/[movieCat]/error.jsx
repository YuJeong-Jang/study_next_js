"use client";
import React from "react";

export default function error({ error, reset }) {
  return (
    <div>
      <div>{"에러가 발생했습니다. ==>"} {error.toString()}</div>
      <button onClick={reset}>리셋하기</button>
    </div>
  );
}
