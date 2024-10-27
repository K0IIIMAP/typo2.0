"use client";
import useTabloidContext from "@/lib/hooks";
import React from "react";

export default function Tabloid() {
  const { mistakes, cpm } = useTabloidContext();
  return (
    <>
      <p>Mistakes:{mistakes}</p>
      <p>
        Speed:{isFinite(cpm) && !isNaN(cpm) ? cpm : "0"}
        chrs/min
      </p>
    </>
  );
}
