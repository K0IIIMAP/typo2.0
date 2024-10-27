import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/"></Link>
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
