import React from "react";

import { useSession } from "next-auth/react";
import Navbar from "./navbar";

const session = useSession();
console.log(session);

export default function Header() {
  return (
    <header className="flex justify-between px-[5%] h-[80px] items-center">
      <Navbar></Navbar>
    </header>
  );
}
