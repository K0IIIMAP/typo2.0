"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const routes = [
  { label: "Home", path: "/" },
  { label: "Modes", path: "/modes", keyWord: "mode" },
  { label: "Challenges", path: "/challenges", keyWord: "challenge" },
  { label: "Log in", path: "/log-in" },
];
export default function Header() {
  const currentPath = usePathname();
  return (
    <header className="flex justify-between px-[5%] h-[80px] items-center">
      <Link href="/" className="text-2xl font-bold">
        Space Typo
      </Link>
      <nav>
        <ul className="flex gap-x-5 items-center">
          {routes.map(({ label, path, keyWord }) => (
            <li
              key={path}
              className="text-white/50 hover:text-white/80 transition relative text-[14px]"
            >
              <Link
                href={path}
                className={cn(``, {
                  "text-white": currentPath === path,
                })}
              >
                {label}
              </Link>
              {currentPath === path || currentPath.includes(keyWord) ? (
                <motion.div
                  layoutId="header-active-link"
                  className=" absolute h-1 w-full bottom-[-5px] bg-accent"
                ></motion.div>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
