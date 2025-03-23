/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      if (response.data.message === "success") {
        router.push("/homePage");
      } else {
        setError("Invalid credentials, please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white md:grid-cols-1">
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
          <div className="my-4">
            <h1 className="text-3xl font-semibold">Login</h1>
          </div>
          <form onSubmit={handleSubmit} className="w-80">
            <Button
              className="flex items-center w-full gap-4 px-12 bg-transparent rounded-full"
              variant="outline"
              type="button"
            >
              <FcGoogle />
              Sign In with Google
            </Button>
            <Label className="mt-2" htmlFor="email">
              Email
            </Label>
            <Input
              className="mt-2 mb-4 bg-transparent rounded-full text-white"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Label htmlFor="password">Password</Label>
            <Input
              className="mt-2 mb-4 bg-transparent rounded-full text-white"
              type="password"
              id="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full mt-6 rounded-full bg-indigo-600 hover:bg-indigo-800"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
