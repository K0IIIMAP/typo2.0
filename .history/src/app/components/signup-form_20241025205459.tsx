import { cn } from "@/lib/utils";
import React from "react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
type SignUpFormProps = {
  loginIsActive: boolean;
  setLoginIsActive: Dispatch<SetStateAction<boolean>>;
};
export default function SignUpForm({
  loginIsActive,
  setLoginIsActive,
}: SignUpFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div
      className={cn(
        `border-2 border-white/50 rounded-lg px-6 pt-6  text-white/80 bg-black/30 fixed w-[384px] transition-all  duration-300`,
        {
          "opacity-0": loginIsActive, // Invisible when login is active
          "opacity-100": !loginIsActive, // Visible when signup is active
          "translate-x-[100%]": loginIsActive, // Slide to the right when login is active
          "translate-x-0": !loginIsActive, // Stay in place when signup is active
        }
      )}
    >
      <h2 className="text-white/80 text-2xl font-bold text-center mb-6">
        Sign up
      </h2>
      <form className="text-white/80">
        <input
          type="email"
          className="w-full p-3 mb-4 border border-white/80 rounded-md bg-white/0 focus:outline-none focus:scale-[1.01] transition"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="w-full p-3 mb-6 border border-white/80 rounded-md bg-white/0 focus:outline-none focus:scale-[1.01] transition"
          placeholder="Password"
          required
        />
        <input
          type="password"
          className="w-full p-3 mb-6 border border-white/80 rounded-md bg-white/0 focus:outline-none focus:scale-[1.01] transition"
          placeholder="Confirm password"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-accent/100 text-white/80 rounded-md hover:bg-accent hover:scale-[1.01] focus:scale-[0.98] transition"
        >
          Sign Up
        </button>
      </form>
      <p className="pt-10 pb-3 text-center">
        Already have an account?{" "}
        <button
          className="font-semibold cursor-pointer underline"
          onClick={() => setLoginIsActive(true)}
        >
          Log In
        </button>
      </p>
    </div>
  );
}
