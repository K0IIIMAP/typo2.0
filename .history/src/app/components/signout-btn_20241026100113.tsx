import { signOutUser } from "@/actions/actions";
import React from "react";

export default function SignOutBtn() {
  return (
    <button className="py-2 px-4 bg-black mt-10" onClick={() => signOutUser()}>
      Sign out
    </button>
  );
}
