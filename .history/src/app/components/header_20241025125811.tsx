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
        </ul>
      </nav>
    </header>
  );
}
