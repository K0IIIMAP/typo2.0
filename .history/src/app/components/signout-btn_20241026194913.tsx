"use client";
import { signOutUser } from "@/actions/actions";
import React, { useTransition } from "react";

export default function SignOutBtn() {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      className="py-2 px-4 bg-black mt-10"
      onClick={() =>
        startTransition(async () => {
          await signOutUser();
        })()
      }
    >
      Sign out
    </button>
  );
}
