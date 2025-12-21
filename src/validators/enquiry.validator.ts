import { z } from "zod";

export const EnquiryValidator = z.object({
  fullName: z
    .string({
      required_error: "Full Name is required",
      invalid_type_error: "Full Name must be a string",
    })
    .trim()
    .min(1, "Full Name is required"),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Please enter a valid email address")
    .max(250, "Email must be less than 250 characters long"),

  phone: z
  .string({
    required_error: "Phone number is required",
    invalid_type_error: "Phone number must be a string",
  })
  .trim()
  .transform((value) => {
    // remove spaces
    const v = value.replace(/\s+/g, "");

    // if user entered 10-digit number, prefix +91
    if (/^[6-9]\d{9}$/.test(v)) {
      return `+91${v}`;
    }

    return v;
  })
  .refine(
    (value) => /^\+91[6-9]\d{9}$/.test(value),
    {
      message: "Phone number must be 10 digits or in format +91XXXXXXXXXX",
    }
  ),


  service: z
    .string({
      required_error: "Service is required",
      invalid_type_error: "Service must be a string",
    })
    .min(1, "Please select a service"),

  message: z
    .string()
    .max(1000, "Message must be less than 1000 characters long")
    .optional()
    .or(z.literal("")),
});

export type EnquiryModel = z.infer<typeof EnquiryValidator>;
