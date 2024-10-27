"use client";
import { signOutUser } from "@/actions/actions";
import React, { useTransition } from "react";
import { Button } from "./ui/button";

export default function SignOutBtn() {
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      className="bg-accent hover:bg-acctent/80"
      onClick={() =>
        startTransition(async () => {
          await signOutUser();
        })
      }
    >
      Sign out
    </Button>
  );
}
