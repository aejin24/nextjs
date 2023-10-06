/* eslint-disable no-console */
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

import userList from "../../../db/user.json";

type TBody = {
  email: string;
  password: string;
};

const secret = "almond";

export async function POST(req: Request) {
  const { email, password } = (await req.json()) as TBody;

  const user = userList.find((u) => u.email === email && u.password === password);

  if (user !== null) {
    if (password === user?.password) {
      try {
        // 토큰 유효시간 3H
        const accessToken = sign({ email, password }, secret, { expiresIn: "180m" });

        const response = NextResponse.json({ data: { result: true, token: accessToken } }, { status: 200 });

        return response;
      } catch (error) {
        console.error(error);

        return NextResponse.json({ data: { code: 1000, message: "토큰 서명 실패" } }, { status: 500 });
      }
    } else {
      return NextResponse.json({ data: { code: 1001, message: "비밀번호가 일치하지 않습니다." } }, { status: 500 });
    }
  } else {
    return NextResponse.json(
      { data: { code: 1002, message: "아이디와 비밀번호가 일치하지 않습니다." } },
      { status: 500 }
    );
  }
}
