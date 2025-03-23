"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/register", {
      name,
      email,
      password,
    });
    console.log(response);
    router.push("/login");
  };

  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid  w-full h-full grid-cols-1 bg-white md:grid-cols-1">
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
          <div className="my-4">
            <h1 className="text-3xl font-semibold">Register</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <Input
                className="mt-2 mb-4 bg-transparent rounded-full"
                type="name"
                id="name"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Input
                className="mt-2 mb-4 bg-transparent rounded-full"
                type="email"
                id="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                id="password"
                placeholder="*********"
                value={password} // ✅ Added state binding
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 mb-4 bg-transparent rounded-full"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-6 rounded-full bg-indigo-600 hover:bg-indigo-800"
            >
              Submit
            </Button>
          </form>
        </div>
        <div className="relative hidden md-block"></div>
      </div>
    </main>
  );
}

export default Register;
