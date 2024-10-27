import React from "react";

import Navbar from "./navbar";
import { useSession } from 'next-auth/react"
const { data: session, status } = useSession();

export default function Header() {
  return (
    <header className="flex justify-between px-[5%] h-[80px] items-center">
      <Navbar></Navbar>
    </header>
  );
}
