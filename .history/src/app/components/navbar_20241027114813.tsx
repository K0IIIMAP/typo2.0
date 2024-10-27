"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { motion } from "framer-motion";
import { useSessionContext } from "@/contexts/sess-context-providres";

export default function Navbar() {
  const session = useSessionContext();
  const isAuthenticated = Boolean(session.user);
  console.log(isAuthenticated);
  const currentPath = usePathname();
  const routes = [
    { label: "Home", path: "/" },
    { label: "Modes", path: "/modes", keyWord: "mode" },
    { label: "Challenges", path: "/challenges", keyWord: "challenge" },

    { label: "Log in", path: "/log-in" },
  ];
  return (
    <>
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
                  "text-white":
                    currentPath === path || currentPath.includes(keyWord),
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
    </>
  );
}
