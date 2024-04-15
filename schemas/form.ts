"use client";

import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  companyName: z.string().min(2).max(100),
  senderStatus: z.string(),
  comments: z.string().min(10).max(1000),
});
