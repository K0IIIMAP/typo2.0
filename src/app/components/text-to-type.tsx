import React from "react";

export default function TextToType({ textToType }: { textToType: string }) {
  return (
    <div className="absolute left-1/2 text-[50px] font-normal whitespace-nowrap z-[1] select-none transition-transform duration-300 flex h-full items-center">
      <p>{textToType}</p>
    </div>
  );
}
