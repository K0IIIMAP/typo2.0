import React from "react";

export default function Page() {
  return (
    <main className="w-full  flex justify-center mt-20">
      <div className="w-[400px] h-[500px] border border-white flex justify-center flex-col">
        <h1 className="text-2xl mt-3">Account</h1>
        <p className="flex justify-between">
          Challenges completed <span>0 </span>
        </p>
      </div>
    </main>
  );
}
