"use client"
import React from 'react'

export default async function page() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    console.log(json);
  return (
    <div>포스트 목록 화면</div>
  )
}
