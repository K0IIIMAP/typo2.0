import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between px-[5%]">
      <h1>Space Typo</h1>
      <nav>
        <ul className="flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/modes">Modes</Link>
          </li>{" "}
          <li>
            <Link href="/challenges">Challenges</Link>
          </li>{" "}
          <li>
            <Link href="/log-in">Log in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
