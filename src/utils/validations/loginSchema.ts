import { z } from "zod";

const loginSchema = z.object({
  username: z
    .string()
    .min(1, {message: "Email is required"}),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, {message: "Password should be 8 characters long"}),
});

export default loginSchema;
