"use client";

import { useState } from "react";
import SignUpForm from "../components/signup-form";
import LogInForm from "../components/login-form";

export default function LoginPage() {
  const [loginIsActive, setLoginIsActive] = useState(true);

  return (
    <div className="flex mx-auto mt-28 w-[384px] ">
      {/* Container for both forms */}
      <div className="relative w-[384px]">
        {/* Login Form */}
        <LogInForm
          setLoginIsActive={setLoginIsActive}
          loginIsActive={loginIsActive}
        />

        {/* Sign Up Form */}

        <SignUpForm
          setLoginIsActive={setLoginIsActive}
          loginIsActive={loginIsActive}
        />
      </div>
    </div>
  );
}
