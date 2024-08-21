import React from 'react'

export default async function AboutPage() {
    // 프론트엔드의 서버 컴포넌트

    // react18부터는 절대경로로 지정해야함
    const response = await fetch('http://localhost:3000/api');
    const json = await response.json();
  return (
    <div>Aboutpage {json.msg}</div>
  )
}
