"use server";
import { bcrypt } from "bcryptjs";
export const async createUser = (data) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  console.log(hashedPassword);
};
