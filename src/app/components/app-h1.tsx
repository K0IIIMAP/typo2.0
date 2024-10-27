import React from "react";

export default function AppH1({ children }: { children: React.ReactNode }) {
  return <h1 className={`text-2xl text-center pt-5 px-[5%]`}>{children}</h1>;
}
