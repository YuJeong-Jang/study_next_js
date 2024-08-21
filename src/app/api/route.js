import { ConnectDB } from "@/lib/db";
import { TodoModel } from "@/lib/todo";
import { NextResponse } from "next/server";

// 서버사이드
// page.jsx(클라이언드사이드)와 공존할 수는 없다.
const loadDB = async () => {
  await ConnectDB();
};

loadDB();
// GET::/api 경로로 접근하면 실행되는 함수
export async function GET() {
  //   return NextResponse.json({ msg: "Hello Todos" });
  // return NextResponse.json([
  //   {
  //     id: 1,
  //     title: "빨래하기",
  //     description: "열심히 합시다.",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 2,
  //     title: "청소하기",
  //     description: "더 열심히 합시다.",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 3,
  //     title: "음악듣기",
  //     description: "대충 합시다.",
  //     isCompleted: true,
  //   },
  // ]);

  // 몽고디비에 접속하여 데이터를 가져온다.
  // Mongoose 를 사용하여 접속..
  // 몽고디비는 던져주는 데이터 자체가 json이다 (몽고db = json db = js db)
  const todos = await TodoModel.find({});
  return NextResponse.json(todos);
}

// POST::/api 경로로 접근하면 실행되는 함수
// 클라이언트에서 투두 데이터를 전달해서 db에 인서트 하는 코드
export async function POST(request) {
  const { title, description } = await request.json();
  TodoModel.create({ title: title, description: description });
  return NextResponse.json({ msg: "Todo created" });
}

export async function DELETE(request) {
  const mongoId = await request.nextUrl.searchParams.get("mongoId");
  await TodoModel.findOneAndDelete(mongoId);
  return NextResponse.json({ msg: "Todo deleted" });
}

export async function PUT(request) {
  const mongoId = await request.nextUrl.searchParams.get("mongoId");
  await TodoModel.findByIdAndUpdate(mongoId, {
    $set: {
      isCompleted: true,
    },
  });
  return NextResponse.json({ msg: "Todo updated" });
}
