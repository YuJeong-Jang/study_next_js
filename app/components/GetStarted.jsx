import React from "react";

export default function GetStarted({msg}) {
  // 데이터
  // const msg = "미야오오옹 Get started by editing";

  return (
    // getStarted.jsx 자체가 컴포넌트화
    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      {msg}&nbsp;
      <code className="font-mono font-bold">app/page.js</code>
    </p>
  );
}
