/* eslint-disable @typescript-eslint/no-unused-vars */
import User from "@/models/user";
import connectToDatabase from "@/sub/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDatabase();

    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing credentials" },
        { status: 400 }
      );
    }

    const userExistence = await User.findOne({ email });
    if (!userExistence) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    if (!userExistence.password) {
      return NextResponse.json({ error: "Invalid user data" }, { status: 500 });
    }

    const checkPassword = await bcrypt.compare(
      password,
      userExistence.password
    );
    if (!checkPassword) {
      return NextResponse.json({ error: "Wrong password" }, { status: 401 });
    }

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
