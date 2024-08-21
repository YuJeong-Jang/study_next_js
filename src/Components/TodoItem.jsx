import React from "react";

export default async function TodoItem({
  key,
  id,
  mongoId,
  title,
  description,
  isCompleted,
  onDeleteHandler,
  onCompleteHandler,
}) {
  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      key={mongoId}
    >
      <th
        scope="row"
        className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ${
          isCompleted ? "line-through" : ""
        }`}
      >
        {mongoId}
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">
        {isCompleted !== undefined
          ? isCompleted
            ? "진행중"
            : "종료"
          : "상태없음"}
      </td>
      <td className="px-6 py-4 flex gap-1">
        <button
          className="py-1 px-2 bg-red-500 text-white hover:bg-red-300"
          onClick={onDeleteHandler(mongoId)}
        >
          삭제
        </button>
        <button
          className="py-1 px-2 bg-green-500 text-white hover:bg-green-300"
          onClick={onCompleteHandler(mongoId)}
        >
          완료
        </button>
      </td>
    </tr>
  );
}
