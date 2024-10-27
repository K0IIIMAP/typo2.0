"use client";
import { signOutUser } from "@/actions/actions";
import React, { useTransition } from "react";
import { Button } from "./ui/button";

export default function SignOutBtn() {
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      disabled={isPending}
      className="bg-accent/100 hover:bg-accent/95 mt-10"
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
