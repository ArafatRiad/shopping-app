/* eslint-disable @typescript-eslint/no-unused-vars */
import User from "@/models/user";
import connectToDatabase from "@/sub/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDatabase();
    const { name, email, password } = await request.json();
    const userExistence = await User.findOne({ email });
    if (userExistence !== null) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashpassword,
    });
    await newUser.save();
    console.log(NextResponse);
    return NextResponse.json(
      { message: "User Registered Successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
