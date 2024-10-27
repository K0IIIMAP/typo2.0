"use server";
import bcrypt from "bcryptjs";

export const createUser = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  console.log(hashedPassword);
};
