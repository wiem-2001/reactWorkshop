import { z } from "zod";

export const eventSchema = z.object({
  name: z.string().min(3, { message: "Name should be at least 3 characters long" }),
  description: z.string().min(10, { message: "Description should be at least 10 characters long" }),
  price: z.number({ invalid_type_error: "Price is required" })
    .positive({ message: "Price must be a positive number" })
    .min(1).max(100),
  tickets: z.number({ invalid_type_error: "Tickets is required" }).int().positive(),
  // imageUrl: z.any()
  //   .refine((file) => file?.length > 0, "File is required") //required file
  //   .refine((file) => file?.[0]?.size <= 5 * 1024 * 1024, "File size must be less than 5MB"), //size not less then 5MB
   imageUrl: z.any().optional()
});