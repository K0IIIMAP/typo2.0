import React from "react";

export default function Navbar() {
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
