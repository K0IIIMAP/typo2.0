import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between">
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
            <Link href="/login">Log in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
