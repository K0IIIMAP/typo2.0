import { z } from "zod";

const SignUpSchema = z.object({
  email: z.string().email,
});
