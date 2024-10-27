import React from "react";

import Navbar from "./navbar";
import { useSession } from "next-auth/react";

console.log(session);

export default function Header() {
  return (
    <header className="flex justify-between px-[5%] h-[80px] items-center">
      <Navbar></Navbar>
    </header>
  );
}
