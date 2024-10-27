"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signUpSchema = z
  .object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(8, "Password must contain at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type SignUpSchema = z.infer<typeof signUpSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpSchema) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col">
      <h1>This is the main page of the app</h1>

      <form className="flex flex-col gap-y-1" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="border-black border"
          placeholder="email"
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          type="password"
          id="password"
          className="border-black border"
          placeholder="password"
        />
        {errors.password && <span>{errors.password.message}</span>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          {...register("confirmPassword")}
          type="password"
          id="confirmPassword"
          className="border-black border"
          placeholder="confirm password"
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}

        <button
          disabled={isSubmitting}
          className="border border-black mt-1 bg-slate-600"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
