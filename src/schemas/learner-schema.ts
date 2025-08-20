import z from "zod";

const fileSchema = z
  .instanceof(File, { message: "Please upload a file" })
  .refine((file) => file.size <= 1 * 1024 * 1024, {
    message: "File size must be less than 1MB",
  })
  .refine(
    (file) =>
      ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(
        file.type
      ),
    {
      message: "Only JPEG, PNG, GIF, and WebP files are allowed",
    }
  );

export const UpdateLearnerTypeSchema = z.object({
  image: fileSchema.optional().or(z.literal(null)), // Make optional or required based on your needs
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  location: z.string().optional(),
  contact: z.string().optional(),
});

export type UpdateLearnerFormData = z.infer<typeof UpdateLearnerTypeSchema>;
