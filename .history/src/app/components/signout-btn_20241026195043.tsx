"use client";
import { signOutUser } from "@/actions/actions";
import React, { useTransition } from "react";
import { Button } from "./ui/button";

export default function SignOutBtn() {
  const [isPending, startTransition] = useTransition();
  return (
    <Button
      disabled={isPending}
      className="bg-accent/90 hover:bg-accent mt-10"
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
