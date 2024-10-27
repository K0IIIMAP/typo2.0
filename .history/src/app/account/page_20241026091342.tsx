import React from "react";
import { auth } from "@/lib/auth";
export default function Page() {
  const session = auth();
  return (
    <main className="w-full  flex justify-center mt-20">
      <div className="w-[400px] h-[500px] border border-white flex flex-col items-center px-[1%] ">
        <h1 className="text-2xl mt-3">Account</h1>

        <p className="mt-1">kirill80000@gmail.com</p>
        <p className="flex justify-between w-full mt-5">
          Challenges completed: <span>0 </span>
        </p>
      </div>
    </main>
  );
}
