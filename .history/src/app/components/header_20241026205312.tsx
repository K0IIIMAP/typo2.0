import React from "react";

import Navbar from "./navbar";
import { useSession } from "next-auth/react";

export default function Header() {
  const { session } = useSession();

  return (
    <header className="flex justify-between px-[5%] h-[80px] items-center">
      <Navbar></Navbar>
    </header>
  );
}
