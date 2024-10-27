"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = [
  { label: "Home", path: "/" },
  { label: "Modes", path: "/modes" },
  { label: "Challenges", path: "/challenges" },
  { label: "Log in", path: "/log-in" },
];
export default function Header() {
  const currentPath = usePathname();
  return (
    <header className="flex justify-between px-[5%] h-[80px] items-center">
      <Link href="/" className="text-2xl">
        Space Typo
      </Link>
      <nav>
        <ul className="flex gap-x-5 items-center">
          {routes.map(({ label, path }) => (
            <li key={path} className="text-white/70">
              <Link
                href={path}
                className={currentPath === path ? "font-bold" : ""}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
