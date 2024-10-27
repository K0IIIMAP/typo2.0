"use client";
import React from "react";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function AuthBtn({ type }: { type: string }) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className="  mt-4 w-full p-3 bg-accent/100 text-white/80 rounded-md hover:bg-accent hover:scale-[1.01] focus:scale-[0.98] transition"
    >
      {type === "signIn" ? "Sign in" : "Log in"}
    </Button>
  );
}
