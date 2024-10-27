import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Navbar from "./navbar";

const session = useSession();
console.log(session);

export default function Header() {
  const currentPath = usePathname();
  return (
    <header className="flex justify-between px-[5%] h-[80px] items-center">
      <Navbar></Navbar>
    </header>
  );
}
